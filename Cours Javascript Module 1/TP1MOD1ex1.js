//exercice 1 
//programme principal
//déclaration variables
//compteur
var compteurTirages = 0 ;
//tableau de 99 cases
var tableauTirages = new Array (100);
// j pour entrer le tirage au sort au bon emplacement du tableau
var j = 0;
//boucle sur le tableau
while (checkTableau() == true){
   //tirage du nombre random
        var tirageAuSort  = Math.random(0,101);
        var tirageFoisCent = ((tirageAuSort)*100);
        var tirageFinalArrondi = (parseInt(tirageFoisCent));
             
      //placement du nombre random dans sa case respective
        j = tirageFinalArrondi ;
        tableauTirages[j] = tirageFinalArrondi;
    //incrémentation du compteur
        compteurTirages ++;
    //affichage du resultat
    console.log(compteurTirages)
    console.log(tableauTirages.toString());

} 

//retourne true si le tableau est vide retourne false si le tableau est complet.
function checkTableau() {
    let check = false;
    for (let currentvalue of tableauTirages){
        if (currentvalue == undefined){
            check = true;
        }
    }
    return check;
  }

