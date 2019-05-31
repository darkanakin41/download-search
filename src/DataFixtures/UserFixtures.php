<?php


namespace App\DataFixtures;

use DateTime;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;
use Exception;
use PLejeune\UserBundle\Entity\User;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

/**
 * @property UserPasswordEncoderInterface userPasswordEncoder
 */
final class UserFixtures extends Fixture
{
    public function __construct(UserPasswordEncoderInterface $userPasswordEncoder)
    {
        $this->userPasswordEncoder = $userPasswordEncoder;
    }

    /**
     * @param ObjectManager $manager
     *
     * @return void
     * @throws Exception
     */
    public function load(ObjectManager $manager): void
    {
        $userEntity = new User();
        $userEntity->setUsername('darkanakin41');
        $userEntity->setFirstname('Pierre');
        $userEntity->setLastname('Lejeune');
        $userEntity->setEmail('darkanakin41@gmail.com');
        $userEntity->setRoles(['ROLE_USER']);
        $userEntity->setDateRegistration(new DateTime());
        $userEntity->setDateValidation(new DateTime());
        $userEntity->setEnable(true);

        $password = $this->userPasswordEncoder->encodePassword($userEntity, "azerty123");
        $userEntity->setPassword($password);

        $manager->persist($userEntity);
        $manager->flush();
    }
}
