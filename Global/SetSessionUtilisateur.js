function SetSessionUtilisateur() {

    console.log("SetSession");
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        
        if (this.readyState == 4) 
        { //NE PAS OUBLIER LA VERIFICATION 
            if (this.status == 200) 
            {
                var response = JSON.parse(this.responseText);
                console.log(this.responseText);
                
                if(response.error === 0 && response.login === true) 
                {
                    $('#btn-login').addClass("hide");
                    $('#btn-register').addClass("hide");
                    $('#btn-deconect').removeClass("hide");
                    $('#btn-compte').removeClass("hide");
                }

            }
        }
        
    }

    xhttp.open("GET","./php/script/set-session-utilisateur", true);
    xhttp.send();
}