function initModalRegister() 
{
    M.Modal.init($('#register'));//Initialisation du Modal
}

$('#registerForm').submit(function () {

    var json = 
    {
        nom:             $('#registerForm input[name="nom"]').val(),
        prenom:          $('#registerForm input[name="prenom"]').val(),
        email:           $('#registerForm input[name="email"]').val(),
        telephone:       $('#registerForm input[name="telephone"]').val(),
        password:        $('#registerForm input[name="password"]').val(),
        passwordConfirm: $('#registerForm input[name="passwordConfirm"]').val(),
        conditions:      $('#registerForm input[name="conditions"]').val()
    };
    
    json = JSON.stringify(json);
    console.log(json);
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() 
    {
        if (this.readyState == 4)
        { //NE PAS OUBLIER LA VERIFICATION 
            if (this.status == 200)
            {
                var response = JSON.parse(this.responseText);
                if(response.error != 0)
                {
                    $('#registerError').html(response.errorMessage);
                }
                if(response.error == 0)
                {
                    //SetSessionUtilisateur(); //Récupére la session en cours et change l'affichage
                    M.Modal.getInstance($('#register')).close();
                }
            }
        }
    }

    xhttp.open("POST","./php/script/register.php");
    xhttp.setRequestHeader("Content-type", "application/json")
    xhttp.send(json);

});

initModalRegister();