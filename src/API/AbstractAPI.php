<?php


namespace App\API;


use App\Entity\Item;
use App\Entity\Source;

interface AbstractAPI
{
    /**
     * Search the $q parameter on the website
     *
     * @param $q
     *
     * @return Item[]
     */
    public function search($q);

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
