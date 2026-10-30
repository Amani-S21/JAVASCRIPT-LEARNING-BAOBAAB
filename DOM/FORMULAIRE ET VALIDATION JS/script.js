// const nom = document.getElementById("nom")
// const bouton = document.getElementById("afficher")
// const resultat = document.getElementById("resultat")

// bouton.addEventListener("click", function (){
//     resultat.textContent = "Hello dear " + nom.value;
// })

const formuulaire = document.getElementById("formulaire");
const champNom = document.getElementById("nom")
const message = document.getElementById("message")
const email = document.getElementById("email")
const age = document.getElementById("age")

formuulaire.addEventListener("submit", function(event){
    event.preventDefault();

    const nom = champNom.value.trim();
    const emailSaisi = email.value.trim();
    const ageSaisi = age.value;

    if (nom === ""){
        message.textContent = "Le name est obligatoire";
        return;
    }
    if (emailSaisi === ""){
        message.textContent = "L'adresse e-mail est obligatoire"
        return
    }
    if (ageSaisi === "" || Number(ageSaisi) <= 0){
        message.textContent = "Veuillez saisir un age valide"
    }

    message.textContent = "Inscription validee pour " + nom + " avec comme adresse mail : " + emailSaisi + " et age : " + ageSaisi + "ans" ;
})