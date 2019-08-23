//programme principal
var unNombre = 2 ;
var sonDouble = doubler(unNombre);
console.log("Le double de %i est %i", unNombre, sonDouble);


function doubler(unParametre) {
    return unParametre * 2;
}

//exemple 2
//programme principal
var uneValeur = 2;
uneValeur = "3";
console.log("uneValeur==3 => " + (uneValeur==3));
console.log("uneValeur === 3 =>"+(uneValeur===3));

//exemple 3 
//programme principal
var uneVariableGlobale="Bonjour";
//La ligne suivante provoque une ReferenceError
//console.log("uneVariableNonDeclaree vaut '%s' dans le programme principal",uneVariableNonDeclaree);
traitement();

//fonction utilisée dans le programme principal
function traitement(){
    var uneVariableLocale="coucou";
    console.log("uneVariableGlobale vaut '%s'", uneVariableGlobale);
    console.log("uneVariableLocale vaut '%s'", uneVariableLocale);
    uneVariableLocaleSansVar = "au revoir";
    console.log("uneVariableLocaleSansVar vaut '%s'", uneVariableLocaleSansVar);    

//exemple 4 
//programme principal
var uneVariableNonDefinie;
console.log(uneVariableNonDefinie);
console.log(uneVariableNonDefinie==undefined);
}