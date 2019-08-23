
afficherDate();

function validerSaisie(){
    //stocker mes attributs d'éléments dans variables
        var savoir = (document.getElementById ("Savoir").value);
        var auteur = (document.getElementById("Auteur").value);
        var date = (document.getElementById("Date").value); 
    
    // appel de l'élément ol de la page html        
        var ol =  document.getElementById("ol");

    // création de l'élément liste
        var newList = document.createElement("li");
    // ajout d'un déclencheur d'évenement sur newlist pour suppression au clic 
        newList.addEventListener("click",supprimer);
    

    // création de l'élément  h1
        var h1 = document.createElement("h1");
    //ajout du contenu dans h1
        var ligneUn = (h1.innerText = savoir);
        h1.innerText = ligneUn;

 // formatage de la date
   // var date = document.getElementById("Date");
   n =  new Date();
   y = n.getFullYear();//année
   m = n.getMonth() + 1;//mois
   if (m < 10) m = "0" + m;
   d = n.getDate();//jour

    // création de l'élément p
        var p = document.createElement("p");
    //ajout du contenu dans p
        var ligneDeux = (p.innerText = " Par "+auteur+", le "+d+"/"+m+"/"+y);
        p.innerText = ligneDeux;
    
    //var liste = (newList.innerText = savoir + " Par "+auteur+", le "+date);
        //newList.innerText=liste;

    // insère la liste "li" créée à la balise "ol" existante
        ol.appendChild(newList);

        // insère ligneUn et ligneDeux dans newlist
        newList.appendChild(h1);
        h1.appendChild(p);
   
}

function supprimer(){
  

    // insère mon écouteur d'évenement dans la variable currentEventTarget
    var currentEventTarget = event.currentTarget;

    // vraie manière d'appeler l'écouteur
    //currentEventTarget.parentNode.removeChild(currentEventTarget);

    //appel à l'élément savoir que je stocke dans une variable
    var savoir = (document.getElementById ("Savoir").value);
    // demande de confirmation avant suppression
    if(confirm(`Voulez-vous supprimer le savoir "${savoir}"?`))
    {
        //manière simplifiée
        currentEventTarget.remove();    }
   

    
}

function afficherDate(){

    //DATE MAINTENANT
    //Remplacer "saisie_date" par l'input contenant la date
    var date = document.getElementById("Date");
    date.valueAsDate = new Date();
   
    n =  new Date();
    y = n.getFullYear();//année
    m = n.getMonth() + 1;//mois
    if (m < 10) m = "0" + m;
    d = n.getDate();//jour
    var afficherDate = document.createElement("p");
    afficherDate.id = "date";
    afficherDate.innerHTML = y + "-" + m + "-" + d;
    date.value = afficherDate.innerHTML;

}

 