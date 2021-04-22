// Fonction Initialisation du Modal.
function initModalLogin()
{
    M.Modal.init($('#login'));
}

// Fonction envois formulaire.
$('#login-form').submit(function ()
{
    // Récuperation des données formulaire.
    var json = {
        email:    $('#login-form input[name="email"]').val(),
        password: $('#login-form input[name="password"]').val(),
        remember: $('#login-form input[name="remember"]').val()
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
                var response = JSON.parse(this.response);

                // Si le login est valide
                if(response.valide) 
                {
                    // Creation de session Utilisateur.
                    SetSessionUtilisateur();
                    M.Modal.getInstance($('#login')).close();
                }
                // Sinon
                else 
                {
                    // Affichage de l'erreur.
                    $('#login-error').html(response.errorMessage);
                }
            }
        }
    }

    // Envois de la requette.
    xhttp.open("POST","./php/script/login.php");
    xhttp.setRequestHeader("Content-type", "application/json")
    xhttp.send(json);

});

// Appel de la fonction d'initialisation Modal.
initModalLogin();

// Plan du document.

// Fonction Initialisation du Modal.
// Fonction envois formulaire.
    // Récuperation des données formulaire.
    // Requette AJAX.
        // Récuperation des données script.
        // Si le login est valide
            // Creation de session Utilisateur.
        // Sinon
           // Affichage de l'erreur.
    // Envois de la requette.
// Appel de la fonction d'initialisation Modal.