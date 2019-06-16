<?php


namespace App\Controller\API;

use App\Entity\User;
use App\Service\SecurityService;
use Exception;
use RuntimeException;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
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
    /**
     * @var SecurityService
     */
    private $securityService;

    public function __construct(SerializerInterface $serializer, SecurityService $securityService)
    {
        $this->serializer = $serializer;
        $this->securityService = $securityService;
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
     * @Route("register", name="api_security_register", methods={"POST"})
     * @param Request $request
     *
     * @return JsonResponse
     */
    public function registerAction(Request $request): JsonResponse
    {
        try{
            /** @var User $user */
            $user = $this->securityService->register($request->request->all());
            $data = $this->serializer->serialize($user, 'json');
            return new JsonResponse($data, 200, [], true);
        }catch(Exception $e){
            $data = $this->serializer->serialize(['error' => $e->getMessage()], 'json');
            return new JsonResponse($data, 500, [], true);
        }
    }

    /**
     * @Route("password-change", name="api_security_password_change")
     * @param Request $request
     *
     * @return JsonResponse
     */
    public function passwordChangeAction(Request $request): JsonResponse
    {
        try{
            /** @var User $user */
            $user = $this->getUser();
            if($user === null){
                $this->createAccessDeniedException();
            }
            $this->securityService->changePassword($user, $request->request->all());
            $data = $this->serializer->serialize($user, 'json');
            return new JsonResponse($data, 200, [], true);
        }catch(Exception $e){
            $data = $this->serializer->serialize(['error' => $e->getMessage()], 'json');
            return new JsonResponse($data, 500, [], true);
        }
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
