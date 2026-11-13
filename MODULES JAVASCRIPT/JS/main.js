// import { addition, soustraction, TVA } from "./calculs.js";

import {
    addition,
    soustraction,
    division
} from "./calculs.js"

import { addition as faireAddition } from "./calculs.js";

import afficherUser from "./users.js";

console.log(addition(10, 5))
console.log(soustraction(20, 15))
// console.log(TVA)
console.log(faireAddition(10, 5))
afficherUser("Deogratias")