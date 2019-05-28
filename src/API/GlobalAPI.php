<?php


namespace App\API;


use Symfony\Component\DependencyInjection\ContainerInterface;

class GlobalAPI
{
    const CLASSES = [
      AnnuaireTelechargement::class,
      ExtremeDownload::class,
    ];

    /**
     * @var ContainerInterface
     */
    private $container;

    public function __construct(ContainerInterface $container)
    {
        $this->container = $container;
    }

    /**
     * Search in all API the requested item
     *
     * @param $q
     *
     * @return array
     */
    public function search($q){
        $retour = [];

        foreach(self::CLASSES as $CLASS){
            $data = $this->container->get($CLASS)->search($q);
            foreach($data as $item){
                $retour[] = $item;
            }
        }

        return $retour;
    }
}
