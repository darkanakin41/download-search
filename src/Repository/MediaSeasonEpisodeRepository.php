<?php

namespace App\Repository;

use App\Entity\MediaSeasonEpisode;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method MediaSeasonEpisode|null find($id, $lockMode = null, $lockVersion = null)
 * @method MediaSeasonEpisode|null findOneBy(array $criteria, array $orderBy = null)
 * @method MediaSeasonEpisode[]    findAll()
 * @method MediaSeasonEpisode[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class MediaSeasonEpisodeRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, MediaSeasonEpisode::class);
    }

    // /**
    //  * @return MediaSeasonEpisode[] Returns an array of MediaSeasonEpisode objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('m')
            ->andWhere('m.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('m.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?MediaSeasonEpisode
    {
        return $this->createQueryBuilder('m')
            ->andWhere('m.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
