<?php

    function SetSessionUtilisateur() 
    {

        $response = new stdClass;

        session_start();
        
        if ($_SESSION['validLogin']) 
        {
            
            $user = Mysql::getUser($_SESSION['userData']->email);
            $_SESSION['user'] = $user;

            $response->user = $user;

            $jsonResponse = json_encode($response);
            echo $jsonResponse;

        }

    }

    SetSessionUtilisateur();

?> 