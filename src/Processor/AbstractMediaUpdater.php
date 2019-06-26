<?php


namespace App\Processor;


use App\Entity\Item;
use App\Entity\Media;
use App\Nomenclature\CategoryNomenclature;
use App\Processor\TheMovieDB\MediaUpdater as TMDBMediaUpdater;
use App\Processor\TheTVDB\MediaUpdater as TTVDBMediaUpdater;
use RuntimeException;
use Symfony\Component\DependencyInjection\ContainerInterface;

class AbstractMediaUpdater
{
    /**
     * @var ContainerInterface
     */
    private $container;

    public function __construct(ContainerInterface $container)
    {
        $this->container = $container;
    }

    /**
     * Retrieve the appropriate MediaUpdater
     *
     * @param $category
     *
     * @return AbstractMediaUpdater|null
     */
    public function getUpdater($category)
    {
        switch ($category) {

            case CategoryNomenclature::MOVIE :
                return $this->container->get(TMDBMediaUpdater::class);

            case CategoryNomenclature::ANIME :
            case CategoryNomenclature::TV :
                return $this->container->get(TTVDBMediaUpdater::class);

            default:
                return null;
        }
    }

    /**
     * Search in the database if the given Item already exist
     *
     * @param Item $item
     */
    public function synchronize(Item $item)
    {
        throw new RuntimeException('This should not be reached! You need to implement it');
    }

    /**
     * Update the given media with latest information
     *
     * @param Media $media
     */
    public function update(Media $media)
    {
        throw new RuntimeException('This should not be reached! You need to implement it');
    }
}
