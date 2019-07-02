<?php


namespace App\Service;


use App\Entity\Notification;
use App\Entity\User;
use Symfony\Bridge\Doctrine\RegistryInterface;

final class NotificationService
{

    /**
     * @var RegistryInterface
     */
    private $registry;

    public function __construct(RegistryInterface $registry)
    {
        $this->registry = $registry;
    }

    /**
     * Extract all sources from database
     *
     * @return Notification[]
     */
    public function all(User $user)
    {
        return $this->registry->getRepository(Notification::class)->findBy(['user' => $user], ['date' => 'DESC']);
    }
}
