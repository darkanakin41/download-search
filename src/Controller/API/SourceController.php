<?php

namespace App\Controller\API;

use App\Entity\Source;
use App\Helper\SerializeObject;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class SearchController
 * @package App\Controller\API
 * @Route("/api/source")
 */
class SourceController extends AbstractController
{
    /**
     * @Route("/all", name="api_source_all", methods={"GET"})
     *
     * @return JsonResponse
     */
    public function index()
    {
        $data = $this->get('doctrine')->getRepository(Source::class)->findAll();

        $retour = [];
        foreach ($data as $item) {
            $retour[] = SerializeObject::serialize($item);
        }

        return new JsonResponse($retour);
    }
}
