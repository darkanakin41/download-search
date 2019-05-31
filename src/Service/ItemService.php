<?php


namespace App\Service;


use App\API\Download\GlobalAPI;
use App\Entity\Item;
use Exception;
use Symfony\Bridge\Doctrine\RegistryInterface;

final class ItemService
{

    /**
     * @var RegistryInterface
     */
    private $registry;
    /**
     * @var GlobalAPI
     */
    private $globalAPI;

    public function __construct(RegistryInterface $registry, GlobalAPI $globalAPI)
    {
        $this->registry = $registry;
        $this->globalAPI = $globalAPI;
    }

    /**
     * Search for items based on user input
     * @param string $q
     * @return Item[]
     */
    public function search($q){
        $data = $this->globalAPI->search($q);
        $this->saveAll($data);

        usort($data, function(Item $item1, Item $item2){
            if($item1->getTitle() === $item2->getTitle()){
                return 0;
            }
            return $item1->getTitle() > $item2->getTitle();
        });

        return $data;
    }

    /**
     * Retrieve an item based on his ID
     *
     * @param integer $id
     *
     * @return Item
     * @throws Exception
     */
    public function retrieve($id){
        /** @var Item $item */
        $item = $this->registry->getRepository(Item::class)->find($id);
        if ($item === null) {
            return null;
        }

        if ($item->getMedia() === null) {
            $this->globalAPI->update($item);
            $this->registry->getManager()->persist($item);
            $this->registry->getManager()->flush();
        }

        return $item;
    }

    /**
     * Retrieve a list of item based on the given parameters
     *
     * @param array parameters
     *
     * @return Item[]
     * @throws Exception
     */
    public function retrieveBy(array $parameters){
        return $this->registry->getRepository(Item::class)->findBy($parameters);
    }

    /**
     * Save all itemInput if they are not existing
     *
     * @param array $items
     */
    private function saveAll(array &$items){
        $repository = $this->registry->getRepository(Item::class);
        $manager = $this->registry->getManager();

        foreach($items as $key => $item){
            $this->clean($item);
            $dbItem = $repository->findOneBy(['source' => $item->getSource(), 'url' => $item->getUrl()]);
            if($dbItem === null){
                $manager->persist($item);
            }else{
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
