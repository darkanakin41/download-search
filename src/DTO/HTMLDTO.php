<?php


namespace App\DTO;


use DOMDocument;
use DOMNode;
use DOMNodeList;
use DOMXPath;

abstract class HTMLDTO
{

    /**
     * Retrieve the sub node base on the given classname
     *
     * @param DOMNode $DOMNode
     * @param string  $classname
     *
     * @return DOMNode|null
     */
    protected static function getByClass(DOMNode $DOMNode, $classname)
    {
        $document = new DOMDocument();
        $document->appendChild($document->importNode($DOMNode, true));

        $domXPath = new DOMXPath($document);

        $retour = null;

        /** @var DOMNodeList $nodes */
        $nodes = $domXPath->query("//*[contains(concat(' ', normalize-space(@class), ' '), ' $classname ')]");

        for ($i = 0; $i < $nodes->length; $i++) {
            $node = $nodes->item($i);
            $retour = $node;
        }

        return $retour;
    }

    /**
     * Retrieve the sub node base on the given TagName
     *
     * @param DOMNode $DOMNode
     * @param string  $tagName
     *
     * @return DOMNode|null
     */
    protected static function getByTagName(DOMNode $DOMNode, $tagName)
    {
        $document = new DOMDocument();
        $document->appendChild($document->importNode($DOMNode, true));

        $domXPath = new DOMXPath($document);

        $retour = null;

        /** @var DOMNodeList $nodes */
        $nodes = $domXPath->query("//$tagName");

        for ($i = 0; $i < $nodes->length; $i++) {
            $node = $nodes->item($i);
            $retour = $node;
        }

        return $retour;
    }

}
