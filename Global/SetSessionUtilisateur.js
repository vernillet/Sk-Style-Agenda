function SetSessionUtilisateur() {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        
        if (this.readyState == 4) { //NE PAS OUBLIER LA VERIFICATION 
            if (this.status == 200) {

                var response = JSON.parse(this.responseText);
                

            }
        }
    }
}