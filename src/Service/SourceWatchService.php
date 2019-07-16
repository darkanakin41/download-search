<?php


namespace App\Service;


use App\API\Download\GlobalAPI;
use App\Entity\Item;
use App\Entity\SourceWatch;
use Exception;
use Symfony\Bridge\Doctrine\RegistryInterface;

final class SourceWatchService
{

    /**
     * @var RegistryInterface
     */
    private $registry;
    /**
     * @var GlobalAPI
     */
    private $globalAPI;
    /**
     * @var ItemService
     */
    private $itemService;

    public function __construct(RegistryInterface $registry, GlobalAPI $globalAPI, ItemService $itemService)
    {
        $this->registry = $registry;
        $this->globalAPI = $globalAPI;
        $this->itemService = $itemService;
    }

    /**
     * Process the SourceWatch object to retrieve new items
     *
     * @param SourceWatch $sourceWatch
     *
     * @return Item[]
     * @throws Exception
     */
    public function process(SourceWatch $sourceWatch){
        $items = $this->globalAPI->watch($sourceWatch);

        $this->itemService->saveAll($items);

        return array_filter($items, function(Item $item){
            return $item->getId() !== null;
        });
    }
}
