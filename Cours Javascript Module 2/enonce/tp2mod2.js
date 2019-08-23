document.title = "Formulaire";
//--------------------------------------------------
//appelle la liste au chargement de la page.
document.onload = listeTailles(); 
//met les labels en gras 

function listeTailles(){
//créé  valorise balises option
    var option = document.createElement("option");
    option.setAttribute("value","39");
    option.innerText = "39";


    var option2 = document.createElement("option");
    option2.setAttribute("value","40");
    option2.innerText = "40";
    
    var option3 = document.createElement("option");
    option3.setAttribute("value","41");
    option3.innerText = "41";

//récupére du select(html) dans taille
    var taille = document.getElementById("taille");
//insere option dans le select et renvoi vers html
    taille.appendChild(option);
    taille.appendChild(option2);
    taille.appendChild(option3);

    //-----------------------------------------------------
    // ajoute un eventlistener sur bouton remplir
    var remplir = document.getElementById("remplir");
    remplir.addEventListener("click",remplissage);

}



function remplissage(){
    //met labels en gras
    //récupére tous les labels dans tableau
    var labels = document.getElementsByClassName("lab");
    //boucle qui parcours le tableau
    for(let i=0; i<labels.length; i++){
            //console.log(labels[i]);
            var labelsGras=labels[i].style.fontWeight='bold';        
   }
   labels.innerText=labelsGras;

    //insere des valeurs par defaut 
   var nom = document.getElementById("nom");
    nom.defaultValue ="Fontaine"; 
   
   console.log(nom);
   
   
   
}