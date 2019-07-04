<?php


namespace App\Processor\TheTVDB;


use App\API\Data\TheMovieDB;
use App\API\Data\TheTVDB;
use App\Entity\Genre;
use App\Entity\Item;
use App\Entity\Media;
use App\Entity\MediaSeason;
use App\Entity\MediaSeasonEpisode;
use App\Nomenclature\CategoryNomenclature;
use App\Processor\AbstractMediaUpdater;
use App\Service\MediaService;
use DateTime;
use Exception;
use Symfony\Bridge\Doctrine\RegistryInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;

/**
 * @property RegistryInterface registry
 * @property TheTVDB           theTVDB
 * @property MediaService      mediaService
 * @property TheMovieDB        theMovieDB
 */
final class MediaUpdater extends AbstractMediaUpdater
{
    public function __construct(ContainerInterface $container, RegistryInterface $registry, TheTVDB $theTVDB, TheMovieDB $theMovieDB, MediaService $mediaService)
    {
        parent::__construct($container);

        $this->registry = $registry;
        $this->theTVDB = $theTVDB;
        $this->theMovieDB = $theMovieDB;
        $this->mediaService = $mediaService;
    }

    /**
     * {@inheritDoc}
     */
    public function synchronize(Item $item)
    {

        $data = $this->theTVDB->searchShow($item->getTitle());
        if ($data === null) {
            $tmdbData = $this->theMovieDB->searchTvShow($item->getTitle());
            if ($tmdbData !== null) {
                $data = $this->theTVDB->searchShow(isset($tmdbData['title']) ? $tmdbData['title'] : $tmdbData['name']);
            }
        }
        if ($data !== null) {
            $media = $this->registry->getRepository(Media::class)->findOneBy(["sourceId" => $data['id']]);

            if ($media === null) {
                $media = new Media();
                $media->setCategory($item->getCategory());
                $media->setSource("thetvdb");

                $this->updateMediaData($media, $data);

                $this->registry->getManager()->persist($media);
            }

            $item->setMedia($media);
            $this->registry->getManager()->persist($item);
            $this->registry->getManager()->flush();
        }
    }

    private function updateMediaData(Media $media, array $data)
    {
        $data = $this->theTVDB->getShow($data['id']);
        $media->setTitle($data['seriesName']);
        $media->setSourceId($data['id']);
        $media->setDescription($data['overview']);

        $posters = $this->theTVDB->getShowImage($media->getSourceId(), 'poster');
        if ($posters !== null) {
            foreach ($posters as $poster) {
                if ($this->theTVDB->isPosterOK($poster['fileName']))
                    $media->setPoster($poster['fileName']);
                break;
            }
        }

        $posters = $this->theTVDB->getShowImage($media->getSourceId(), 'fanart');
        if ($posters !== null) {
            foreach ($posters as $poster) {
                if ($this->theTVDB->isPosterOK($poster['fileName']))
                    $media->setBackdrop($poster['fileName']);
                break;
            }
        }

        if (isset($data['siteRating'])) {
            $media->setAverageNote($data['siteRating']);
        }
        $media->setUpdated(new DateTime("now"));
        $media->setStatus($data['status']);
        $releaseDate = null;
        if (isset($data['lastUpdated'])) {
            try {
                $releaseDate = DateTime::createFromFormat('U', $data['lastUpdated']);
            } catch (Exception $e) {
            }
        }
        if (isset($data['firstAired'])) {
            try {
                $releaseDate = DateTime::createFromFormat('Y-m-d', $data['lastUpdated']);
            } catch (Exception $e) {
            }
        }
        if ($releaseDate !== false) {
            $media->setReleaseDate($releaseDate);
        }
        if (isset($data['genre'])) {
            $genreRepository = $this->registry->getRepository(Genre::class);
            foreach ($data['genre'] as $g) {
                if (strcasecmp($g, 'anime') === 0 || strcasecmp($g, 'animation') === 0) {
                    $media->setCategory(CategoryNomenclature::ANIME);
                }
                $genre = $genreRepository->findOneBy(['title' => $g]);
                if ($genre === null) {
                    $genre = new Genre();
                    $genre->setTitle($g);
                    $this->registry->getManager()->persist($genre);
                }
                $media->addGenre($genre);
            }
        }

        $this->registry->getManager()->persist($media);
        $this->registry->getManager()->flush();

        $this->handleEpisodes($media);
    }

