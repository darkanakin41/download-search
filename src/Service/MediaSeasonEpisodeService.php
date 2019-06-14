<?php


namespace App\Service;


use App\Entity\Item;
use App\Entity\MediaSeasonEpisode;
use App\Entity\MediaSubscription;
use App\Entity\User;
use App\Nomenclature\ArticleStatusNomenclature;
use DateTime;
use Doctrine\ORM\Query\Expr\Join;
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

    /**
     * Retrieve episode between $start and $end
     *
     * @param DateTime  $start
     * @param DateTime  $end
     *
     * @param User|null $user
     *
     * @return MediaSeasonEpisode[]
     */
    public function getBetween(DateTime $start, DateTime $end, User $user = null)
    {
        $qb = $this->registry->getRepository(MediaSeasonEpisode::class)->createQueryBuilder('e');
        $qb->where('e.releaseDate BETWEEN :start AND :end');
        $qb->andWhere('e.releaseDate IS NOT NULL');
        $qb->setParameter('start', $start);
        $qb->setParameter('end', $end);

        if ($user !== null) {
            $qb->leftJoin("e.season", "s");
            $qb->leftJoin(MediaSubscription::class, "ms", Join::WITH, "ms.media = s.media");

            $qb->andWhere('ms.user = :user');
            $qb->setParameter("user", $user);
        }

        /** @var MediaSeasonEpisode[] $results */
        return $qb->getQuery()->getResult();
    }

}
