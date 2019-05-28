<?php


namespace App\API\Download;


use App\Entity\Item;
use App\Entity\Source;

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
