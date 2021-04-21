function SetSessionUtilisateur() {
    console.log("SetSession");
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        
        if (this.readyState == 4) { //NE PAS OUBLIER LA VERIFICATION 
            if (this.status == 200) {
                console.log("SetSessionReponse");
                var response = JSON.parse(this.responseText);
                console.log(this.responseText);
                if(response.error == 0) {
                    $('#btn-login').addClass("hide");
                    $('#btn-register').addClass("hide");
                    $('#btn-deconect').removeClass("hide");
                }
            }
        }
        
    }

    xhttp.open("GET","./php/script/set-session-utilisateur", true);
    xhttp.send();
}