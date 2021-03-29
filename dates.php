<?php

    $select = $_GET["select"];
    $semaine = strtotime("+$select week");

    $lundi = date("d/m/y",strtotime("monday this week",$semaine));
    $mardi = date("d/m/y",strtotime("tuesday this week",$semaine));
    $mercredi = date("d/m/y",strtotime("wednesday this week",$semaine));
    $jeudi = date("d/m/y",strtotime("thursday this week",$semaine));
    $vendredi = date("d/m/y",strtotime("saturday this week",$semaine));

    $dateArray = [$lundi, $mardi, $mercredi, $jeudi, $vendredi];

    $eventJSON = json_encode($dateArray);
    echo $eventJSON;
?>