<?php

namespace App\Controller\API;

use App\Entity\MediaSeasonEpisode;
use App\Service\MediaSeasonEpisodeService;
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
 * @Route("/api/media-season-episode")
 */
final class MediaSeasonEpisodeController extends AbstractController
{

    /**
     * @var SerializerInterface
     */
    private $serializer;
    /**
     * @var MediaSeasonEpisodeService
     */
    private $mediaSeasonEpisodeService;

    public function __construct(SerializerInterface $serializer, MediaSeasonEpisodeService $mediaSeasonEpisodeService)
    {
        $this->serializer = $serializer;
        $this->mediaSeasonEpisodeService = $mediaSeasonEpisodeService;
    }

    /**
     * @Rest\Post("/retrieve" ,name="api_media_season_episode_retrieve")
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
            $itemsEntity = $this->mediaSeasonEpisodeService->retrieve($id);
            if($itemsEntity === null){
                throw $this->createNotFoundException(sprintf("Episode %s not found", $id));
            }
        } else {
            $itemsEntity = $this->mediaSeasonEpisodeService->retrieveBy($request->request->all());
        }

        $data = $this->serializer->serialize($itemsEntity, 'json');

        return new JsonResponse($data, 200, [], true);
    }
}
