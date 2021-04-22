// Fonction ouverture Modal Menu
$('#btn-menu').click(function()
{   
    // Si (Modal menu ouvert)
    if($('#btn-menu').text() == 'close') 
    {
        // Fermer le menu 
        var menuModal = M.Modal.getInstance($('#menu'));
        menuModal.close();
    }
});

// Appel d'attribution session utilisateur
SetSessionUtilisateur();

// Plan du document
// Fonction fermeture Modal Menu
    // Si (Modal menu ouvert)
        // Fermer le menu 
// Appel d'attribution session utilisateur