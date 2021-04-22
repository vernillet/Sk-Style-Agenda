<?php
    require_once "./class-include.php";

    function login() 
    {
        $dataLogin = json_decode(file_get_contents('php://input'));

        $dataLogin->email = filter_var($dataLogin->email, FILTER_SANITIZE_EMAIL);
        $dataLogin->password = filter_var($dataLogin->password, FILTER_SANITIZE_STRING);

        $user = MySQL::getLogin($dataLogin->email);

        if(password_verify($dataLogin->password, $user["mot_de_passe"]) 
        && $user["email"] != null 
        && $user["mot_de_passe"] != null && $user["status"] != 1)
        {
            $response = new stdClass;
            $response->valide = true;
            $jsonResponse = json_encode($response);
            echo $jsonResponse;
            
            session_start();
            $_SESSION['validLogin'] = true;
            $_SESSION['userData'] = $dataLogin; //Données utilisateur de session
            $_SESSION['loginTime'] = time();
        }
        else 
        {
            $response = new stdClass;
            $response->valide = false;
            $response->errorMessage = "Identifiants ou mot de passe érroné. /TEXTE A CHANGER/";
            $jsonResponse = json_encode($response);
            echo $jsonResponse;
        }
    }
    
    login();
    
?>