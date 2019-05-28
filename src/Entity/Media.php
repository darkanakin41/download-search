<?php

namespace App\Entity;

use App\API\Data\TheMovieDB;

class Media
{
    private $id;

    private $title;

    private $description;

    private $category;

    private $poster;

    private $backdrop;

    private $updated;

    private $theMovieDbId;

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

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(?string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getCategory(): ?string
    {
        return $this->category;
    }

    public function setCategory(?string $category): self
    {
        $this->category = $category;

        return $this;
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

    public function getPosterFullURL(){
        return TheMovieDB::MEDIA_URL . "/" . $this->getPoster();
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

    public function getTheMovieDbId(): ?int
    {
        return $this->theMovieDbId;
    }

    public function setTheMovieDbId(?int $theMovieDbId): self
    {
        $this->theMovieDbId = $theMovieDbId;

        return $this;
    }

    public function getBackdrop(): ?string
    {
        return $this->backdrop;
    }

    public function setBackdrop(?string $backdrop): self
    {
        $this->backdrop = $backdrop;

        return $this;
    }

    public function getBackdropFullURL(){
        return TheMovieDB::MEDIA_URL . "/" . $this->getBackdrop();
    }
}
