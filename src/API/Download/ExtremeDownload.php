<?php


namespace App\API\Download;


use App\DTO\ExtremeDownload\SearchItemDTO;
use App\Entity\Item;
use App\Entity\Source;
use App\Entity\SourceWatch;
use App\Nomenclature\CategoryNomenclature;
use DOMDocument;
use DOMNode;
use DOMNodeList;
use DOMXPath;
use ErrorException;
use GuzzleHttp\Client;
use Symfony\Bridge\Doctrine\RegistryInterface;
use Symfony\Component\DependencyInjection\ParameterBag\ParameterBagInterface;

class ExtremeDownload implements AbstractAPI
{
    const SOURCE_NAME = 'Extreme Download';

    /** @var Source */
    private $source;
    /** @var ParameterBagInterface */
    private $parameterBag;
    /** @var RegistryInterface */
    private $registry;

    public function __construct(ParameterBagInterface $parameterBag, RegistryInterface $registry)
    {
        $this->parameterBag = $parameterBag;
        $this->registry = $registry;
    }

    /**
     * Search the $q parameter on the ExtremeDownload website
     *
     * @param $q
     *
     * @return Item[]
     */
    public function search($q)
    {
        $client = $this->getClient();


        $options = [
            'form_params' => [
                'do' => 'search',
                'subaction' => 'search',
                'search_start' => '0',
                'full_search' => '0',
                'result_from' => '1',
                'story' => urlencode($q),
                'speedsearch' => '0',
            ],
            'headers' => [
                'Content-Type' => 'application/x-www-form-urlencoded',
            ]
        ];

        $response = $client->post('/index.php?do=search', $options);

        return $this->parseSearchResults($response->getBody()->getContents());
    }

    private function getClient()
    {
        return new Client(['base_uri' => $this->getBaseURL()]);
    }

    /**
     * {@inheritDoc}
     */
    public function getBaseURL()
    {
        return $this->parameterBag->get('api.extreme_download.base_url');
    }

    /**
     * Parse the content of the results page
     *
     * @param string $html
     *
     * @return Item[]
     */
    private function parseSearchResults($html)
    {
        $domDocument = new DOMDocument();
        $internalErrors = libxml_use_internal_errors(true);
        $domDocument->loadHTML($html);
        libxml_use_internal_errors($internalErrors);

        $domXPath = new DOMXPath($domDocument);
        $classname = "thumbnails";

        /** @var DOMNodeList $nodes */
        $nodes = $domXPath->query("//a[contains(concat(' ', normalize-space(@class), ' '), ' $classname ')]");

        $retour = [];

        for ($i = 0; $i < $nodes->length; $i++) {
            $node = $nodes->item($i);
            $item = SearchItemDTO::convert($node);
            if ($item !== null) {
                $item->setUrl(str_ireplace($this->getBaseURL(), '', $item->getFullUrl()));
                $item->setSource($this->getSource());
                $retour[] = $item;
            }
        }

        return $retour;
    }

    /**
     * Get the source associated to the API
     *
     * @return Source
     */
    public function getSource()
    {
        if ($this->source === null) {
            $source = $this->registry->getRepository(Source::class)->findOneBy(['title' => self::SOURCE_NAME]);
            if ($source === null) {
                $source = new Source();
                $source->setTitle(self::SOURCE_NAME);
            }
            $source->setBaseUrl($this->getBaseURL());

            $this->registry->getManager()->persist($source);
            $this->source = $source;
        }

        return $this->source;
    }

    /**
     * {@inheritDoc}
     */
    public function update(Item $item)
    {
        $client = $this->getClient();
        $response = $client->get($item->getUrl());

        return $this->parsePage($item, $response->getBody()->getContents());
    }



    /**
     * Parse the sourceWatch page in order to extract new items
     *
     * @param SourceWatch $sourceWatch
     *
     * @return Item[]
     */
    public function watch(SourceWatch $sourceWatch)
    {
        $client = $this->getClient();

        $response = $client->get($sourceWatch->getUrl());

        return $this->parseSearchResults($response->getBody()->getContents());
    }

