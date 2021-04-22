// Fonction Initialisation du Modal.
function initModalRegister() 
{
    M.Modal.init($('#register'));
}

// Fonction envois formulaire.
$('#register-form').submit(function () 
{
    // Récuperation des données formulaire.
    var json = 
    {
        nom:             $('#register-form input[name="nom"]'            ).val(),
        prenom:          $('#register-form input[name="prenom"]'         ).val(),
        email:           $('#register-form input[name="email"]'          ).val(),
        telephone:       $('#register-form input[name="telephone"]'      ).val(),
        password:        $('#register-form input[name="password"]'       ).val(),
        passwordConfirm: $('#register-form input[name="passwordConfirm"]').val(),
        conditions:      $('#register-form input[name="conditions"]'     ).val()
    };
    json = JSON.stringify(json);

    // Requette AJAX.
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() 
    {
        if (this.readyState == 4)
        { 
            if (this.status == 200)
            {
                // Récuperation des données script.
                var response = JSON.parse(this.responseText);
                // Si le register est valide
                if(response.error == 0)
                {
                    // Creation de session Utilisateur.
                    SetSessionUtilisateur(); 
                    M.Modal.getInstance($('#register')).close();
                }
                else 
                {
                    // Affichage de l'erreur.
                    $('#register-error').html(response.errorMessage);
                }
                
            }
        }
    }

    // Envois de la requette.
    xhttp.open("POST","./php/script/register.php");
    xhttp.setRequestHeader("Content-type", "application/json")
    xhttp.send(json);

});

// Appel de la fonction d'initialisation Modal.
initModalRegister();

// Plan du document.

// Fonction Initialisation du Modal.
// Fonction envois formulaire.
    // Récuperation des données formulaire.
    // Requette AJAX.
        // Récuperation des données script.
        // Si le register est valide
            // Creation de session Utilisateur.
        // Sinon
           // Affichage de l'erreur.
    // Envois de la requette.
// Appel de la fonction d'initialisation Modal.