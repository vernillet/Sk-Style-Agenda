<?php
    $response = json_decode( file_get_contents('php://input') );
    if($response->email == "TEST") {
        $response = new stdClass;
        $response->valide = false;
        $jsonResponse = json_encode($response);
        echo "TEST est fonctionel";
    }
    
    
?>