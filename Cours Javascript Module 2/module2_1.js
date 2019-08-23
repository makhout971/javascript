console.log("coucou, le fichier est executé");

function chargerContenu(){

    console.log("coucou la fonction charger contenu est éxécutée");
    document.title = "Mon titre sur l'onglet";
    //document.getElementsByTagName("h1")[0].innerText= "Ceci est mon vrai titre";
    document.getElementById("titre").innerText= "Ceci est vraiment le bon titre";

    //// première manière :

         //création d'un élément de type input
         var elInput = document.createElement("input");     

             //création de l'attribut value
             var attValue = document.createAttribute("value");
             //affectation d'une valeur à l'attribut value
             attValue.value = "une zone de saisie";
             //association d'une valeur à l'élément elinput :
              elInput.setAttributeNode(attValue);

                //// deuxième manière :
                elInput.setAttribute("value","une zone de saisie");

          // ajout du elInput au HTML DOM 
          // afterend, beforebegin, afterbegin,beforeend selon position que l'on veut  
         document.getElementById("titre").insertAdjacentElement("afterend",elInput);

    
   
}