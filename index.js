import { adatLista } from "./adat.js";
import { eredmenySzamolas, listaKiir, objektKiir } from "./fuggvenyek.js";
import { velSzamok } from "./fuggvenyek.js";

let inputElem = document.getElementById("ertekeles");
let eredmenyElem = document.getElementById("eredmeny");
let gombElem = document.getElementById("gomb");
let szamokElem = document.getElementById("szamok");
let tablazatElem = document.getElementById("tablazat");

gombElem.addEventListener("click", function () {
  console.log("valami");
  eredmenySzamolas(inputElem, eredmenyElem);
});

/* function kiir() {
  console.log("valami");
  eredmenySzamolas(inputElem, eredmenyElem);
  velSzamok();
} */
let velSzamokLista = velSzamok(12, -10, 100);
listaKiir(velSzamokLista, szamokElem);
objektKiir(adatLista,tablazatElem);
