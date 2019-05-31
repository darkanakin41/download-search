<?php


namespace App\Controller\API;

use PLejeune\UserBundle\Entity\User;
use RuntimeException;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * Class SecurityController
 * @package App\Controller\API
 * @Route("/api/security")
 */
final class SecurityController extends AbstractController
{
    /**
     * @Route("login", name="login")
     * @return JsonResponse
     */
    public function loginAction(): JsonResponse
    {
        /** @var User $user */
        $user = $this->getUser();
        $response = new JsonResponse($user->getRoles());
        return $response;
    }

    /**
     * @Route("logout", name="logout")
     * @throws RuntimeException
     */
    public function logoutAction(): void
    {
        throw new RuntimeException('This should not be reached!');
    }
}
