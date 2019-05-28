<?php


namespace App\Service;


use App\Entity\Item;
use Symfony\Bridge\Doctrine\RegistryInterface;

class ItemService
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
     * Save all itemInput if they are not existing
     *
     * @param array $items
     */
    public function saveAll(array &$items){
        $repository = $this->registry->getRepository(Item::class);
        $manager = $this->registry->getManager();

        foreach($items as $key => $item){
            $dbItem = $repository->findOneBy(['source' => $item->getSource(), 'url' => $item->getUrl()]);
            if($dbItem === null){
                $this->clean($item);
                $manager->persist($item);
            }else{
                $this->clean($dbItem);
                $dbItem->setLastPart($item->getLastPart());
                $manager->persist($dbItem);
                $items[$key] = $dbItem;
            }
        }

        $manager->flush();
    }

    private function clean(Item &$item){
        $item->setUrl(str_ireplace("//","/", $item->getUrl()));
    }
}
