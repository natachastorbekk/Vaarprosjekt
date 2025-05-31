

const bilder = [
  { fil: "hatt.png", riktigSvar: "chapeau", norsk: "hatt" },
  { fil: "eple.png", riktigSvar: "pomme", norsk: "eple" },
  { fil: "katt.png", riktigSvar: "chat", norsk: "katt" },
  { fil: "hund.png", riktigSvar: "chien", norsk: "hund" },
  { fil: "bok.png", riktigSvar: "livre", norsk: "bok" },
  { fil: "bil.png", riktigSvar: "voiture", norsk: "bil" },
  { fil: "hus.png", riktigSvar: "maison", norsk: "hus" },
  { fil: "ost.png", riktigSvar: "fromage", norsk: "ost" },
  { fil: "brød.png", riktigSvar: "pain", norsk: "brød" },
  { fil: "sko.png", riktigSvar: "chaussure", norsk: "sko" },
  { fil: "dør.png", riktigSvar: "porte", norsk: "dør" },
  { fil: "sekk.png", riktigSvar: "sac", norsk: "sekk" }
];

let gjeldendeBilde;
let brukteBilder = [];
function lastNyttBilde() {
  if (brukteBilder.length >= bilder.length) {
    brukteBilder = [];
  }

  let tilgjengeligeBilder = bilder.filter((bilde, index) => !brukteBilder.includes(index));
  let tilfeldigIndex = Math.floor(Math.random() * tilgjengeligeBilder.length);
  gjeldendeBilde = tilgjengeligeBilder[tilfeldigIndex];

  let originalIndex = bilder.indexOf(gjeldendeBilde);
  brukteBilder.push(originalIndex);
  document.getElementById("testbilde").src = "Bilder/" + gjeldendeBilde.fil;

}
function skjulAlleKnapper() {
  document.getElementById("svar-melding").style.display = "none";
  document.getElementById("knapp-container").style.display = "none";
  document.getElementById("neste-container").style.display = "none";
}
function sjekksvar(inputElm) {
  const brukerSvar = inputElm.value.toLowerCase().trim();
  const riktigSvar = gjeldendeBilde.riktigSvar.toLowerCase();

  console.log("Du skrev:", brukerSvar);
  console.log("Du skulle skrevet:", riktigSvar);

  const svarMelding = document.getElementById("svar-melding");

  if (brukerSvar === riktigSvar) {
    svarMelding.textContent = "Riktig!";
    svarMelding.className = "svar-boks riktig";
    svarMelding.style.display = "block";

    document.getElementById("neste-container").style.display = "flex";
    document.getElementById("knapp-container").style.display = "none";
  } else {

    svarMelding.textContent = "Feil, du kan jo prøve igjen!";
    svarMelding.className = "svar-boks feil";
    svarMelding.style.display = "block";

    document.getElementById("knapp-container").style.display = "flex";
    document.getElementById("neste-container").style.display = "none";
  }

  inputElm.value = "";
}

function provIgjen() {
  skjulAlleKnapper();

  document.getElementById("svar-input").focus();
}

function hoppOver() {
  lastNyttBilde();
  skjulAlleKnapper();

  document.getElementById("svar-input").focus();
}

function nesteSporsmal() {
  lastNyttBilde();
  skjulAlleKnapper();

  document.getElementById("svar-input").focus();
}

lastNyttBilde();
