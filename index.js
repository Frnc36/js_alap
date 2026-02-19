import { adatLista } from "./adat.js";
import { eredmenySzamolas } from "./fuggvenyek.js";

let ertekelesElem = document.getElementById("ertekeles");
let inputElem = document.getElementById("number");
let eredmenyElem = document.getElementById("eredmeny");
let gombElem = document.getElementById("eredmeny");
let szamokElem = document.getElementById("szamok");
let tablazatElem = document.getElementById("tablazat");

gombElem.addEventListener("click", valami);

function valami() {
    eredmenySzamolas(inputElem)
    
}