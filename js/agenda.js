var week = 0;

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

    getEvent(0);

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
    
    selectweek(week);
    getEvent(week);

    $('#btn-previous-week').attr("disabled", false);
    
    if(week == 3) { $('#btn-next-week').attr("disabled", true); }

});

$('#btn-previous-week').click(function() {

    if(week > 0) { week -= 1; }

    selectweek(week);
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
    
    var xhttp = new XMLHttpRequest();
    
    xhttp.onreadystatechange = function() {
        
        if (this.readyState == 4 && this.status == 200) {
            try { 
                var result = JSON.parse(this.responseText);
                return result;
             } 
            catch (error) { console.warn('JSON Event format error!'); }
        }

    };
    
    xhttp.open("GET", "dates.php?select=" + select, true);
    xhttp.send();

} //Return date collection object

//#endregion

//#region fonctions

    function htmlWeekDate(objDate) {}

    function htmlDayDate(objDate, day) {}

    function htmlWeekEvent(objEvent) {
        objEvent.forEach(element => {
            element.dateDebut
            console.log();
        });
    }
    
    function htmlDayEvent(objEvent, day) {}

//#endregion
