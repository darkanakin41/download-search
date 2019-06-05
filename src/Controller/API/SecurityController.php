<?php


namespace App\Controller\API;

use App\Entity\User;
use RuntimeException;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Serializer\SerializerInterface;

/**
 * Class SecurityController
 * @package App\Controller\API
 * @Route("/api/security/")
 */
final class SecurityController extends AbstractController
{

    /**
     * @var SerializerInterface
     */
    private $serializer;

    public function __construct(SerializerInterface $serializer)
    {
        $this->serializer = $serializer;
    }
    /**
     * @Route("login", name="api_security_login", methods={"GET", "POST"})
     * @return JsonResponse
     */
    public function loginAction(): JsonResponse
    {
        /** @var User $user */
        $user = $this->getUser();
        $data = $this->serializer->serialize($user, 'json');
        return new JsonResponse($data, 200, [], true);
    }

    /**
     * @Route("logout", name="api_security_logout")
     * @throws RuntimeException
     */
    public function logoutAction(): void
    {
        throw new RuntimeException('This should not be reached!');
    }
}
