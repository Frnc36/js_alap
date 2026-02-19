export function eredmenySzamolas(inputElem, eredmenyElem) {
  let szoveg = "";
  switch (Number(inputElem.value)) {
    case 1:
      szoveg = "elégtelen";
      break; /* switch-case-nél muszáj a break */
    case 2:
      szoveg = "elégséges";
      break;
    case 3:
      szoveg = "közepes";
      break;
    case 4:
      szoveg = "jó";
      break;
    case 5:
      szoveg = "jeles";
      break;
    default:
      szoveg = "helytelen adat";
      break;
  }
  eredmenyElem.innerHTML = szoveg;
}

export function velSzamok(db, also, felso) {
  let velSzamok = [];
  for (let i = 0; i < db; i++) {
    let velSzam = Math.floor(Math.random() * (felso - also + 1)) + also;
    velSzamok.push(velSzam);
  }
  console.log(velSzamok);
  return velSzamok;
}

export function listaKiir(velSzamok, szamokElem) {
  let szoveg = "";
  for (let i = 0; i < velSzamok.length; i++) {
    szoveg += `<div class=kor>${velSzamok[i]}</div>`;
  }
  szamokElem.innerHTML = szoveg;
}

export function objektKiir(adatLista, tablazatElem) {
  let szoveg = `<table class = "table">
                    <tr>
                        <th>Név</th>
                        <th>Átlag</th>
                    </tr>`;
  for (let i = 0; i < adatLista.length; i++) {
    szoveg += `
            <tr>
                <td>${adatLista[i].nev}</td>
                <td>${adatLista[i].atlag}</td>
            </tr>`;
    
    /* szoveg += "<tr>";
    szoveg += `<td>${adatLista[i].nev}</td>`;
    szoveg += `<td>${adatLista[i].atlag}</td>`;
    szoveg += "</tr>"; */
  }
  szoveg += "</table>";
  tablazatElem.innerHTML = szoveg;
}
