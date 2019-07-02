<?php

namespace App\EventSubscriber;

use App\Entity\Item;
use App\Entity\MediaSubscription;
use App\Factory\NotificationFactory;
use App\Nomenclature\NotificationActionNomenclature;
use Doctrine\Common\EventSubscriber;
use Doctrine\ORM\Event\OnFlushEventArgs;
use Doctrine\ORM\Event\PreUpdateEventArgs;
use Doctrine\ORM\Events;
use Symfony\Bridge\Doctrine\RegistryInterface;

class ItemSubscriber implements EventSubscriber
{

    /**
     * @var RegistryInterface
     */
    private $registry;

    public function __construct(RegistryInterface $registry)
    {
        $this->registry = $registry;
    }

    public function getSubscribedEvents()
    {
        return [
            Events::onFlush => 'onFlush',
        ];
    }

    public function onFlush(OnFlushEventArgs $eventArgs)
    {

        $entityManager = $eventArgs->getEntityManager();
        $unitOfWork = $entityManager->getUnitOfWork();

        foreach ($unitOfWork->getScheduledEntityUpdates() as $keyEntity => $entity) {
            if(get_class($entity) !== Item::class){
                continue;
            }
            $changeSet = $unitOfWork->getEntityChangeSet($entity);

            if(!isset($changeSet['media'])){
                continue;
            }
            $media = $changeSet['media'][1];

            $subscriptions = $this->registry->getRepository(MediaSubscription::class)->findBy(['media' => $media]);

            foreach($subscriptions as $subscription){
                $notification = NotificationFactory::createMediaNotification($media, $subscription->getUser(), NotificationActionNomenclature::NEW_ITEM);
                $entityManager->persist($notification);
                $classMetadata = $entityManager->getClassMetadata(get_class($notification));
                $unitOfWork->computeChangeSet($classMetadata, $notification);
            }
        }
    }
}
