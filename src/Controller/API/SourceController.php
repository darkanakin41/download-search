<?php

namespace App\Controller\API;

use App\Service\SourceService;
use Exception;
use FOS\RestBundle\Controller\Annotations as Rest;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;

/**
 * Class SearchController
 * @package App\Controller\API
 * @Route("/api/source")
 */
final class SourceController extends AbstractController
{

    /**
     * @var SerializerInterface
     */
    private $serializer;
    /**
     * @var SourceService
     */
    private $sourceService;

    public function __construct(SerializerInterface $serializer, SourceService $sourceService)
    {
        $this->serializer = $serializer;
        $this->sourceService = $sourceService;
    }

    /**
     * @Rest\Get("/all" ,name="api_source_all")
     *
     * @return JsonResponse
     * @throws Exception
     */
    public function allAction()
    {
        $sourceEntities = $this->sourceService->all();

        $data = $this->serializer->serialize($sourceEntities, 'json');

        return new JsonResponse($data, 200, [], true);
    }
}
