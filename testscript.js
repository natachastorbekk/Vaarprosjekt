

  const bilder = [
    { fil: "hatt.png", riktigSvar: "chapeau", norsk: "hatt" },
    { fil: "eple.png", riktigSvar: "pomme", norsk: "eple" },
    { fil: "chat.png", riktigSvar: "chat", norsk: "katt" },
    { fil: "hund.png", riktigSvar: "chien", norsk: "hund" },
    { fil: "livre.png", riktigSvar: "livre", norsk: "bok" },
    { fil: "bil.png", riktigSvar: "voiture", norsk: "bil" },
    { fil: "hus.png", riktigSvar: "maison", norsk: "hus" },
    { fil: "ost.png", riktigSvar: "fromage", norsk: "ost" },
    { fil: "brød.png", riktigSvar: "pain", norsk: "brød" },
    { fil: "chaussure.png", riktigSvar: "chaussure", norsk: "sko" },
    { fil: "porte.png", riktigSvar: "porte", norsk: "dør" },
    { fil: "fenetre.png", riktigSvar: "fenêtre", norsk: "vindu" }
];


const bildeObj = bilder[Math.floor(Math.random() * bilder.length)]

imgElm = document.getElementById("testbilde")
imgElm.src = "Bilder/" + bildeObj.fil


function sjekksvar(inputElm) {
  console.log("Du skrev", inputElm.value)
  console.log("Du skulle skrevet", bildeObj.riktigSvar)
}



