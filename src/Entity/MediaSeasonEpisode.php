<?php

namespace App\Entity;

use App\API\Data\TheMovieDB;

class MediaSeasonEpisode
{
    private $id;

    private $title;

    private $number;

    private $description;

    private $poster;

    private $updated;

    private $releaseDate;

    private $averageNote;

    private $theMovieDbId;

    private $season;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): self
    {
        $this->title = $title;

        return $this;
    }

    public function getNumber(): ?int
    {
        return $this->number;
    }

    public function setNumber(?int $number): self
    {
        $this->number = $number;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(?string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getPosterFullURL()
    {
        return TheMovieDB::MEDIA_URL."/".$this->getPoster();
    }

    public function getPoster(): ?string
    {
        return $this->poster;
    }

    public function setPoster(?string $poster): self
    {
        $this->poster = $poster;

        return $this;
    }

    public function getUpdated(): ?\DateTimeInterface
    {
        return $this->updated;
    }

    public function setUpdated(?\DateTimeInterface $updated): self
    {
        $this->updated = $updated;

        return $this;
    }

    public function getReleaseDate(): ?\DateTimeInterface
    {
        return $this->releaseDate;
    }

    public function setReleaseDate(?\DateTimeInterface $releaseDate): self
    {
        $this->releaseDate = $releaseDate;

        return $this;
    }

    public function getAverageNote(): ?float
    {
        return $this->averageNote;
    }

    public function setAverageNote(?float $averageNote): self
    {
        $this->averageNote = $averageNote;

        return $this;
    }

    public function getTheMovieDbId(): ?int
    {
        return $this->theMovieDbId;
    }

    public function setTheMovieDbId(?int $theMovieDbId): self
    {
        $this->theMovieDbId = $theMovieDbId;

        return $this;
    }

    public function getSeason(): ?MediaSeason
    {
        return $this->season;
    }

    public function setSeason(?MediaSeason $season): self
    {
        $this->season = $season;

        return $this;
    }
}
