<?php


namespace App\Nomenclature;


use PLejeune\CoreBundle\Nomenclature\AbstractNomenclature;

class NotificationActionNomenclature extends AbstractNomenclature
{
    const CREATE = 'create';
    const UPDATE = 'update';
    const DELETE = 'delete';

    const NEW_ITEM = 'new_item';
}
