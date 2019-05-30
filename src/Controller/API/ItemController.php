<?php

namespace App\Controller\API;

use App\API\Download\GlobalAPI;
use App\Entity\Item;
use App\Helper\SerializeObject;
use App\Service\ItemService;
use Exception;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class SearchController
 * @package App\Controller\API
 * @Route("/api/item")
 */
class ItemController extends AbstractController
{
    /**
     * @Route("/search", name="api_item_search", methods={"SEARCH"})
     *
     * @param Request     $request
     * @param GlobalAPI   $globalAPI
     * @param ItemService $itemService
     *
     * @return JsonResponse
     */
    public function search(Request $request, GlobalAPI $globalAPI, ItemService $itemService)
    {
        $query = json_decode($request->getContent(), true);

        $data = $globalAPI->search($query['q']);
        $itemService->saveAll($data);

        usort($data, function(Item $item1, Item $item2){
            if($item1->getTitle() === $item2->getTitle()){
                return 0;
            }
            return $item1->getTitle() > $item2->getTitle();
        });

        $retour = [];
        foreach($data as $item){
            $retour[] = SerializeObject::serialize($item);
        }

        return new JsonResponse($retour);
    }

    /**
     * @Route("/retrieve", name="api_item_retrieve", methods={"POST"})
     *
     * @param Request     $request
     * @param GlobalAPI   $globalAPI
     *
     * @return JsonResponse
     * @throws Exception
     */
    public function retrieve(Request $request, GlobalAPI $globalAPI)
    {
        $query = json_decode($request->getContent(), true);

        if(isset($query['id'])){
            /** @var Item $item */
            $item = $this->get('doctrine')->getRepository(Item::class)->find($query['id']);
            if($item === null){
                throw $this->createNotFoundException(sprintf("Item %s not found", $query['id']));
            }

            if($item->getMedia() === null){
                $globalAPI->update($item);
                $this->get('doctrine')->getManager()->persist($item);
                $this->get('doctrine')->getManager()->flush();
            }
            return new JsonResponse(SerializeObject::serialize($item));
        }elseif(isset($query['mediaId'])){
            /** @var Item[] $item */
            $items = $this->get('doctrine')->getRepository(Item::class)->findBy(['media' => $query['mediaId']]);

            return new JsonResponse(SerializeObject::serialize($items));
        }
    }
}
