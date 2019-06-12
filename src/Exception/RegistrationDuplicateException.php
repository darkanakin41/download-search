<?php


namespace App\Exception;

class RegistrationDuplicateException extends \Exception
{
    public function __construct()
    {
        $message = "Le nom d'utiliateur/l'adresse mail existe déjà";
        parent::__construct($message);
    }

}
