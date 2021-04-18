<?php
    include "../Classes/MySQL.php";
    $dataLogin = json_decode( file_get_contents('php://input') );

    $dataLogin->email = filter_var($dataLogin->email, FILTER_SANITIZE_EMAIL);

    $user = MySQL::getUser($dataLogin->email);

    if($user["mot_de_passe"] == $dataLogin->password 
        && $user["email"] != null 
        && $user["mot_de_passe"] != null 
        && $user["status"] != 1 ) {
        
        $response = new stdClass;
        $response->valide = true;
        
        $jsonResponse = json_encode($response);
        session_start();
        
        $_SESSION['validLogin'] = true;
        $_SESSION['dataLogin'] = $dataLogin; //Données utilisateur de session
        
        echo $jsonResponse;

    }
    
    else {

        $response = new stdClass;
        $response->valide = false;
        
        $jsonResponse = json_encode($response);
        echo $jsonResponse;
        
    }
    
    
?>