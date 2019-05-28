<?php

namespace App\DTO\ExtremeDownload;

use App\API\ExtremeDownload;
use App\DTO\HTMLDTO;
use App\Entity\Item;
use DOMNode;

class SearchItemDTO extends HTMLDTO
{
    /**
     * Extract information from the node
     *
     * @param DOMNode $DOMNode
     *
     * @return null|Item
     */
    public static function convert(DOMNode $DOMNode)
    {
        if ($DOMNode === null) {
            return null;
        }
        $item = new Item();
        $item->setTitle(self::getTitle($DOMNode));
        $item->setGenres(self::getGenres($DOMNode));
        $item->setQuality(self::getQuality($DOMNode));
        $item->setLastPart(self::getLastPart($DOMNode));
        $item->setFullUrl(self::getURL($DOMNode));
        return $item;
    }

    /**
     * Retrieve the title in the node
     *
     * @param DOMNode $DOMNode
     *
     * @return string|null
     */
    private static function getTitle(DOMNode $DOMNode)
    {
        $node = self::getByClass($DOMNode, "img-post");
        if ($node === null) {
            return null;
        }
        $nodeAlt = $node->getAttribute('alt');
        $nodeAltArray = explode(' - ', $nodeAlt);
        array_pop($nodeAltArray);
        if (!empty(implode(' - ', $nodeAltArray))) {
            return trim(implode(' - ', $nodeAltArray));
        }
        if (!empty($nodeAlt)) {
            return trim($nodeAlt);
        }
        $node = self::getByClass($DOMNode, "top-title");
        if ($node === null) {
            return "";
        }
        return trim($node->nodeValue);
    }

    /**
     * Retrieve the list of genre in the node
     *
     * @param DOMNode $DOMNode
     *
     * @return array|null
     */
    private static function getGenres(DOMNode $DOMNode)
    {
        $node = self::getByClass($DOMNode, "top-genre");
        if ($node === null) {
            return null;
        }
        $nodeValue = $node->nodeValue;
        return explode(', ', $nodeValue);
    }

    /**
     * Retrieve the quality in the node
     *
     * @param DOMNode $DOMNode
     *
     * @return mixed|string|null
     */
    private static function getQuality(DOMNode $DOMNode)
    {
        $node = self::getByClass($DOMNode, "top-lasttitle");
        if ($node === null) {
            return null;
        }
        $nodeValue = $node->nodeValue;
        $subNode = self::getByClass($DOMNode, "top-lastepisode");
        if ($subNode === null) {
            return $nodeValue;
        }
        return trim(str_ireplace($subNode->nodeValue, '', $nodeValue));
    }

    /**
     * Retrieve the last part in the node
     *
     * @param DOMNode $DOMNode
     *
     * @return string|null
     */
    private static function getLastPart(DOMNode $DOMNode)
    {
        $node = self::getByClass($DOMNode, "top-lastepisode");
        if ($node === null) {
            return null;
        }
        $nodeValue = $node->nodeValue;
        if (empty($nodeValue)) {
            return null;
        }
        return trim(str_ireplace(['(', ')', '+'], '', $nodeValue));
    }

    /**
     * Retrieve the URL in the node
     *
     * @param DOMNode $DOMNode
     *
     * @return mixed
     */
    private static function getURL(DOMNode $DOMNode)
    {
        return $DOMNode->getAttribute('href');
    }
}
