<?php


namespace App\DataFixtures;

use App\Entity\User;
use DateTime;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;
use Exception;
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
        $userEntity->setEmail('darkanakin41@gmail.com');
        $userEntity->setRoles(['ROLE_USER']);

        $userEntity->setPlainPassword("azerty123");

        $manager->persist($userEntity);
        $manager->flush();
    }
}