    /**
     * Parse the content of the html page to extract informations
     *
     * @param Item   $item
     * @param string $html
     */
    private function parsePage(Item $item, $html)
    {
        $domDocument = new DOMDocument();
        $internalErrors = libxml_use_internal_errors(true);
        $domDocument->loadHTML($html);
        libxml_use_internal_errors($internalErrors);

        $this->parseHtmlCategory($item, $domDocument);
        $this->parseHTMLUploadInfosTable($item, $domDocument);
        $this->parseHTMLReleaseName($item, $domDocument);
    }

    private function parseHtmlCategory(Item $item, DOMDocument $document)
    {
        $domXPath = new DOMXPath($document);

        /** @var DOMNodeList $nodes */
        $nodes = $domXPath->query('//span[@id="dle-speedbar"]/span');

        for ($i = 0; $i < $nodes->length; $i++) {
            $node = $nodes->item($i);
            if (stripos($node->nodeValue, "manga") !== false) {
                $item->setCategory(CategoryNomenclature::ANIME);
            } elseif (stripos($node->nodeValue, "series") !== false) {
                $item->setCategory(CategoryNomenclature::TV);
            } elseif (stripos($node->nodeValue, "films") !== false) {
                $item->setCategory(CategoryNomenclature::MOVIE);
            } elseif (stripos($node->nodeValue, "jeu") !== false) {
                $item->setCategory(CategoryNomenclature::GAME);
            } elseif (stripos($node->nodeValue, "musique") !== false) {
                $item->setCategory(CategoryNomenclature::MUSIC);
            } elseif (stripos($node->nodeValue, "news") !== false) {
                $item->setCategory(CategoryNomenclature::NEWS);
            } elseif (stripos($node->nodeValue, "logiciels") !== false) {
                $item->setCategory(CategoryNomenclature::SOFTWARE);
            }
        }
    }

    private function parseHTMLUploadInfosTable(Item $item, DOMDocument $document)
    {
        $domXPath = new DOMXPath($document);

        /** @var DOMNodeList $nodes */
        $nodes = $domXPath->query("//div[contains(concat(' ', normalize-space(@class), ' '), ' upload-infos ')]/table/tbody/*/td");
        if($nodes->length === 0){
            $nodes = $domXPath->query("//div[contains(concat(' ', normalize-space(@class), ' '), ' upload-infos ')]/table/*/td");
        }
        for ($i = 0; $i < $nodes->length; $i++) {
            /** @var DOMNode $node */
            $node = $nodes->item($i);
            $this->nodeExtractQualite($item, $node);
            $this->nodeExtractLanguage($item, $node);
        }
    }

    private function parseHTMLReleaseName(Item $item, DOMDocument $document)
    {
        $domXPath = new DOMXPath($document);

        /** @var DOMNodeList $nodes */
        $nodes = $domXPath->query("//p[@class='release-name']");
        for ($i = 0; $i < $nodes->length; $i++) {
            /** @var DOMNode $node */
            $node = $nodes->item($i);
            $this->nodeExtractSeason($item, $node);
        }
    }

    private function nodeExtractQualite(Item $item, DOMNode $node)
    {
        if (stripos($node->nodeValue, "qualité") === false) {
            return;
        }
        $qualite = trim(str_ireplace("qualité", "", $node->nodeValue));
        $item->setQuality($qualite);
    }

    private function nodeExtractLanguage(Item $item, DOMNode $node)
    {
        if (stripos($node->nodeValue, "Langue release") === false) {
            return;
        }
        $qualite = trim(str_ireplace("Langue release", "", $node->nodeValue));
        $item->setLanguage($qualite);
    }

    private function nodeExtractSeason(Item $item, DOMNode $node)
    {
        preg_match('/\.s(?<season>\d{1,2})e(?<episode>\d{1,2})\./', strtolower($node->nodeValue), $matches);
        if(isset($matches["season"])){
            $item->setSeason($matches["season"]);
            return;
        }
        preg_match('/\.s(?<season>\d{1,2})\./', strtolower($node->nodeValue), $matches);
        if(isset($matches["season"])){
            $item->setSeason($matches["season"]);
            return;
        }

    }
}
