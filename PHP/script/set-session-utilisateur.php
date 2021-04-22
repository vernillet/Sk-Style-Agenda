<?php
    require_once "./class-include.php";
    function SetSessionUtilisateur() 
    {

        $response = new stdClass;
        $response->error = 1;

        session_start();

        if(!isset($_SESSION['loginTime'])) {
            session_unset();
            session_destroy();

            $response->error = 1;
            $response->login = false;

            $jsonResponse = json_encode($response);
            echo $jsonResponse;
            exit;
        }

        if(time() - $_SESSION['loginTime'] > 600) {
            $response->debug = $_SESSION['loginTime'];
            session_unset();
            session_destroy();
            $response->error = 2;
            $response->login = false;

            $jsonResponse = json_encode($response);
            echo $jsonResponse;
            exit;
        }

        
        if ($_SESSION['validLogin']) 
        {
            
            $user = Mysql::getUser($_SESSION['userData']->email);
            $_SESSION['user'] = $user;

            $response->error = 0;
            $response->login = true;

            $jsonResponse = json_encode($response);
            echo $jsonResponse;

        }
        else {
            
            $response->error = 0;
            $response->login = false;

            $jsonResponse = json_encode($response);
            echo $jsonResponse;
        
        }

    }

    SetSessionUtilisateur();

?> 