<?php

namespace App\Entity;

use App\API\Data\TheMovieDB;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;

class Media
{
    private $id;

    private $title;

    private $description;

    private $category;

    private $poster;

    private $backdrop;

    private $updated;

    private $status;

    private $releaseDate;

    private $averageNote;

    private $theMovieDbId;

    private $genres;

    public function __construct()
    {
        $this->genres = new ArrayCollection();
    }

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

    public function getTheMovieDbId(): ?int
    {
        return $this->theMovieDbId;
    }

    public function setTheMovieDbId(?int $theMovieDbId): self
    {
        $this->theMovieDbId = $theMovieDbId;

        return $this;
    }

    public function getBackdropFullURL()
    {
        return TheMovieDB::MEDIA_URL."/".$this->getBackdrop();
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

    /**
     * @return Collection|Genre[]
     */
    public function getGenres(): Collection
    {
        return $this->genres;
    }

    public function addGenre(Genre $genre): self
    {
        if (!$this->genres->contains($genre)) {
            $this->genres[] = $genre;
        }

        return $this;
    }

    public function removeGenre(Genre $genre): self
    {
        if ($this->genres->contains($genre)) {
            $this->genres->removeElement($genre);
        }

        return $this;
    }

    public function getStatus(): ?string
    {
        return $this->status;
    }

    public function setStatus(?string $status): self
    {
        $this->status = $status;

        return $this;
    }
}
