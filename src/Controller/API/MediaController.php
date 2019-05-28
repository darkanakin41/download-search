<?php

namespace App\Controller\API;

use App\API\Download\GlobalAPI;
use App\Entity\Item;
use App\Helper\SerializeObject;
use App\Service\ItemService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class SearchController
 * @package App\Controller\API
 * @Route("/api/media")
 */
class MediaController extends AbstractController
{
    /**
     * @Route("/retrieve", name="api_media_retrieve", methods={"SEARCH"})
     *
     * @param Request     $request
     * @param GlobalAPI   $globalAPI
     * @param ItemService $itemService
     *
     * @return JsonResponse
     */
    public function retrieve(Request $request, GlobalAPI $globalAPI, ItemService $itemService)
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
}
