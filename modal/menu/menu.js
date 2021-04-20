function initModalMenu() {
    
    var onModalOpen = function(){
        $('#btn-menu').text('close');
        $('#btn-menu').parent().attr("href", "#!");
    };

    var onModalClose = function(){
        $('#btn-menu').text('dehaze');
        $('#btn-menu').parent().attr("href", "#menu");
    };
    
    M.Modal.init($('#menu'), {
        opacity: 0.9,
        onCloseEnd: onModalClose,
        onOpenStart: onModalOpen
    });

    if(document.URL.indexOf("agenda-client") >= 0){ 
        $('#ag-lien').addClass('active-menu');
    }

    else if(document.URL.indexOf("compte-client") >= 0){
        $('#cp-lien').addClass('active-menu');
    }

}

initModalMenu();

// [X] Fonction Initialisation du Modal.
// [X] Créations de callback des fonctions d'ouverture et fermeture du Modal.
// [X] Lors de l'ouverture, le bouton menu deviens une croix, et sa redirection sur la page globale.
// [X] Lors de la fermeture, le bouton menu deviens des barre de menu, et sa redirection sur le modal menu.
// [X] Initialisation du Modal avec l'attributions des callbacks et les options.
// [X] Si(URL de la page contient "agenda-client") {
// [X]   Le lien "AGENDA" prend la classe de lien Actif. (CSS)
//     }
// [X] Sinon Si(URL de la page contient "compte-client") {
// [X]   Le lien "MON COMPTE" prend la classe de lien Actif. (CSS)
//     }
// [X] Appel de la fonction d'Initialisation du Modal.