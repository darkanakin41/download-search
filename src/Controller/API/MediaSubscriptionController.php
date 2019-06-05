<?php declare(strict_types=1);

namespace App\Controller\API;

use App\Service\MediaSubscriptionService;
use App\Service\SourceService;
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
 * @Route("/api/media-subscription")
 */
final class MediaSubscriptionController extends AbstractController
{

    /**
     * @var SerializerInterface
     */
    private $serializer;
    /**
     * @var MediaSubscriptionService
     */
    private $mediaSubscriptionService;

    public function __construct(SerializerInterface $serializer, MediaSubscriptionService $mediaSubscriptionService)
    {
        $this->serializer = $serializer;
        $this->mediaSubscriptionService = $mediaSubscriptionService;
    }

    /**
     * @Rest\Get("/all" ,name="api_media_subscription_all")
     *
     * @return JsonResponse
     * @throws Exception
     */
    public function allAction()
    {
        if($this->getUser() === null){
            $data = $this->serializer->serialize([], 'json');
        }else{
            $subscriptions = $this->mediaSubscriptionService->all($this->getUser());

            $data = $this->serializer->serialize($subscriptions, 'json');
        }

        return new JsonResponse($data, 200, [], true);
    }

    /**
     * @Rest\Post("/retrieve" ,name="api_media_subscription_retrieve")
     *
     * @param Request $request
     *
     * @return JsonResponse
     */
    public function retrieveAction(Request $request)
    {
        if($this->getUser() === null){
            $data = $this->serializer->serialize([], 'json');
        }else{
            $mediaId = $request->request->get('media');
            $subscription = $this->mediaSubscriptionService->retrieve($this->getUser(), $mediaId);
            $data = $this->serializer->serialize($subscription, 'json');
        }

        return new JsonResponse($data, 200, [], true);
    }

    /**
     * @Rest\Post("/add" ,name="api_media_subscription_add")
     *
     * @param Request $request
     *
     * @return JsonResponse
     * @throws Exception
     */
    public function addAction(Request $request)
    {
        if($this->getUser() === null){
            $data = $this->serializer->serialize([], 'json');
        }else{
            $mediaId = $request->request->get('media');
            $subscription = $this->mediaSubscriptionService->add($this->getUser(), $mediaId);
            if($subscription){
                $this->createNotFoundException("Impossible de créer la souscription");
            }
            $data = $this->serializer->serialize($subscription, 'json');
        }

        return new JsonResponse($data, 200, [], true);
    }

    /**
     * @Rest\Post("/remove" ,name="api_media_subscription_remove")
     *
     * @param Request $request
     *
     * @return JsonResponse
     */
    public function removeAction(Request $request)
    {
        if($this->getUser() === null){
            $mediaId = $request->request->get('media');
            $this->mediaSubscriptionService->remove($this->getUser(), $mediaId);
        }
        $data = $this->serializer->serialize([], 'json');

        return new JsonResponse($data, 200, [], true);
    }
}
