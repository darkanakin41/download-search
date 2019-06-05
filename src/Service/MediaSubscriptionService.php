<?php


namespace App\Service;


use App\Entity\MediaSubscription;
use App\Entity\User;
use Exception;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @property MediaService      mediaService
 * @property RegistryInterface registry
 */
class MediaSubscriptionService
{
    public function __construct(RegistryInterface $registry, MediaService $mediaService)
    {
        $this->registry = $registry;
        $this->mediaService = $mediaService;
    }


    /**
     * Extract all subscription for given user from database
     *
     * @param User $user
     *
     * @return MediaSubscription[]
     */
    public function all(User $user)
    {
        return $this->registry->getRepository(MediaSubscription::class)->findBy(['user' => $user], ['media' => 'ASC']);
    }


    /**
     * Extract a subscription for given user from database
     *
     * @param User    $user
     * @param integer $mediaId
     *
     * @return MediaSubscription
     */
    public function retrieve(User $user, $mediaId)
    {
        return $this->registry->getRepository(MediaSubscription::class)->findOneBy([
            'user' => $user,
            'media' => $mediaId,
        ]);
    }

    /**
     * Add a subscription for given user from database
     *
     * @param User    $user
     * @param integer $mediaId
     *
     * @return MediaSubscription
     * @throws Exception
     */
    public function add(User $user, $mediaId){
        $media = $this->mediaService->retrieve($mediaId);
        if($media === null){
            return null;
        }
        $subscription = $this->retrieve($user, $mediaId);
        if($subscription === null){
            $subscription = new MediaSubscription();
            $subscription->setUser($user);
            $subscription->setMedia($media);
            $this->registry->getManager()->persist($subscription);
            $this->registry->getManager()->flush();
        }

        return $subscription;
    }

    /**
     * Remove a subscription for given user from database
     *
     * @param User    $user
     * @param integer $mediaId
     *
     * @return void
     */
    public function remove(User $user, $mediaId){
        $subscription = $this->retrieve($user, $mediaId);
        if($subscription !== null){
            $this->registry->getManager()->remove($subscription);
            $this->registry->getManager()->flush();
        }

    }

}
