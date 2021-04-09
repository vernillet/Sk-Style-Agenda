function initModalMenu() {
    var onModalClose = function(){
        $('#btn-Menu').text('dehaze');
        $('#btn-Menu').parent().attr("href", "#menu");
    };//Animation du bouton Menu Fermeture
    var onModalOpen = function(){
        $('#btn-Menu').text('close');
        $('#btn-Menu').parent().attr("href", "#!");
    };//Animation du bouton Menu ouverture
    var menuModal = M.Modal.init($('#menu'), {
        opacity: 0.9,
        onCloseEnd: onModalClose,
        onOpenStart: onModalOpen
    });//Initialisation du Modal + Animation fermeture ouverture

    if(document.URL.indexOf("agenda") >= 0){ 
        $('#ag-lien').addClass('active-menu'); //Couleur du lien actif (classe CSS)
    } 
    else if(document.URL.indexOf("compte") >= 0){
        $('#cp-lien').addClass('active-menu'); //Couleur du lien actif (classe CSS)
    }
}

initModalMenu();
//Vu que le Modal sera appelé pendant le $(document).ready()
//Via un appel Ajax
//On ne peut pas l'appeler une seconde fois
//Tout se qui est noté dans un code JS de modal est a prendre
//Comme appelé dans le $(document).ready()