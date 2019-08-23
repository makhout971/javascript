// phrase à traiter:
var phraseSansMaj = "une phrase sans majuscule";
console.log(phraseSansMaj);
// déclaration de la phrase résultante
var phraseAvecMaj;
// séparer les mots de la phrase
var phraseAvecMaj = phraseSansMaj.toLowerCase().split(' ');
//  
function test(){
    //boucle sur la phrase concaténée en mots
    for (var i = 0; i < phraseAvecMaj.length; i++) {
      //charAt selectionne premier caractere
      //toUpperCase le met en majuscules
      // "+ subString" ramène la suite de chaque mot
        phraseAvecMaj[i] = phraseAvecMaj[i].charAt(0).toUpperCase() + phraseAvecMaj[i].substring(1);     
   }
   // rassemble tous les éléments de le phrase en remettant les espaces
   return phraseAvecMaj.join(' '); 
}

console.log(phraseAvecMaj);
console.log(test());