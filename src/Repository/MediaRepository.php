<?php

namespace App\Repository;

use App\Entity\Media;
use App\Nomenclature\CategoryNomenclature;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method Media|null find($id, $lockMode = null, $lockVersion = null)
 * @method Media|null findOneBy(array $criteria, array $orderBy = null)
 * @method Media[]    findAll()
 * @method Media[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class MediaRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, Media::class);
    }

    public function getUpdatable(){
        $queryBuilder = $this->createQueryBuilder("m");
        $queryBuilder->where("m.category IN (:categories)");
        $queryBuilder->setParameter("categories",[CategoryNomenclature::TV, CategoryNomenclature::ANIME]);
        return $queryBuilder->getQuery()->getResult();
    }
}
