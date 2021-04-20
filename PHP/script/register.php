<?php

    require_once "./class-include.php";

    function register() {

        $response = new stdClass;
        $response->error = 0;

        $dataRegister = json_decode(file_get_contents('php://input'));

        $dataRegister->email = filter_var($dataRegister->email, FILTER_SANITIZE_EMAIL);
        $dataRegister->nom = filter_var($dataRegister->nom, FILTER_SANITIZE_STRING);
        $dataRegister->prenom = filter_var($dataRegister->prenom, FILTER_SANITIZE_STRING);
        $dataRegister->password = filter_var($dataRegister->password, FILTER_SANITIZE_STRING);
        $dataRegister->passwordConfirm = filter_var($dataRegister->passwordConfirm, FILTER_SANITIZE_STRING);
        $dataRegister->telephone = filter_var($dataRegister->telephone, FILTER_SANITIZE_NUMBER_INT);

        if(!isset($dataRegister->email) 
        && !isset($dataRegister->nom) 
        && !isset($dataRegister->prenom) 
        && !isset($dataRegister->password) 
        && !isset($dataRegister->telephone) 
        && !isset($dataRegister->passwordConfirm)) 
        {
            $response->error = 1;
            $response->errorMessage = "Donnée manquantes /TEXTE EXEMPLE/";
            $jsonResponse = json_encode($response);
            echo $jsonResponse;
            exit;
        }

        if(!filter_var((bool)$dataRegister->conditions, FILTER_VALIDATE_BOOLEAN)) 
        {
            $response->error = 2;
            $response->errorMessage = "La valiation des conditions d'utilisation et mention legale est requise. /TEXTE EXEMPLE/";
            $jsonResponse = json_encode($response);
            echo $jsonResponse;
            exit;
        }

        if(!filter_var($dataRegister->email, FILTER_VALIDATE_EMAIL)) 
        {
            $response->error = 3;
            $response->errorMessage = "Format d'email non valide. /TEXTE EXEMPLE/";
            $jsonResponse = json_encode($response);
            echo $jsonResponse;
            exit;
        }

        if(!filter_var((int)$dataRegister->telephone, FILTER_VALIDATE_INT) && strlen($dataRegister->telephone) == 10) 
        {
            $response->error = 4;
            $response->errorMessage = "Format de numéro de telephone non valide. /TEXTE EXEMPLE/";
            $jsonResponse = json_encode($response);
            echo $jsonResponse;
            exit;
        }

        $user = MySQL::getLogin($dataRegister->email);

        if($user) 
        {
            $response->error = 5;
            $response->errorMessage = "L'adresse Email est déja utilisée. /TEXTE EXEMPLE/";
            $jsonResponse = json_encode($response);
            echo $jsonResponse;
            exit;
        }

        if($dataRegister->password != $dataRegister->passwordConfirm) 
        {
            $response->error = 6;
            $response->errorMessage = "Les mots de passes ne sont pas identiques. /TEXTE EXEMPLE/";
            $jsonResponse = json_encode($response);
            echo $jsonResponse;
            exit;
        }

        $newUser = new Utilisateur((string)$dataRegister->nom, (string)$dataRegister->prenom, (string)$dataRegister->email, (int)$dataRegister->telephone);

        $mot_de_passe = password_hash($dataRegister->password, PASSWORD_DEFAULT);

        Mysql::setUser($newUser, $mot_de_passe);

        session_start();
            
        $_SESSION['validLogin'] = true;
        $_SESSION['userData'] = $dataRegister; //Données utilisateur de session

        //mail($dataRegister->email, "Validation inscription", "TEST EMAIL SKSTYLE", array('From' => 'contact@sk-style.fr'));
    }
    
    register();
?>