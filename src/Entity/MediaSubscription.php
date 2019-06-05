<?php

namespace App\Entity;

use DateTime;
use DateTimeInterface;

class MediaSubscription
{
    private $id;

    private $created;

    private $media;

    private $user;


    public function __construct()
    {
        $this->setCreated(new DateTime());
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getCreated(): ?DateTimeInterface
    {
        return $this->created;
    }

    public function setCreated(DateTimeInterface $created): self
    {
        $this->created = $created;

        return $this;
    }

    public function getMedia(): ?Media
    {
        return $this->media;
    }

    public function setMedia(?Media $media): self
    {
        $this->media = $media;

        return $this;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): self
    {
        $this->user = $user;

        return $this;
    }
}
