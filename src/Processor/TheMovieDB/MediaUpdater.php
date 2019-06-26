<?php


namespace App\Processor\TheMovieDB;


use App\API\Data\TheMovieDB;
use App\Entity\Genre;
use App\Entity\Item;
use App\Entity\Media;
use App\Entity\MediaSeason;
use App\Entity\MediaSeasonEpisode;
use App\Processor\AbstractMediaUpdater;
use App\Service\MediaService;
use DateTime;
use Exception;
use Symfony\Bridge\Doctrine\RegistryInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;

/**
 * @property RegistryInterface registry
 * @property TheMovieDB        theMovieDB
 * @property MediaService      mediaService
 */
final class MediaUpdater extends AbstractMediaUpdater
{
    public function __construct(ContainerInterface $container, RegistryInterface $registry, TheMovieDB $theMovieDB, MediaService $mediaService)
    {
        parent::__construct($container);

        $this->registry = $registry;
        $this->theMovieDB = $theMovieDB;
        $this->mediaService = $mediaService;
    }

    /**
     * {@inheritDoc}
     */
    public function synchronize(Item $item)
    {

        $data = $this->theMovieDB->searchMovie($item->getTitle());
        if ($data !== null) {
            $media = $this->registry->getRepository(Media::class)->findOneBy(["sourceId" => $data['id']]);

            if ($media === null) {
                $media = new Media();
                $media->setCategory($item->getCategory());
                $media->setSource("themoviedb");

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
        $media->setTitle(isset($data['title']) ? $data['title'] : $data['name']);
        $media->setSourceId($data['id']);
        $media->setDescription($data['overview']);
        $media->setPoster($data['poster_path']);
        $media->setBackdrop($data['backdrop_path']);
        $media->setAverageNote($data['vote_average']);
        $media->setUpdated(new DateTime("now"));
        if (isset($data['status'])) {
            $media->setStatus($data['status']);
        }
        $releaseDate = null;
        if (isset($data['release_date'])) {
            try {
                $releaseDate = DateTime::createFromFormat('Y-m-d', $data['release_date']);

            } catch (Exception $e) {
            }
        }
        if (isset($data['last_air_date'])) {
            try {
                $releaseDate = DateTime::createFromFormat('Y-m-d', $data['last_air_date']);
            } catch (Exception $e) {
            }
        }
        if ($releaseDate !== false) {
            $media->setReleaseDate($releaseDate);
        }

        if (isset($data['genres'])) {
            $genreRepository = $this->registry->getRepository(Genre::class);
            foreach ($data['genres'] as $g) {
                $genre = $genreRepository->findOneBy(['title' => $g['name']]);
                if ($genre === null) {
                    $genre = new Genre();
                    $genre->setTitle($g['name']);
                    $this->registry->getManager()->persist($genre);
                }
                $media->addGenre($genre);
            }
        }

        if (isset($data['seasons'])) {
            $this->updateMediaSeasonData($media, $data['seasons']);
        }
    }

    /**
     * Update the seasons of the $media based on given $data
     *
     * @param Media $media
     * @param array $data
     */
    private function updateMediaSeasonData(Media $media, array $data)
    {
        foreach ($data as $seasonData) {
            $season = $this->getMediaSeason($media, $seasonData['season_number']);
            if ($season === null) {
                $season = new MediaSeason();
                $season->setMedia($media);
            }
            $season->setTitle($seasonData['name']);
            $season->setTheMovieDbId($seasonData['id']);
            $season->setDescription($seasonData['overview']);
            $season->setPoster($seasonData['poster_path']);
            $season->setNumber($seasonData['season_number']);
            $releaseDate = DateTime::createFromFormat('Y-m-d', $seasonData['air_date']);
            if ($releaseDate === false) {
                $season->setReleaseDate(null);
            } else {
                $season->setReleaseDate($releaseDate);
            }

            $this->updateMediaSeasonEpisode($season);
            $this->registry->getManager()->persist($season);
        }
        $this->registry->getManager()->flush();
    }

    /**
     * Call TheMovieDB API and update episode list for the $season
     *
     * @param MediaSeason $season
     */
    private function updateMediaSeasonEpisode(MediaSeason $season)
    {
        $seasonData = $this->theMovieDB->getTvShowSeason($season->getMedia()->getSourceId(), $season->getNumber());
        foreach ($seasonData['episodes'] as $episodeData) {
            $episode = $this->getMediaSeasonEpisode($season, $episodeData['episode_number']);
            if ($episode === null) {
                $episode = new MediaSeasonEpisode();
                $episode->setSeason($season);
            }

            $episode->setTitle($episodeData['name']);
            $episode->setTheMovieDbId($episodeData['id']);
            $episode->setDescription($episodeData['overview']);
            $episode->setPoster($episodeData['still_path']);
            $episode->setNumber($episodeData['episode_number']);
            $episode->setAverageNote($episodeData['vote_average']);
            $releaseDate = DateTime::createFromFormat('Y-m-d', $episodeData['air_date']);
            if ($releaseDate === false) {
                $episode->setReleaseDate(null);
            } else {
                $episode->setReleaseDate($releaseDate);
            }
            $this->registry->getManager()->persist($episode);
        }
    }

    /**
     * {@inheritDoc}
     */
    public function update(Media $media)
    {
        $data = $this->theMovieDB->getMovie($media->getSourceId());
        if ($data !== null) {
            $this->updateMediaData($media, $data);
            $media->setSource("themoviedb");
        }
    }


}
