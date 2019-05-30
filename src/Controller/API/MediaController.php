<?php

namespace App\Controller\API;

use App\API\Download\GlobalAPI;
use App\Entity\Item;
use App\Entity\Media;
use App\Helper\SerializeObject;
use Exception;
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
     * @Route("/all", name="api_media_all", methods={"GET"})
     *
     * @return JsonResponse
     */
    public function index()
    {
        $data = $this->get('doctrine')->getRepository(Media::class)->findBy([], ['title' => 'ASC']);

        $retour = [];
        foreach ($data as $item) {
            $retour[] = SerializeObject::serialize($item);
        }

        return new JsonResponse($retour);
    }

    /**
     * @Route("/retrieve", name="api_imedia_retrieve", methods={"POST"})
     *
     * @param Request   $request
     *
     * @return JsonResponse
     * @throws Exception
     */
    public function retrieve(Request $request)
    {
        $query = json_decode($request->getContent(), true);

        /** @var Item $item */
        $item = $this->get('doctrine')->getRepository(Media::class)->find($query['id']);
        if ($item === null) {
            throw $this->createNotFoundException(sprintf("Media %s not found", $query['id']));
        }

        return new JsonResponse(SerializeObject::serialize($item));
    }
}
