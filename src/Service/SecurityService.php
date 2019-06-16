<?php


namespace App\Service;


use App\Entity\User;
use App\Exception\PasswordInvalidException;
use App\Exception\RegistrationDuplicateException;
use Symfony\Bridge\Doctrine\RegistryInterface;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

/**
 * @property RegistryInterface            registry
 * @property UserPasswordEncoderInterface userPasswordEncoder
 */
class SecurityService
{
    public function __construct(RegistryInterface $registry, UserPasswordEncoderInterface $userPasswordEncoder)
    {
        $this->registry = $registry;
        $this->userPasswordEncoder = $userPasswordEncoder;
    }

    /**
     * Register new user
     *
     * @param array $data
     *
     * @return User
     * @throws RegistrationDuplicateException
     */
    public function register(array $data)
    {
        $user = $this->registry->getRepository(User::class)->findOneBy(['username' => trim($data['username'])]);
        if($user !== null){
            throw new RegistrationDuplicateException();
        }
        $user = $this->registry->getRepository(User::class)->findOneBy(['email' => trim($data['email'])]);
        if($user !== null){
            throw new RegistrationDuplicateException();
        }

        $user = new User();
        $user->setUsername(trim($data['username']));
        $user->setEmail(trim($data['email']));
        $user->setRoles(['ROLE_USER']);

        $user->setPlainPassword(trim($data['password']));

        $this->registry->getManager()->persist($user);
        $this->registry->getManager()->flush();

        return $user;
    }

    /**
     * Register new user
     *
     * @param array $data
     *
     * @return User
     * @throws PasswordInvalidException
     */
    public function changePassword(User $user, array $data)
    {

        if (!$this->userPasswordEncoder->isPasswordValid($user, $data['password'])) {
            throw new PasswordInvalidException();
        }

        $user->setPlainPassword(trim($data['new_password']));
        $this->registry->getManager()->persist($user);
        $this->registry->getManager()->flush();

        return $user;
    }
}
