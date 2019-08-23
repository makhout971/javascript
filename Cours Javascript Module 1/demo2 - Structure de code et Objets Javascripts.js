//exemple1
//programme principal
var phrase="une phrase avec des consonnes et des voyelles";
var compteurVoyelles = 0 ;
var nombreA=0;
var nombreE=0;
for(let lettre of phrase)
{
    if(estVoyelle(lettre))
    {
        console.log("la voyelle '%s' est présente", lettre);
        compteurVoyelles++;
        switch(lettre)
        {
            case 'a':
                nombreA++;
                break;
            case'e':
                nombreE++;
                break;
        }
    }
}
console.log("il y a %i voyelles",compteurVoyelles);
console.log("il y a %i a",nombreA);
console.log("il y a %i b",nombreE);
console.log("il y a %i consonnes",phrase.replace(/ /g, '').length-compteurVoyelles);
try {
    console.log(uneErreurGrossiere);

} catch (error) {
    console.log("une erreur est survenue")
}





function estVoyelle(lettre)
{
    if(lettre!= undefined && "aeiouy".indexOf(lettre)>=0)
    {
        return true ;
    }
    return false;
}

//Exemple2
//programme principal
var nombreReel = Math.random()*100;
console.log(nombreReel);
//avoir une valeur réelle
var nombreEntier = parseInt(nombreReel);
console.log(nombreEntier);
//exemple3
//programme principal*
var noel2018 = new Date(2018,11,25);
console.log(noel2018);
console.log(noel2018.toLocaleString());
console.log(noel2018.getDate());
console.log(noel2018.getMonth());
console.log(noel2018.getFullYear());
console.log(noel2018.getYear());