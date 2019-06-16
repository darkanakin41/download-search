<?php


namespace App\Exception;

class PasswordInvalidException extends \Exception
{
    public function __construct()
    {
        $message = "Le mot de passe fourni est invalide";
        parent::__construct($message);
    }

}
