var week = 0;

$(document).ready(function(){
    getReservation(0);
});

$('#btn-next-week').click(function() {
    if(week < 3) {
        week += 1;
    }
    
    getReservation(week);

    $('#btn-previous-week').attr("disabled", false);
    
    if(week == 3) { $('#btn-next-week').attr("disabled", true); }
});

$('#btn-previous-week').click(function() {
    if(week > 0) { week -= 1; }

    getReservation(week);

    $('#btn-next-week').attr("disabled", false);
    
    if (week == 0) { $('#btn-previous-week').attr("disabled", true); }
});

function getReservation(selector) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4)
        { 
            if (this.status == 200) 
            {
                // Récuperation des données script.
                var response = JSON.parse(this.response);
                console.log(response);
                //htmlWeekDays(response.weekDays);
                htmlWeekReservation(response.weekReservation);
            }
        }
    };
    xhttp.open("GET", "./php/script/get-reservation.php?select=" + selector, true);
    xhttp.send();
}

function htmlWeekDays(objDate) {
    var structure = "";
        structure += "<div>Lundi</br><span>"+objDate[0]+"</span></div>";
        structure += "<div>Mardi</br><span>"+objDate[1]+"</span></div>";
        structure += "<div>Mercredi</br><span>"+objDate[2]+"</span></div>";
        structure += "<div>Jeudi</br><span>"+objDate[3]+"</span></div>";
        structure += "<div>Vendredi</br><span>"+objDate[4]+"</span></div>";

    $(".jours").html(structure);
}

function htmlWeekReservation(objReservation) {

    var structure = "";

    objReservation.forEach(element => {

        dateDebut = new Date(element.dateDebut * 1000);
        
        if(element.type == 'reservation') {
            if(element.reserver) {
                structure += "<div class='slot reservation booked green' style='grid-row: "+element.row+"; grid-column: "+element.column+"; height: 60px;'>"+dateDebut+"</div>";
            }
            else {
                structure += "<div class='slot reservation' style='grid-row: "+element.row+"; grid-column: "+element.column+"; height: 60px;'>"+dateDebut+"</div>";
            }
        }
        
        if(element.type == 'atelier') {
            var height = element.duree * 15;
            structure += "<a href='#reservation' data-dateTime='"+element.dateDebut+"'><div class='slot reservation' style='grid-row: "+element.row+"; grid-column: "+element.column+"; height: "+ height +"px;'>"+dateDebut+"</div></a>";
        }

    });

    $(".evenement").html(structure);
}