<?php


namespace App\Service;


use App\API\Download\GlobalAPI;
use App\Entity\Item;
use App\Entity\Source;
use Exception;
use Symfony\Bridge\Doctrine\RegistryInterface;

final class SourceService
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
     * Extract all sources from database
     *
     * @return Source[]
     */
    public function all(){
        return $this->registry->getRepository(Source::class)->findAll();
    }
}
