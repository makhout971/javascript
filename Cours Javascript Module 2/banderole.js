window.addEventListener("load",()=>{
//function init(){
    document.getElementById("message").value = "C'est les vacances !";
    document.getElementById("btnAllumer").addEventListener("click",allumer);
    document.getElementById("btnEteindre").addEventListener("click",
    ()=> {
        let h1 =getElementById("titreBanderole");
        h1.remove();
       // document.getElementById("banderole").removeChild(h1);
        document.getElementById("btnAllumer").disabled = false;
        document.getElementById("btnEteindre").disabled = true;
    });
}; 


//ou : 
//window.addEventListener("load",()=>{
   // document.getElementById("message").value = "C'est les vacances !";
//}

function afficher()
{
    let message = document.getElementById("message").value;
    window.alert(message);
}


function allumer(){
    let message = document.getElementById("message").value;
    let h1 = document.createElement("h1");
    h1.id = "titreBanderole"
    h1.innerText = message;
    h1.style.color = "red";
    h1.style.fontWeight = "bold";
    //h1.className ="titre";// méthode pour feuille de style CSS
    document.getElementById("banderole").appendChild(h1);
    //désactive le bouton une fois qu'on l'a cliqué
    document.getElementById("btnAllumer").disabled = true;
}