<?php

namespace App\Controller\API;

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
 * @Route("/api/media")
 */
final class MediaController extends AbstractController
{

    /**
     * @var SerializerInterface
     */
    private $serializer;
    /**
     * @var MediaService
     */
    private $mediaService;

    public function __construct(SerializerInterface $serializer, MediaService $mediaService)
    {
        $this->serializer = $serializer;
        $this->mediaService = $mediaService;
    }

    /**
     * @Rest\Get("/all", name="api_media_all")
     *
     * @return JsonResponse
     */
    public function allAction()
    {
        $mediaEntities = $this->mediaService->all();
        $data = $this->serializer->serialize($mediaEntities, 'json');

        return new JsonResponse($data, 200, [], true);
    }

    /**
     * @Rest\Post("/retrieve", name="api_media_retrieve")
     *
     * @param Request $request
     *
     * @return JsonResponse
     * @throws Exception
     */
    public function retrieveAction(Request $request)
    {
        $id = $request->request->get('id');
        $mediaEntity = $this->mediaService->retrieve($id);
        if ($mediaEntity === null) {
            throw $this->createNotFoundException(sprintf("Media %s not found", $id));
        }
        $data = $this->serializer->serialize($mediaEntity, 'json');

        return new JsonResponse($data, 200, [], true);
    }
}
