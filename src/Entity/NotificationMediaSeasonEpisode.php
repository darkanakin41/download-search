<?php

namespace App\Entity;

class NotificationMediaSeasonEpisode extends Notification
{
    private $media_season_episode;

    public function getMediaSeasonEpisode(): ?MediaSeasonEpisode
    {
        return $this->media_season_episode;
    }

    public function setMediaSeasonEpisode(?MediaSeasonEpisode $media_season_episode): self
    {
        $this->media_season_episode = $media_season_episode;

        return $this;
    }
}
