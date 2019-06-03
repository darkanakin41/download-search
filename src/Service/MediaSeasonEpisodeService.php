<?php


namespace App\Service;


use App\Entity\Item;
use App\Entity\MediaSeasonEpisode;
use Exception;
use Symfony\Bridge\Doctrine\RegistryInterface;

class MediaSeasonEpisodeService
{

    /**
     * @var RegistryInterface
     */
    private $registry;

    public function __construct(RegistryInterface $registry)
    {
        $this->registry = $registry;
    }


    /**
     * Extract all media from database
     *
     * @return MediaSeasonEpisode[]
     */
    public function all()
    {
        return $this->registry->getRepository(MediaSeasonEpisode::class)->findBy([], ['number' => 'ASC']);
    }

    /**
     * Retrieve an item based on his ID
     *
     * @param integer $id
     *
     * @return MediaSeasonEpisode
     * @throws Exception
     */
    public function retrieve($id)
    {
        /** @var Item $item */
        return $this->registry->getRepository(MediaSeasonEpisode::class)->find($id);
    }

    /**
     * Retrieve a list of item based on the given parameters
     *
     * @param array parameters
     *
     * @return MediaSeasonEpisode[]
     * @throws Exception
     */
    public function retrieveBy(array $parameters)
    {
        return $this->registry->getRepository(MediaSeasonEpisode::class)->findBy($parameters);
    }

}
