<?php


namespace App\Service;


use App\API\Data\TheMovieDB;
use App\Entity\Genre;
use App\Entity\Item;
use App\Entity\Media;
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
    public function all(){
        return $this->registry->getRepository(Media::class)->findBy([],['title' => 'ASC']);
    }

    /**
     * Retrieve an item based on his ID
     *
     * @param integer $id
     *
     * @return Media
     * @throws Exception
     */
    public function retrieve($id){
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
    public function synchronize(Item $item){
        if($item->getMedia() !== null){
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
     * Update Media's information based on TheMovieDB information
     * @param Media $media
     */
    public function update(Media $media){

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

    private function updateMediaData(Media $media, array $data){
        $media->setTitle(isset($data['title']) ? $data['title'] : $data['name']);
        $media->setTheMovieDbId($data['id']);
        $media->setDescription($data['overview']);
        $media->setPoster($data['poster_path']);
        $media->setBackdrop($data['backdrop_path']);
        $media->setAverageNote($data['vote_average']);
        $media->setUpdated(new DateTime("now"));
        $media->setStatus($data['status']);
        if(isset($data['release_date'])){
            try{
                $media->setReleaseDate(DateTime::createFromFormat('Y-m-d', $data['release_date']));
            }catch(Exception $e){}
        }
        if(isset($data['last_air_date'])){
            try{
                $media->setReleaseDate(DateTime::createFromFormat('Y-m-d', $data['last_air_date']));
            }catch(Exception $e){}
        }

        $genreRepository = $this->registry->getRepository(Genre::class);
        foreach($data['genres'] as $g){
            $genre = $genreRepository->findOneBy(['title' => $g['name']]);
            if($genre === null){
                $genre = new Genre();
                $genre->setTitle($g['name']);
                $this->registry->getManager()->persist($genre);
            }
            $media->addGenre($genre);
        }
    }
}
