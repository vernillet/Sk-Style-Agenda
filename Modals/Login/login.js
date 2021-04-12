function initModalLogin() {
    M.Modal.init($('#login'));//Initialisation du Modal
}

$('#loginForm').submit(function (event) {
    var json = {
        email: $('#email').val(),
        password: $('#password').val(),
        remember: $('#remember').val()
    };

    json = JSON.stringify(json);

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        console.log(this.responseText);
        //var response = JSON.parse(this.responseText);
        //if(!response.valide) {
            $('#loginError').html(this.responseText);
        //}
    }
    xhttp.open("POST","./PHP/Scripts/checkLogin.php");
    xhttp.setRequestHeader("Content-type", "application/json")
    xhttp.send(json);

});

initModalLogin();