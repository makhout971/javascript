function validerSaisie(){
    
    console.log("clic sur le bouton btnl");
    //lire la valeur qui a été ajoutée au DOM
    console.log("la valeur saisie est %s", document.getElementById("saisie").value);
    //abonnement programmatique pour cliquer à condition qu'une valeur ait été ajoutée
    document.getElementById("btn2").addEventListener("click",clicBouton2);
}
//fonction de l'abonnement programmatique
//event pour afficher l'évenement qui se produit
function clicBouton2(event)
{
    console.log("Clic sur le bouton 2"+ event)
}

//affichage d'un lien vers site web après clic sur bouton
function ajouterLien(){
    var lien = document.createElement("a");
    var nomLien = document.createTextNode("ENI");
    lien.setAttribute("href","https://www.eni-ecole.fr");
    lien.setAttribute("target","blank");
    lien.appendChild(nomLien);
    document.getElementById("btn3").insertAdjacentElement("afterend",lien);
}

//fonction pour colorer les boutons
function colorerLesBoutons()
{
    var boutons = document.querySelectorAll("input[type='button']")
    for (let i=0;i<boutons.length;i++)
    {
        boutons[i].className="couleur";
        console.log(boutons[i]);
    }
}