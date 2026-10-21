// const titre = document.getElementById("titre");

// titre.style.color = "blue";
// titre.style.fontSize = "20px";
// titre.style.background= "yellow";
// titre.style.textAlign = "center";
// titre.style.padding = "20px"

// const message = document.querySelector(".message");

// const messagew = document.querySelector("p");

// const messages = document.querySelectorAll(".message")
// messages.forEach(function(messages){
//     console.log(messages.textContent)
// })

// const contenu = document.getElementById("contenu");
// contenu.innerHTML = "<h2>DOM LEARNING</h2> <p>Debutons la seance</p>"
// console.log(contenu.innerHTML)

// let photo = document.getElementById("photo")
// // photo.src = "afrix.png";
// // photo.alt = "logo"
// photo.setAttribute("src", "afrix.png")

// const source = photo.getAttribute("src")
// console.log(source)

// photo.removeAttribute("src")

// const bouton = document.getElementById("monBouton");

// // bouton.addEventListener("click", function() {
// //     alert("Vous avez cliqué sur le bouton !");
// // });

// bouton.addEventListener("click", () => {
//     alert("Vous avez cliqué sur le bouton !");
// });

// compteur interactif
let nombre = 0;

const compteur = document.getElementById("compteur");
const incrementer = document.getElementById("incrementer");
const diminuer = document.getElementById("diminuer");
const reinitialiser = document.getElementById("reinitialiser");

incrementer.addEventListener("click", function() {
    nombre++;
    compteur.textContent = nombre;
});

diminuer.addEventListener("click", function() {
    nombre--;
    compteur.textContent = nombre;
});

reinitialiser.addEventListener("click", function(){
    nombre = 0;
    compteur.textContent = nombre;
})

const champNom = document.getElementById("nom");
const resultat = document.getElementById("resultat");

champNom.addEventListener("input", function(){
    resultat.textContent = "Bonjour, " + champNom.value + " !";
});

const formation = document.getElementById("formation");
const choix = document.getElementById("choix");

formation.addEventListener("change", function() {
    choix.textContent = "Vous avez choisi la formation : " + formation.value;
});

const formulaire = document.getElementById("formulaire");
const nom = document.getElementById("nom");
const message = document.getElementById("message");

formulaire.addEventListener("submit", function(event){
    event.preventDefault();
    message.textContent = "Bienvenue " + nom.value;
})

const saisie = document.getElementById("saisie")
const touch = document.getElementById("touche")

saisie.addEventListener("keydown", function(event){
    touche.textContent = "Touche : " + event.key;
})