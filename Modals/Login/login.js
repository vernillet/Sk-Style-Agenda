function initModalLogin() {
    M.Modal.init($('#login'));//Initialisation du Modal
}

$('#loginForm').submit(function () {

    var json = {
        email:    $('#loginForm input[name="email"]').val(),
        password: $('#loginForm input[name="password"]').val(),
        remember: $('#loginForm input[name="remember"]').val()
    };

    json = JSON.stringify(json);

    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        
        if (this.readyState == 4) { //NE PAS OUBLIER LA VERIFICATION 
            if (this.status == 200) {

                if(response.valide) {
                    //SessionUtilisateur(); //Récupére la session en cours et change l'affichage
                    M.Modal.getInstance($('#login')).close();
                }
                else {
                    $('#loginError').html(this.responseText);
                }

            }
        }

    }

    xhttp.open("POST","./PHP/Scripts/checkLogin.php");
    xhttp.setRequestHeader("Content-type", "application/json")
    xhttp.send(json);

});

initModalLogin();