    /**
     * Retrieve episodes data for the given media
     *
     * @param Media $media
     */
    private function handleEpisodes(Media $media)
    {
        $data = $this->theTVDB->getEpisodes($media->getSourceId());
        if ($data === null) {
            return;
        }

        do {
            $this->parseDataEpisodes($media, $data['data']);
            if ($data['links']['next'] !== null) {
                $data = $this->theTVDB->getEpisodes($media->getSourceId(), $data['links']['next']);
            } else {
                break;
            }
        } while (true);
    }

    private function parseDataEpisodes(Media $media, array $data)
    {
        $mediaEpisodeRegistry = $this->registry->getRepository(MediaSeasonEpisode::class);
        foreach ($data as $row) {
            $mediaSeason = $this->handleSeason($media, $row);

            $mediaEpisode = $mediaEpisodeRegistry->findOneBy(['season' => $mediaSeason->getId(), 'theMovieDbId' => $row['id']]);
            if ($mediaEpisode === null) {
                $mediaEpisode = new MediaSeasonEpisode();
                $mediaEpisode->setSeason($mediaSeason);
            }

            $mediaEpisode->setNumber($row['airedEpisodeNumber']);
            $mediaEpisode->setTitle($row['episodeName'] !== null ? $row['episodeName'] : 'Episode '.$mediaEpisode->getNumber());
            $mediaEpisode->setTheMovieDbId($row['id']);
            $mediaEpisode->setDescription($row['overview']);
            $mediaEpisode->setPoster($row['filename']);
            $mediaEpisode->setAverageNote($row['siteRating']);
            $releaseDate = DateTime::createFromFormat('Y-m-d', $row['firstAired']);
            if ($releaseDate === false) {
                $mediaEpisode->setReleaseDate(null);
            } else {
                $mediaEpisode->setReleaseDate($releaseDate);
            }
            $this->registry->getManager()->persist($mediaEpisode);
            $this->registry->getManager()->flush();
        }
    }

    /**
     * Check the database for the given season or create it if unknown
     *
     * @param Media $media
     * @param array $data
     *
     * @return MediaSeason|object|null
     */
    private function handleSeason(Media $media, array $data)
    {
        $mediaSeasonRegistry = $this->registry->getRepository(MediaSeason::class);
        $mediaSeason = $mediaSeasonRegistry->findOneBy(['media' => $media->getId(), 'theMovieDbId' => $data['airedSeasonID']]);
        if ($mediaSeason === null) {
            $mediaSeason = new MediaSeason();
            $mediaSeason->setMedia($media);
            $mediaSeason->setNumber($data['airedSeason']);
            $mediaSeason->setTitle(sprintf('Saison %d', $mediaSeason->getNumber()));
            $mediaSeason->setTheMovieDbId($data['airedSeasonID']);

            $posters = $this->theTVDB->getSeasonPoster($media->getSourceId(), $data['airedSeason']);
            if ($posters !== null) {
                foreach ($posters as $poster) {
                    if ($this->theTVDB->isPosterOK($poster['fileName']))
                        $media->setPoster($poster['fileName']);
                    break;
                }
            }

            $this->registry->getManager()->persist($mediaSeason);
            $this->registry->getManager()->flush();

        }
        return $mediaSeason;
    }

    /**
     * {@inheritDoc}
     */
    public function update(Media $media)
    {
        $data = $this->theTVDB->getShow($media->getSourceId());
        if ($data !== null) {
            $this->updateMediaData($media, $data);
            $media->setSource("thetvdb");
            $this->registry->getManager()->flush();
        }
    }

}
