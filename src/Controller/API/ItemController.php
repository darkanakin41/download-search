<?php

namespace App\Controller\API;

use App\Service\ItemService;
use Exception;
use FOS\RestBundle\Controller\Annotations as Rest;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;

/**
 * Class SearchController
 * @package App\Controller\API
 * @Route("/api/item")
 */
final class ItemController extends AbstractController
{

    /**
     * @var SerializerInterface
     */
    private $serializer;
    /**
     * @var ItemService
     */
    private $itemService;

    public function __construct(SerializerInterface $serializer, ItemService $itemService)
    {
        $this->serializer = $serializer;
        $this->itemService = $itemService;
    }

    /**
     * @Rest\Post("/search" ,name="api_item_search")
     *
     * @param Request $request
     *
     * @return JsonResponse
     */
    public function searchAction(Request $request): JsonResponse
    {
        $q = $request->request->get('q');
        $itemsEntity = $this->itemService->search($q);
        $data = $this->serializer->serialize($itemsEntity, 'json');

        return new JsonResponse($data, 200, [], true);
    }

    /**
     * @Rest\Post("/retrieve" ,name="api_item_retrieve")
     *
     * @param Request $request
     *
     * @return JsonResponse
     * @throws Exception
     */
    public function retrieveAction(Request $request): JsonResponse
    {
        $id = $request->request->get('id');

        if ($id !== null) {
            $itemsEntity = $this->itemService->retrieve($id);
            if($itemsEntity === null){
                throw $this->createNotFoundException(sprintf("Item %s not found", $id));
            }
        } else {
            $itemsEntity = $this->itemService->retrieveBy($request->request->all());
        }

        $data = $this->serializer->serialize($itemsEntity, 'json');

        return new JsonResponse($data, 200, [], true);
    }
}
