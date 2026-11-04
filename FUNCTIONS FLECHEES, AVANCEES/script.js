// function saluer(nom){
//     return "Bonjour " + nom ;
// }

// const saluerFleche = (nom) => {
//     return "Bonjour " + nom ;
// };

// console.log(saluer("Julien"));
// console.log(saluerFleche("Julien"));

// const addition = (a, b) => a + b;

// console.log(addition(5, 3));

// const doubler = nombre => nombre * 2;

// console.log(doubler(15));

// const calculer = function (a,b) {
//     return a + b ;
// }

// console.log(calculer(5, 20));

// const bouton = document.querySelector("#monboutton");

// bouton.addEventListener("click", function (){
//     console.log("Vous avez cliqué sur le bouton !");
// })

// bouton.addEventListener("click", () =>{
//     console.log("Vous avez cliqué sur le bouton");
// })

// function executerOperation(a, b, operation){
//     return operation(a, b)
// }

// const addition = (a, b) => a + b;
// const multiplication = (a, b) => a * b;

// console.log(executerOperation(5, 3, addition));
// console.log(executerOperation(5, 3, multiplication));

// const apprenants = ["Julien", "Deo", "Pierre"];

// apprenants.forEach((apprenant) => {
//     console.log(apprenant);
// });

// const nombres = [2, 4, 6, 8];

// const doubles = nombres.map(nombre => nombre * 2);

// console.log(doubles);

// const ages = [12, 17, 23, 30, 45];
// const majeurs = ages.filter(age => age >= 18);
// console.log(majeurs);

// const apprenants = [
//     {nom: "Julien", note: 85},
//     {nom: "Deo", note: 90},
//     {nom: "Pierre", note: 78},
//     {nom: "Marie", note: 42},
//     {nom: "Sophie", note: 35}
// ]

// // afficher tous les apprenants
// apprenants.forEach(apprenant => {
//     console.log(apprenant.nom + " a obtenu la note de " + apprenant.note);
// })

// // recuperer uniquement les noms
// const noms = apprenants.map(apprenant => apprenant.nom);
// console.log(noms);

// // selectionner ceux qui nont reussis
// const reussis = apprenants.filter(apprenant => apprenant.note >= 50);
// console.log(reussis);

// const nombres = [10, 20, 30, 40]

// const somme = nombres.reduce((total, nombre) => {
//     return total + nombre
// }, 0);

// console.log(somme);

const notes = [80, 60, 90, 70];
const somme = notes.reduce((total, note) => total + note, 0);
const moyenne = somme / notes.length;
console.log("La moyenne des notes est : " + moyenne);

const ventes = [
    {produit: "ordinateur", prix:500},
    {produit: "telephone", prix:300},
    {produit: "clavier", prix:50}
]
const totalVentes = ventes.reduce((total, vente) => {
    return total + vente.prix;
}, 0)

console.log(totalVentes)

const notes1 = [35, 42, 75, 60];
const aUnEchec = notes1.some(note => note < 50)
console.log(aUnEchec);

const notes2 = [70, 80, 65, 20];
const tousOntreussi = notes2.every(note => note >= 50);
console.log(tousOntreussi)

const apprenants = [
    {id: 1, nom: "Julien", note:85},
    {id: 2, nom: "Deo", note:67},
    {id: 3, nom: "Jean", note:74}
]

const apprenant = apprenants.find(a => a.nom === "Deo")

console.log(apprenant)

const position = apprenants.findIndex(a => a.nom === "Dfeo");
console.log(position)

const nombres = [40, 5, 100, 20];
// nombres.sort((a, b) => a - b);
nombres.sort((a, b) => b - a)
console.log(nombres)

const apprenants1 = [
    {nom: "Julien", note: 85},
    {nom: "Deo", note: 90},
    {nom: "Pierre", note: 78},
    {nom: "Marie", note: 42},
    {nom: "Sophie", note: 35}
]

const classement = apprenants1
    .filter(apprenant => apprenant.note >= 50)
    .sort((a,b) => b.note - a.note)
    .map(apprenant => apprenant.nom)

console.log(classement)

// DESTRUCTURATION, SPREAD ET REST