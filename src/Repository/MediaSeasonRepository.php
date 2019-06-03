<?php

namespace App\Repository;

use App\Entity\MediaSeason;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method MediaSeason|null find($id, $lockMode = null, $lockVersion = null)
 * @method MediaSeason|null findOneBy(array $criteria, array $orderBy = null)
 * @method MediaSeason[]    findAll()
 * @method MediaSeason[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class MediaSeasonRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, MediaSeason::class);
    }

    // /**
    //  * @return MediaSeason[] Returns an array of MediaSeason objects
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
    public function findOneBySomeField($value): ?MediaSeason
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
