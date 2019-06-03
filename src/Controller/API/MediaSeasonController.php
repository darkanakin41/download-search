<?php

namespace App\Controller\API;

use App\Entity\MediaSeason;
use App\Service\MediaSeasonService;
use App\Service\MediaService;
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
 * @Route("/api/media-season")
 */
final class MediaSeasonController extends AbstractController
{

    /**
     * @var SerializerInterface
     */
    private $serializer;
    /**
     * @var MediaSeasonService
     */
    private $mediaSeasonService;

    public function __construct(SerializerInterface $serializer, MediaSeasonService $mediaSeasonService)
    {
        $this->serializer = $serializer;
        $this->mediaSeasonService = $mediaSeasonService;
    }

    /**
     * @Rest\Post("/retrieve" ,name="api_media_season_retrieve")
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
            $itemsEntity = $this->mediaSeasonService->retrieve($id);
            if($itemsEntity === null){
                throw $this->createNotFoundException(sprintf("Season %s not found", $id));
            }
        } else {
            $itemsEntity = $this->mediaSeasonService->retrieveBy($request->request->all());
        }

        $data = $this->serializer->serialize($itemsEntity, 'json');

        return new JsonResponse($data, 200, [], true);
    }
}
