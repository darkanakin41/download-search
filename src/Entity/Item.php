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
    private $lastPart;
    /** @var string */
    private $url;

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
}
