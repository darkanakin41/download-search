<?php


namespace App\Service;


use App\API\Data\TheMovieDB;
use App\Entity\Genre;
use App\Entity\Item;
use App\Entity\Media;
use App\Entity\MediaSeason;
use App\Entity\MediaSeasonEpisode;
use App\Nomenclature\CategoryNomenclature;
use DateTime;
use Exception;
use Symfony\Bridge\Doctrine\RegistryInterface;

class MediaService
{

    /**
     * @var TheMovieDB
     */
    private $theMovieDB;
    /**
     * @var RegistryInterface
     */
    private $registry;

    public function __construct(RegistryInterface $registry, TheMovieDB $theMovieDB)
    {
        $this->registry = $registry;
        $this->theMovieDB = $theMovieDB;
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

        $data = NULL;
        switch ($item->getCategory()) {
            case CategoryNomenclature::MOVIE :
                $data = $this->theMovieDB->searchMovie($item->getTitle());
                break;
            case CategoryNomenclature::ANIME :
            case CategoryNomenclature::TV :
                $data = $this->theMovieDB->searchTvShow($item->getTitle());
                break;
            default:
                return;
        }
        if (!is_null($data)) {
            $media = $this->registry->getRepository(Media::class)->findOneBy(["theMovieDbId" => $data['id']]);

            if (is_null($media)) {
                $media = new Media();
                $media->setCategory($item->getCategory());

                $this->updateMediaData($media, $data);

                $this->registry->getManager()->persist($media);
            }

            $item->setMedia($media);
            $this->registry->getManager()->persist($item);
            $this->registry->getManager()->flush();
        }
    }

    /**
     * Update the given $media's information based on $data
     *
     * @param Media $media
     * @param array $data
     *
     * @throws Exception
     */
    private function updateMediaData(Media $media, array $data)
    {
        $media->setTitle(isset($data['title']) ? $data['title'] : $data['name']);
        $media->setTheMovieDbId($data['id']);
        $media->setDescription($data['overview']);
        $media->setPoster($data['poster_path']);
        $media->setBackdrop($data['backdrop_path']);
        $media->setAverageNote($data['vote_average']);
        $media->setUpdated(new DateTime("now"));
        $media->setStatus($data['status']);
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
     * Call TheMovieDB API and update episode list for the $season
     *
     * @param MediaSeason $season
     */
    private function updateMediaSeasonEpisode(MediaSeason $season)
    {
        $seasonData = $this->theMovieDB->getTvShowSeason($season->getMedia()->getTheMovieDbId(), $season->getNumber());
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

        switch ($media->getCategory()) {
            case CategoryNomenclature::MOVIE :
                $data = $this->theMovieDB->getMovie($media->getTheMovieDbId());
                break;
            case CategoryNomenclature::ANIME :
            case CategoryNomenclature::TV :
                $data = $this->theMovieDB->getTvShow($media->getTheMovieDbId());
                break;
            default:
                return;
        }

        $this->updateMediaData($media, $data);
    }

}
