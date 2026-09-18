document.getElementById("titre").textContent = "Bienvenue sur mon site web";

const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  alert("Vous avez cliqué sur le bouton !");
});

// console.log("Js executer avec succès");
// console.log("HTML")
// console.log("250")
// console.log("la somme egale : " + (50 + 80));
// console.log( "La reponses est : " + (10 + 5 * 4));
// console.log(10 * 5 + 4);

// console.log(bonjour)

// console.log(50 % 3);

// let nom = valeur;

// let nom = "Deo";
// let ville = "Goma";
// let school = "afrix global"

// let age = 20;
// age = 30;
// console.log("mon age est de : " + age + " ans");

// const sexe = "Masculin";
// console.log("mon sexe est : " + sexe);

// const pays ="DRC"
// console.log("je viens de la : " + pays);

// var profession = "Developpeur web";
// console.log("ma profession est : " + profession);

// console.log("Bonjour, je suis " + nom + " je viens de la ville de " + ville + " et j'étudie à l'école " + school);

// type string (chaine des caracteres)
// let nom = "josue";
// let ville = 'Goma';

// // type number
// let age = 50;
// let prixUni = 2000
// let quantite = "500"

// console.log("Le prix total est : " + prixUni * quantite)

// // type boolean (vrai ou faux)
// let connected = true;
// let admin = false;
// console.log(connected)

// let sexe;
// console.log(sexe);

// // null,
// let user = null;
// console.log(user);

// console.log(typeof nom);
// console.log(typeof quantite);
// console.log(typeof connected)

// console.log(typeof 3500)
// console.log(typeof "HEllo")
// console.log(typeof null);

// let town;

// let note1 = 40;
// let note2 = 38;
// let note3 = 76;
// let note4 = 62;
// // TD : Calculez la moyenne de ces notes

// let moyenne = (note1 + note2 + note3 + note4) / 4
// console.log("La moyenne de ces sommes est : " + moyenne)

// console.log(`La moyenne de ${note1} + ${note2} + ${note3} + ${note4} est de : ${moyenne}`)
// console.log("La moyenne de " + note1 + "+")

// let a = 10;
// let b = 5;
// let resultat = a + b;
// console.log(`le resulat est ${resultat}`)
// a = 20;
// resultat = a + b;
// console.log(`Apres reassignation le resulat est ${resultat}`);

const nom = "Josue";
let age = 42;
const ville = "Lubumbashi";
const formation = "Progration Web";
const entreprise = "Afrix Global";
let not = 80;

console.log(
  `Je m'appelle ${nom} J'ai ${age} ans j'habite a ${ville} j'ai fait ${formation} et je travailles ${entreprise} j'ai eu ${not} de moyenne`,
);
console.log(`l'annee pronchaine j'aurais ${age + 1} ans `);


// EXERCICES
// Un etudiant a obtenu :
// Math = 78
// Informatique = 70
// Anglais = 60;
// Physique = 52;
// Histoire = 29
// Geogrphie = 45;

// TD : 
// Creer les variables necessaires
// Calculer la moyenne
// Afficher la moyenne dans le console

let a = 20;
let b = 30;
console.log(`la somme de ${a} + ${b} est : ${a + b}`);

console.log(`la soustraction de ${a} - ${b} est : ${a - b}`);

console.log(`la multiplication de ${a} * ${b} est : ${a * b}`);

console.log(`la division de ${a} / ${b} est : ${a / b}`);

console.log(`le reste de la division de ${a} % ${b} est : ${a % b}`);

console.log(20 % 3);

console.log(5 > 30);
console.log(5 < 30);
console.log(50 >= 30);
console.log(25 <= 30);
console.log(50 !== 80);

console.log(5 === "5")

// if(condition){
//   inscriptions
// }

let age1 = 28;

// if(age1 > 18){
//   console.log("Vous etes majeur")
// }

if(age1 > 18){
  console.log("Vous etes majeur");
} else 
{
  console.log("Vous etes mineur");
}

let note = 28;
if(note >= 80){
  console.log("Excellent");
} else if (note >= 70){
  console.log("Tres bien");
} else if (note <= 60){
  console.log("Bien");
} else if (note >= 50){
  console.log("Passable")
}else
  {
    console.log("Echec");
  }

let age2 = 40;
let carte = true;
if (age2 >= 18 && carte === true){
  console.log("Vous pouvez voter");
}

let sexe = "Masculin"
let connected = true;
if(sexe === "Masculin" || connected === false){
  console.log("Acces autorise")
}

let connexion = !true;
console.log(!connexion);