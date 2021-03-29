let week = 0;
let currentCellPosition = {
    "grid-row-start": null,
    "grid-row-end": null,
    "grid-column-start": null,
    "grid-column-end": null
}

//#region Main program

$(document).ready(function(){

    var onModalClose = function(){
        $('#btn-Menu').text('dehaze');
        $('#btn-Menu').parent().attr("href", "#Menu");
    };

    var onModalOpen = function(){
        $('#btn-Menu').text('close');
        $('#btn-Menu').parent().attr("href", "#!");
    };

    var menuModal = M.Modal.init($('#Menu'), {
        opacity: 0.9,
        onCloseEnd: onModalClose,
        onOpenStart: onModalOpen
    });

    selectWeek(0);
    getEvent(0);

    Array.from(document.getElementsByClassName());


});

//#endregion

//#region boutons

$('#btn-Menu').click(function(){
    
    if($('#btn-Menu').text() == 'close') {
        var menuModal = M.Modal.getInstance($('#Menu'));
        menuModal.close();
    }

});

$('#btn-next-week').click(function() {
    
    if(week < 3) {
        week += 1;
    }
    
    selectWeek(week);
    getEvent(week);

    $('#btn-previous-week').attr("disabled", false);
    
    if(week == 3) { $('#btn-next-week').attr("disabled", true); }

});

$('#btn-previous-week').click(function() {

    if(week > 0) { week -= 1; }

    selectWeek(week);
    getEvent(week);

    $('#btn-next-week').attr("disabled", false);
    
    if (week == 0) { $('#btn-previous-week').attr("disabled", true); }

});

//#endregion

//#region Ajax

function getEvent(select) {
    
    const xhttp = new XMLHttpRequest();
    
    xhttp.onreadystatechange = function() {
    
        if (this.readyState == 4 && this.status == 200) {

            try { 
                var objEvent = JSON.parse(this.responseText);
                htmlWeekEvent(objEvent);
            } 
            catch (error) { console.warn(error); }

        }

    };

    xhttp.open("GET", "events.php?select=" + select, true);
    xhttp.send();

} //Return event collection object

function selectWeek(select) {
    
    const xhttp = new XMLHttpRequest();
    
    xhttp.onreadystatechange = function() {
        
        if (this.readyState == 4 && this.status == 200) {
            
            try { 
                var objDate = JSON.parse(this.responseText);
                htmlWeekDate(objDate);
                htmlDayDate(objDate, 1);
            } 
            catch (error) { console.warn(error); }
        
        }

    };
    
    xhttp.open("GET", "dates.php?select=" + select, true);
    xhttp.send();

} //Return date collection object

//#endregion

//#region fonctions

    function htmlWeekDate(objDate) {
        
        var structure = "";
        structure += "<div>Lundi</br><span>"+objDate[0]+"</span></div>";
        structure += "<div>Mardi</br><span>"+objDate[1]+"</span></div>";
        structure += "<div>Mercredi</br><span>"+objDate[2]+"</span></div>";
        structure += "<div>Jeudi</br><span>"+objDate[3]+"</span></div>";
        structure += "<div>Vendredi</br><span>"+objDate[4]+"</span></div>";

        $(".jours").html(structure);
        
    }

    function htmlDayDate(objDate, day) {}

    function htmlWeekEvent(objEvent) {

        var structure = "";
        var dateDebut;

        objEvent.forEach(element => {
            dateDebut = new Date(element.dateDebut * 1000);
            if(element.type == 'reservation') {
                structure += "<div class='slot reservation' style='grid-row: "+element.row+"; grid-column: "+element.column+"; height: 60px;'>"+dateDebut+"</div>";
            }
            if(element.type == 'atelier') {
                var height = element.duree * 15;
                structure += "<div class='slot reservation' style='grid-row: "+element.row+"; grid-column: "+element.column+"; height: "+ height +"px;'>"+dateDebut+"</div>";
            }
        });
        
        $(".evenement").html(structure);

    }
    
    function htmlDayEvent(objEvent, day) {}

//#endregion
