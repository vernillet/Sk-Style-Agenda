<?php

    $select = $_GET["select"];
    $semaine = strtotime("+$select week");

    $lundi = date("d/m/y",strtotime("monday this week",$semaine));
    $mardi = date("d/m/y",strtotime("tuesday this week",$semaine));
    $mercredi = date("d/m/y",strtotime("wednesday this week",$semaine));
    $jeudi = date("d/m/y",strtotime("thursday this week",$semaine));
    $vendredi = date("d/m/y",strtotime("saturday this week",$semaine));

    echo
    "<div>Lundi</br><span>$lundi</span></div>
    <div>Mardi</br><span>$mardi</span></div>
    <div>Mercredi</br><span>$mercredi</span></div>
    <div>Jeudi</br><span></span>$jeudi</div>
    <div>Vendredi</br><span></span>$vendredi</div>";
?>