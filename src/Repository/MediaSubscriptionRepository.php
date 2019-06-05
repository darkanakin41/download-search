<?php

namespace App\Repository;

use App\Entity\MediaSubscription;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method MediaSubscription|null find($id, $lockMode = null, $lockVersion = null)
 * @method MediaSubscription|null findOneBy(array $criteria, array $orderBy = null)
 * @method MediaSubscription[]    findAll()
 * @method MediaSubscription[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class MediaSubscriptionRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, MediaSubscription::class);
    }

    // /**
    //  * @return MediaSubscription[] Returns an array of MediaSubscription objects
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
    public function findOneBySomeField($value): ?MediaSubscription
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
