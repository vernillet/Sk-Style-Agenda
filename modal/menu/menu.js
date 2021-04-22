// Fonction Initialisation du Modal.
function initModalMenu() 
{
    // Créations de callback des fonctions d'ouverture et fermeture du Modal.

    var onModalOpen = function()
    {
        // Lors de l'ouverture, le bouton menu deviens une croix, et sa redirection sur la page globale.
        $('#btn-menu').text('close');
        $('#btn-menu').parent().attr("href", "#!");
    };

    var onModalClose = function()
    {
        // Lors de la fermeture, le bouton menu deviens des barre de menu, et sa redirection sur le modal menu.
        $('#btn-menu').text('dehaze');
        $('#btn-menu').parent().attr("href", "#menu");
    };
    
    // Initialisation du Modal avec l'attributions des callbacks et les options.

    M.Modal.init($('#menu'), 
    {
        opacity: 0.9,
        onCloseEnd: onModalClose,
        onOpenStart: onModalOpen
    });
    
    // Si(URL de la page contient "agenda-client")
    if(document.URL.indexOf("agenda-client") >= 0)
    { 
        // Le lien "AGENDA" prend la classe de lien Actif. (CSS)
        $('#agenda-lien').addClass('active-menu');
    }

    else if(document.URL.indexOf("compte-client") >= 0)
    {
        $('#compte-lien').addClass('active-menu');
    }

}

// Appel de la fonction d'Initialisation du Modal.
initModalMenu();

// Plan du document
// Fonction Initialisation du Modal.
    // Créations de callback des fonctions d'ouverture et fermeture du Modal.
        // Lors de l'ouverture, le bouton menu deviens une croix, et sa redirection sur la page globale.
        // Lors de la fermeture, le bouton menu deviens des barre de menu, et sa redirection sur le modal menu.
    // Initialisation du Modal avec l'attributions des callbacks et les options.
    // Si(URL de la page contient "agenda-client")
        // Le lien "AGENDA" prend la classe de lien Actif. (CSS)
    // Sinon Si(URL de la page contient "compte-client")
        // Le lien "MON COMPTE" prend la classe de lien Actif. (CSS)
// Appel de la fonction d'Initialisation du Modal.