import {
    apprenants,
    afficherApprenants
} from "./apprenants.js"

import {
    calculerMoyenne,
    compterApprenants
} from "./statistiques.js"

afficherApprenants();

const nombre = compterApprenants(apprenants);
const moyenne = calculerMoyenne(apprenants);

document.querySelector("#nombre-apprenants").textContent =
    `Nombre d'apprenants : ${nombre}`;

document.querySelector("#moyenne").textContent =
 `Moyenne generale : ${moyenne.toFixed(2)}/100`