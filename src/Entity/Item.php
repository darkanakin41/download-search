<?php

namespace App\Entity;

class Item
{
    /** @var integer */
    private $id;
    /** @var Source */
    private $source;
    /** @var string */
    private $title;
    /** @var string[] */
    private $genres;
    /** @var string */
    private $quality;
    /** @var string */
    private $language;
    /** @var integer */
    private $season;
    /** @var string */
    private $lastPart;
    /** @var string */
    private $url;
    /** @var string */
    private $category;
    /** @var Media */
    private $media;

    /** @var string */
    private $fullUrl;

    public function __construct()
    {
        $this->setGenres([]);
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

    public function getGenres(): ?array
    {
        return $this->genres;
    }

    public function setGenres(array $genres): self
    {
        $this->genres = $genres;

        return $this;
    }

    public function getQuality(): ?string
    {
        return $this->quality;
    }

    public function setQuality(?string $quality): self
    {
        $this->quality = $quality;

        return $this;
    }

    public function getLastPart(): ?string
    {
        return $this->lastPart;
    }

    public function setLastPart(?string $lastPart): self
    {
        $this->lastPart = $lastPart;

        return $this;
    }

    public function getUrl(): ?string
    {
        return $this->url;
    }

    public function setUrl(?string $url): self
    {
        $this->url = $url;

        return $this;
    }

    public function getSource(): ?Source
    {
        return $this->source;
    }

    public function setSource(?Source $source): self
    {
        $this->source = $source;

        return $this;
    }

    /**
     * @return string
     */
    public function getFullUrl(): string
    {
        if($this->fullUrl === null){
            $this->fullUrl = $this->source->getBaseUrl() . $this->url;
        }
        return $this->fullUrl;
    }

    /**
     * @param string $fullUrl
     */
    public function setFullUrl(string $fullUrl): void
    {
        $this->fullUrl = $fullUrl;
    }

    public function getId(): ?int
    {
        return $this->id;
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

    public function getMedia(): ?Media
    {
        return $this->media;
    }

    public function setMedia(?Media $media): self
    {
        $this->media = $media;

        return $this;
    }

    public function getLanguage(): ?string
    {
        return $this->language;
    }

    public function setLanguage(?string $language): self
    {
        $this->language = $language;

        return $this;
    }

    public function getSeason(): ?int
    {
        return $this->season;
    }

    public function setSeason(?int $season): self
    {
        $this->season = $season;

        return $this;
    }
}
