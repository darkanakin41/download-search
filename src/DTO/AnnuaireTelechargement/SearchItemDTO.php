<?php

namespace App\DTO\AnnuaireTelechargement;

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
        $item->setQuality(self::getQuality($DOMNode));
        $item->setUrl(self::getURL($DOMNode));
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
        $parentNode = self::getByClass($DOMNode, 'cover_infos_title');
        if($parentNode === null){
            return null;
        }

        $node = self::getByTagName($DOMNode, 'a');
        if($node === null){
            return null;
        }

        return 	utf8_decode(trim($node->nodeValue));
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
        $node = self::getByClass($DOMNode, "detail_release");
        if ($node === null) {
            return null;
        }
        return trim($node->nodeValue);
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
        $parentNode = self::getByClass($DOMNode, 'cover_infos_title');
        if($parentNode === null){
            return null;
        }

        $node = self::getByTagName($DOMNode, 'a');

        if($node === null){
            return null;
        }

        return "/" . $node->getAttribute('href');
    }
}
