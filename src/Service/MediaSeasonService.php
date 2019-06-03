<?php


namespace App\Service;


use App\Entity\Item;
use App\Entity\MediaSeason;
use Exception;
use Symfony\Bridge\Doctrine\RegistryInterface;

class MediaSeasonService
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
     * @return MediaSeason[]
     */
    public function all()
    {
        return $this->registry->getRepository(MediaSeason::class)->findBy([], ['number' => 'ASC']);
    }

    /**
     * Retrieve an item based on his ID
     *
     * @param integer $id
     *
     * @return MediaSeason
     * @throws Exception
     */
    public function retrieve($id)
    {
        /** @var Item $item */
        return $this->registry->getRepository(MediaSeason::class)->find($id);
    }

    /**
     * Retrieve a list of item based on the given parameters
     *
     * @param array parameters
     *
     * @return MediaSeason[]
     * @throws Exception
     */
    public function retrieveBy(array $parameters)
    {
        return $this->registry->getRepository(MediaSeason::class)->findBy($parameters);
    }

}
