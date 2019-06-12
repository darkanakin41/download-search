<?php


namespace App\Service;


use App\Entity\User;
use App\Exception\RegistrationDuplicateException;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @property RegistryInterface registry
 */
class SecurityService
{
    public function __construct(RegistryInterface $registry)
    {
        $this->registry = $registry;
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
}
