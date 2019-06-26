<?php


namespace App\Service;


use App\Entity\Item;
use App\Entity\Media;
use App\Entity\MediaSeason;
use App\Entity\MediaSeasonEpisode;
use App\Processor\AbstractMediaUpdater;
use Exception;
use Symfony\Bridge\Doctrine\RegistryInterface;

class MediaService
{
    /**
     * @var RegistryInterface
     */
    private $registry;
    /**
     * @var AbstractMediaUpdater
     */
    private $mediaUpdater;

    public function __construct(RegistryInterface $registry, AbstractMediaUpdater $mediaUpdater)
    {
        $this->registry = $registry;
        $this->mediaUpdater = $mediaUpdater;
    }


    /**
     * Extract all media from database
     *
     * @return Media[]
     */
    public function all()
    {
        return $this->registry->getRepository(Media::class)->findBy([], ['title' => 'ASC']);
    }

    /**
     * Retrieve an item based on his ID
     *
     * @param integer $id
     *
     * @return Media
     * @throws Exception
     */
    public function retrieve($id)
    {
        /** @var Item $item */
        return $this->registry->getRepository(Media::class)->find($id);
    }

    /**
     * Read the MovieDB API and create associated Media
     *
     * @param Item $item
     *
     * @throws Exception
     */
    public function synchronize(Item $item)
    {
        if ($item->getMedia() !== null) {
            return;
        }

        $updater = $this->mediaUpdater->getUpdater($item->getCategory());
        if ($updater === null) {
            return;
        }
        $updater->synchronize($item);
    }

    /**
     * Retrieve the $seasonId for the given $media
     *
     * @param Media   $media
     * @param integer $seasonId
     *
     * @return MediaSeason|null
     */
    public function getMediaSeason(Media $media, $seasonId)
    {
        return $this->registry->getRepository(MediaSeason::class)->findOneBy(['media' => $media->getId(), 'number' => $seasonId]);
    }

    /**
     * Retrieve the $seasonId for the given $media
     *
     * @param MediaSeason $season
     * @param integer     $episodeId
     *
     * @return MediaSeasonEpisode|null
     */
    public function getMediaSeasonEpisode(MediaSeason $season, $episodeId)
    {
        return $this->registry->getRepository(MediaSeasonEpisode::class)->findOneBy(['season' => $season->getId(), 'number' => $episodeId]);
    }

    /**
     * Update Media's information based on TheMovieDB information
     *
     * @param Media $media
     *
     * @throws Exception
     */
    public function update(Media $media)
    {
        $updater = $this->mediaUpdater->getUpdater($media->getCategory());
        if ($updater === null) {
            return;
        }
        $updater->update($media);
    }

}
