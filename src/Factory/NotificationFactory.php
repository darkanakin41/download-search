<?php


namespace App\Factory;


use App\Entity\Media;
use App\Entity\MediaSeasonEpisode;
use App\Entity\Notification;
use App\Entity\NotificationMedia;
use App\Entity\NotificationMediaSeasonEpisode;
use App\Entity\User;

class NotificationFactory
{

    /**
     * Create a notification for media informations
     *
     * @param Media  $media
     * @param User   $user
     * @param string $action
     *
     * @return NotificationMedia
     * @throws \Exception
     */
    public static function createMediaNotification(Media $media, User $user, $action)
    {
        $notification = new NotificationMedia();
        $notification->setMedia($media);
        self::createCommon($notification, $user, $action);
        return $notification;
    }

    private static function createCommon(Notification $notification, User $user, $action)
    {
        $notification->setDate(new \DateTime());
        $notification->setUser($user);
        $notification->setAction($action);
        $notification->setReaded(false);
    }

    /**
     * Create a notification for media informations
     *
     * @param MediaSeasonEpisode $episode
     * @param User               $user
     * @param string             $action
     *
     * @return NotificationMediaSeasonEpisode
     * @throws \Exception
     */
    public static function createMediaSeasonEpisodeNotification(MediaSeasonEpisode $episode, User $user, $action)
    {
        $notification = new NotificationMediaSeasonEpisode();
        $notification->setMediaSeasonEpisode($episode);
        self::createCommon($notification, $user, $action);
        return $notification;
    }
}
