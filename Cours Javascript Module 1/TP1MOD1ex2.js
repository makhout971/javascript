//phrase a traduire:
var phrase = "une chaine avec des lettres dans un certain ordre pour donner du sens";
console.log(phrase);

//élimination des espaces:
var phraseSansEspaces = phrase.replace(/\s+/g, '');
console.log(phraseSansEspaces);

//transformation phrase en tableau:
var tableauPhrase = phraseSansEspaces.split("");
console.log(tableauPhrase.toString());

//tri des lettres dans le tableau:
var lettresTriees = tableauPhrase.sort();
console.log(lettresTriees.toString());


