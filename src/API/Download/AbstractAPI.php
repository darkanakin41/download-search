<?php


namespace App\API\Download;


use App\Entity\Item;
use App\Entity\Source;
use App\Entity\SourceWatch;

interface AbstractAPI
{
    /**
     * Search the $q parameter on the website
     *
     * @param string $q
     *
     * @return Item[]
     */
    public function search($q);

    /**
     * Parse the sourceWatch page in order to extract new items
     *
     * @param SourceWatch $sourceWatch
     *
     * @return Item[]
     */
    public function watch(SourceWatch $sourceWatch);

    /**
     * Search the $q parameter on the website
     *
     * @param Item $item
     *
     * @return Item[]
     */
    public function update(Item $item);

    /**
     * Get the base url of the API
     *
     * @return string
     */
    public function getBaseURL();

    /**
     * Get the source associated to the API
     *
     * @return Source
     */
    public function getSource();
}
