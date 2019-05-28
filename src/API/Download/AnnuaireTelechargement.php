<?php


namespace App\API\Download;


use App\DTO\AnnuaireTelechargement\SearchItemDTO;
use App\Entity\Item;
use App\Entity\Source;
use App\Nomenclature\CategoryNomenclature;
use DOMDocument;
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
     * {@inheritDoc}
     */
    public function getBaseURL()
    {
        return $this->parameterBag->get('api.zone_telechargement.base_url');
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
        if($this->source === null){
            $source = $this->registry->getRepository(Source::class)->findOneBy(['title' => self::SOURCE_NAME]);
            if($source === null){
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
        $domDocument->loadHTML($html);
        libxml_use_internal_errors($internalErrors);

        $domXPath = new DOMXPath($domDocument);

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
            }
        }
    }
}
