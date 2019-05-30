<?php


namespace App\API\Download;


use App\DTO\AnnuaireTelechargement\SearchItemDTO;
use App\Entity\Item;
use App\Entity\Source;
use App\Nomenclature\CategoryNomenclature;
use DOMDocument;
use DOMNode;
use DOMNodeList;
use DOMXPath;
use GuzzleHttp\Client;
use Symfony\Bridge\Doctrine\RegistryInterface;
use Symfony\Component\DependencyInjection\ParameterBag\ParameterBagInterface;

class AnnuaireTelechargement implements AbstractAPI
{
    const SOURCE_NAME = 'Annuaire Téléchargement';

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

        $urlParameters = [
            'mod' => 'filter',
            'catid' => 0,
            'note' => 0,
            'q' => $q,
            'art' => 0,
            'AiffageMode' => 0,
            'inputTirePar' => 0,
            'cstart' => 0,
        ];

        $options = [
            'headers' => [
                'Referer' => $this->getBaseURL(),
            ]
        ];

        $response = $client->get('/engine/ajax/controller.php?'.http_build_query($urlParameters), $options);

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
        return $this->parameterBag->get('api.zone_telechargement.base_url');
    }

    /**
     * @param string $html
     *
     * @return Item[]
     */
    private function parseSearchResults($html)
    {
        $domDocument = new DOMDocument();
        $internalErrors = libxml_use_internal_errors(true);
        $domDocument->loadHTML("<body>".$html."</body>");
        libxml_use_internal_errors($internalErrors);

        $domXPath = new DOMXPath($domDocument);
        $classname = "cover_global";

        /** @var DOMNodeList $nodes */
        $nodes = $domXPath->query("//div[contains(concat(' ', normalize-space(@class), ' '), ' $classname ')]");

        $retour = [];

        for ($i = 0; $i < $nodes->length; $i++) {
            $node = $nodes->item($i);
            $item = SearchItemDTO::convert($node);
            if ($item !== null) {
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
     * Parse the content of the html page to extract informations
     *
     * @param Item   $item
     * @param string $html
     */
    private function parsePage(Item $item, $html)
    {
        $domDocument = new DOMDocument();
        $internalErrors = libxml_use_internal_errors(true);
        $domDocument->loadHTML(str_ireplace(['<br>','<br/>','<br />'], PHP_EOL, $html));
        libxml_use_internal_errors($internalErrors);

        $this->parseHtmlCategory($item, $domDocument);
        $this->parseHTMLCorpsHeader($item, $domDocument);
    }

    private function parseHtmlCategory(Item $item, DOMDocument $document)
    {
        $domXPath = new DOMXPath($document);

        /** @var DOMNodeList $nodes */
        $nodes = $domXPath->query('//span[@class="link_cat"]');

        for ($i = 0; $i < $nodes->length; $i++) {
            $node = $nodes->item($i);
            if (stripos($node->nodeValue, "animes") !== false) {
                $item->setCategory(CategoryNomenclature::ANIME);
            } elseif (stripos($node->nodeValue, "séries") !== false) {
                $item->setCategory(CategoryNomenclature::TV);
            } elseif (stripos($node->nodeValue, "films") !== false) {
                $item->setCategory(CategoryNomenclature::MOVIE);
            } elseif (stripos($node->nodeValue, "jeu") !== false) {
                $item->setCategory(CategoryNomenclature::GAME);
            }
        }
    }

    private function parseHTMLCorpsHeader(Item $item, DOMDocument $document)
    {
        $domXPath = new DOMXPath($document);

        /** @var DOMNodeList $nodes */
        $nodes = $domXPath->query('//div[@class="corps"]/div[1]/div');

        for ($i = 0; $i < $nodes->length; $i++) {
            $node = $nodes->item($i);
            $this->nodeExtractQualite($item, $node);
            $this->nodeExtractSeason($item, $node);
        }
    }

    private function nodeExtractQualite(Item $item, DOMNode $node)
    {
        if (stripos($node->nodeValue, "qualité") === false) {
            return;
        }
        $nodeValueExploded = explode('|', $node->nodeValue);
        if (count($nodeValueExploded) === 1) {
            return;
        }
        if (count($nodeValueExploded) > 1) {
            $item->setLanguage(trim(array_pop($nodeValueExploded)));
        }
        $qualite = trim(str_ireplace("qualité", "", array_shift($nodeValueExploded)));
        $item->setQuality($qualite);
    }

    private function nodeExtractSeason(Item $item, DOMNode $node)
    {
        if (stripos($node->nodeValue, "saison") === false) {
            return;
        }
        $nodeValueExploded = explode('|', $node->nodeValue);
        if (count($nodeValueExploded) === 1) {
            return;
        }
        $lastPart = array_pop($nodeValueExploded);

        // Récupération du numéro de saison
        if(stripos($lastPart, PHP_EOL) !== false){
            $lastPartExploded = explode(PHP_EOL, $lastPart);
            $seasonRaw = array_pop($lastPartExploded);
        }else{
            $seasonRaw = $lastPart;
        }
        $season = intval(trim(str_ireplace(["saison", "complet", "complete"], "", $seasonRaw)));
        $item->setSeason($season);

        // Récupération du language
        if (stripos($node->nodeValue, "qualité") !== false) {
            if(stripos($lastPart, PHP_EOL) !== false){
                $baseString = $lastPart;
            }else{
                $baseString = array_pop($nodeValueExploded);
            }
            $lastPartExploded = explode(PHP_EOL, $baseString);
            $language = trim(strtolower(array_shift($lastPartExploded)));
            $item->setLanguage($language);
        }
    }

}
