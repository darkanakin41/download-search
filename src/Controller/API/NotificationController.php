<?php declare(strict_types=1);

namespace App\Controller\API;

use App\Service\NotificationService;
use Exception;
use FOS\RestBundle\Controller\Annotations as Rest;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;

/**
 * Class SearchController
 * @package App\Controller\API
 * @Route("/api/notification")
 */
final class NotificationController extends AbstractController
{

    /**
     * @var SerializerInterface
     */
    private $serializer;
    /**
     * @var NotificationService
     */
    private $notificationService;

    public function __construct(SerializerInterface $serializer, NotificationService $notificationService)
    {
        $this->serializer = $serializer;
        $this->notificationService = $notificationService;
    }

    /**
     * @Rest\Get("/all" ,name="api_notification_all")
     *
     * @return JsonResponse
     * @throws Exception
     */
    public function allAction()
    {
        $entities = [];

        if ($this->getUser() !== null) {
            $entities = $this->notificationService->all($this->getUser());
        }

        $data = $this->serializer->serialize($entities, 'json');

        return new JsonResponse($data, 200, [], true);
    }
}
