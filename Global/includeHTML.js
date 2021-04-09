//Appeler se Script dans le DOM

function includeHTML() {
    var z, i, elmnt, file, xhttp;
    //Boucle a travers tout les elements HTML
    z = document.getElementsByTagName("*");
    for(i = 0; i<z.length; i++) {
        elmnt = z[i];
        //Recherche d'elements avec un attribut spécifique
        file = elmnt.getAttribute("include-html");
        //Requette AJAX
        if(file) {
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4) {
                    if (this.status == 200) {

                        elmnt.innerHTML = this.responseText;
                        
                        var head = document.getElementsByTagName('HEAD')[0];
                        var body = document.getElementsByTagName('BODY')[0]; 
                        var link = document.createElement('link');
                        link.rel = 'stylesheet'; 
                        link.type = 'text/css';
                        link.href = file + '.css'; 
                        head.appendChild(link);

                        var script = document.createElement('script');
                        script.src = file + '.js';
                        body.appendChild(script);

                    }
                    if (this.status == 404) {elmnt.innerHTML = "Page non trouvée.";}
                    /* Retiré l'attribut, et appel de fonction */
                    elmnt.removeAttribute("include-html");
                    includeHTML(); 
                    //Permet de chercher a travers les nouveaux Tag si il y a des includes
                }
            }
            xhttp.open("GET", file + '.html', true);
            xhttp.send();

            //sortie de fonction
            return;
        }
    }
}

$(document).ready(includeHTML());