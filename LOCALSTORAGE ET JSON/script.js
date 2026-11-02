// localStorage.setItem("cle", "valeur");

// // Enregister une donnee
// localStorage.setItem("nom", "Degratias");
// localStorage.setItem("prenom", "John");

// //recuperer une donnee
// const nom = localStorage.getItem("nom");
// console.log(nom);

// // modiifer une donnee
// localStorage.setItem("nom", "Julien");

// // supprimer une donnee
// localStorage.removeItem("nom");

// // supprimer toutes les donnees
// localStorage.clear();

const champNom = document.getElementById("nom");
const bouton = document.getElementById("enregistrer");
const message = document.getElementById("message");

// recuperer le nom sauvegarde au chargement
const nomEnregistre = localStorage.getItem("nom"); 

if (nomEnregistre !== null){
    champNom.value = nomEnregistre;
    message.textContent = "Bienevenue " + nomEnregistre;
}

bouton.addEventListener("click", function(){
    const nom = champNom.value.trim();

    if (nom === ""){
        message.textContent = "Veuillez saisir votre nom";
        return;
    }
    localStorage.setItem("nom", nom);

    message.textContent = "Votre nom a ete enregistrer avec succes"
});

// JSON, JavaScript Object Notation: C'est un format textuel utilise pour representer 
// et echanger des donnees structurees
// {
//     "nom": "Degratias",
//     "age": 25,
//     "formation": "developpement Web"
// }

// convertir un objet JavaScript en JSON (texte JSON)
// const apprenant = {
//     nom: "Degratias",
//     age: 25,
//     formation: "developpement Web"
// }
// const texteJSON = JSON.stringify(apprenant);
// console.log(texteJSON);

// // convertir le JSON en objet JavaScript
// const texteJSON2 = '{"nom":"Degratias","age":25,"formation":"developpement Web"}';

// const apprenant2 = JSON.parse(texteJSON2);
// console.log(apprenant2);
// console.log(apprenant2.nom);

// const apprenants = ["JULIEN", "DEGRATIAS", "JOHN"];

// localStorage.setItem("apprenants", JSON.stringify(apprenants));

// const donnees = localStorage.getItem("apprenants");
// const apprenantsRecuperes = donnees === null ? [] : JSON.parse(donnees);
// console.log(apprenantsRecuperes);

// apprenantsRecuperes.forEach(function(nom){
//     console.log(nom);
// })

const apprenants = [
    {
        nom: "Degratias",
        age: 25,
        formation: "Java Script"
    },
    {
        nom: "Julien",
        age: 30,
        formation: "CSS"
    },
    {
        nom: "John",
        age: 28,
        formation: "PYTHON"
    }
]

localStorage.setItem("apprenants", JSON.stringify(apprenants));

const donnees = localStorage.getItem("apprenants");
const apprenantsRecuperes = donnees ? JSON.parse(donnees) : [];
apprenantsRecuperes.forEach(function(apprenant){
    console.log(apprenant.nom + " a " + apprenant.age + " ans et suit la formation " + apprenant.formation);
});