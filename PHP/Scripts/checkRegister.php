<?php

    include "../Classes/MySQL.php";

    $response = new stdClass;
    $response->Error = 0;

    $dataRegister = json_decode( file_get_contents('php://input') );

    if( !isset($dataRegister->email) && !isset($dataRegister->nom) && !isset($dataRegister->prenom) &&
        !isset($dataRegister->password) && !isset($dataRegister->telephone) ) {
        
        $response->Error = 1;
        $response->ErrorMessage = "Donnée manquantes /TEXTE EXEMPLE/";
        $jsonResponse = json_encode($response);
        echo $jsonResponse;
        exit;
    }

    $dataRegister->email = filter_var($dataRegister->email, FILTER_SANITIZE_EMAIL);
    $dataRegister->nom = filter_var($dataRegister->nom, FILTER_SANITIZE_STRING);
    $dataRegister->prenom = filter_var($dataRegister->prenom, FILTER_SANITIZE_STRING);
    $dataRegister->password = filter_var($dataRegister->password, FILTER_SANITIZE_STRING);
    $dataRegister->passwordconfirm = filter_var($dataRegister->passwordconfirm, FILTER_SANITIZE_STRING);
    $dataRegister->telephone = filter_var($dataRegister->telephone, FILTER_SANITIZE_NUMBER_INT);

    if(!filter_var((bool)$dataRegister->conditions, FILTER_VALIDATE_BOOLEAN)) {

        $response->Error = 2;
        $response->ErrorMessage = "La valiation des conditions d'utilisation et mention legale est requise. /TEXTE EXEMPLE/";
        $jsonResponse = json_encode($response);
        echo $jsonResponse;
        exit;

    }

    if(!filter_var($dataRegister->email, FILTER_VALIDATE_EMAIL)) {
        
        $response->Error = 3;
        $response->ErrorMessage = "Format d'email non valide. /TEXTE EXEMPLE/";
        $jsonResponse = json_encode($response);
        echo $jsonResponse;
        exit;

    }

    if(!filter_var((int)$dataRegister->telephone, FILTER_VALIDATE_INT) && strlen($dataRegister->telephone) == 10) {
        
        $response->Error = 4;
        $response->ErrorMessage = "Format de numéro de telephone non valide. /TEXTE EXEMPLE/";
        $jsonResponse = json_encode($response);
        echo $jsonResponse;
        exit;

    }

    $user = MySQL::getUser($dataRegister->email);

    if($user) {
        $response->Error = 5;
        $response->ErrorMessage = "L'adresse Email est déja utilisée. /TEXTE EXEMPLE/";
        $jsonResponse = json_encode($response);
        echo $jsonResponse;
        exit;
    }

    if($dataRegister->password != $dataRegister->passwordconfirm) {
        $response->Error = 6;
        $response->ErrorMessage = "Les mots de passes ne sont pas identiques. /TEXTE EXEMPLE/";
        $jsonResponse = json_encode($response);
        echo $jsonResponse;
        exit;
    }

    $newUser = new Utilisateur(
        (string)$dataRegister->nom, 
        (string)$dataRegister->prenom,
        (string)$dataRegister->email,
        (int)$dataRegister->telephone
    );

    $mot_de_passe = password_hash($dataRegister->password, PASSWORD_DEFAULT);

    Mysql::setUser($newUser, $mot_de_passe);

    //mail($dataRegister->email, "Validation inscription", "TEST EMAIL SKSTYLE", array('From' => 'contact@sk-style.fr'));
?>