function visTekst(land) {
  let tekst = "";
  let bilde = "";

  if (land == "norge") {
    tekst = "Norsk kultur er sterkt preget av naturen, friluftsliv og tradisjoner. Mange nordmenn liker å gå på tur i fjellet, stå på ski og være ute i naturen. Høytider som 17. mai (nasjonaldagen) feires med tog, bunad og flagg. Norge har også rik folkekunst, som rosemaling og folkemusikk.";
  } else if (land == "frankrike") {
    tekst = "Fransk kultur er kjent for kunst, mat og mote. Frankrike har mange berømte kunstnere, forfattere og designere. Franske måltider er viktige sosiale samlinger, og landet er kjent for sitt brød, ost og vin. Arkitektur og historiske bygg er også en viktig del av den franske kulturen.";
  }

  document.getElementById("kultur-tekst").innerText = tekst;

}

  function playSound(word) {
  const audio = new Audio('Lyd/' + word + '.m4a');
  audio.play();
  }