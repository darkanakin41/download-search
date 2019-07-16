<?php


namespace App\API\Download;


use App\Entity\Item;
use App\Entity\SourceWatch;
use App\Service\ItemService;
use App\Service\MediaService;
use Exception;
use Symfony\Component\DependencyInjection\ContainerInterface;

class GlobalAPI
{
    const CLASSES = [
        AnnuaireTelechargement::SOURCE_NAME => AnnuaireTelechargement::class,
        ExtremeDownload::SOURCE_NAME => ExtremeDownload::class,
    ];

    /**
     * @var ContainerInterface
     */
    private $container;

    /**
     * @var MediaService
     */
    private $mediaService;

    public function __construct(ContainerInterface $container, MediaService $mediaService)
    {
        $this->container = $container;
        $this->mediaService = $mediaService;
    }

    /**
     * Search in all API the requested item
     *
     * @param $q
     *
     * @return array
     */
    public function search($q)
    {
        $retour = [];

        foreach (self::CLASSES as $CLASS) {
            $data = $this->container->get($CLASS)->search($q);
            foreach ($data as $item) {
                $retour[] = $item;
            }
        }

        return $retour;
    }

    /**
     * Search in all API the requested item
     *
     * @param SourceWatch $sourceWatch
     *
     * @return Item[]
     * @throws Exception
     */
    public function watch(SourceWatch $sourceWatch)
    {
        if(!isset(self::CLASSES[$sourceWatch->getSource()->getTitle()])){
            throw new Exception('Unhandled source ' . $sourceWatch->getSource()->getTitle());
        }

        /** @var AbstractAPI $service */
        $service = $this->container->get(self::CLASSES[$sourceWatch->getSource()->getTitle()]);
        return $service->watch($sourceWatch);
    }

    /**
     * Update data of the given item
     *
     * @param Item $item
     *
     * @throws Exception
     */
    public function update(Item $item)
    {
        if(!isset(self::CLASSES[$item->getSource()->getTitle()])){
            throw new Exception('Unhandled source ' . $item->getSource()->getTitle());
        }

        /** @var AbstractAPI $service */
        $service = $this->container->get(self::CLASSES[$item->getSource()->getTitle()]);

        $service->update($item);
        $this->mediaService->synchronize($item);
    }
}
