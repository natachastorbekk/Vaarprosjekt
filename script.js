function visTekst(land) {
  let tekst = "";


  const norskTabell = ` 
    <p>
      Norsk kultur er sterkt preget av naturen, friluftsliv og tradisjoner. Mange nordmenn liker å gå på tur i fjellet, stå på ski og være ute i naturen. 
      Høytider som 17. mai (nasjonaldagen) feires med tog, bunad og flagg. Norge har også rik folkekunst, som rosemaling og folkemusikk.
    </p>
    <br>
    <table>
      <thead>
        <tr>
          <th>Høytider</th>
          <th>Mat</th>
          <th>Største byene</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>17. mai</td><td>Pinnekjøt</td><td>Oslo</td></tr>
        <tr><td>Julaften</td><td>Kjøttkaker med brun saus</td><td>Bergen</td></tr>
        <tr><td>Nyttår</td><td>Fisk</td><td>Trondheim</td></tr>
        <tr><td>Påske</td><td>Brunost</td><td>Stavanger</td></tr>
      </tbody>
    </table>
  `;
    const franskTabell = `
    <p>
      Fransk kultur er kjent for kunst, mat og mote. Frankrike har mange berømte kunstnere, forfattere og designere. 
      Franske måltider er viktige sosiale samlinger, og landet er kjent for sitt brød, ost og vin. 
      Arkitektur og historiske bygg er også en viktig del av den franske kulturen.
    </p>
    <br>
    <table>
      <thead>
        <tr>
          <th>Høytider</th>
          <th>Mat</th>
          <th>Største byene</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>14.juli</td><td>Ost</td><td>Paris</td></tr>
        <tr><td>Julaften</td><td>Snegler</td><td>Marseille</td></tr>
        <tr><td>Nyttår</td><td>Bakevarer</td><td>Toulouse</td></tr>
        <tr><td>Påske</td><td>Croissant</td><td>Lion</td></tr>
      </tbody>
    </table>
  `;

  if (land == "norge") {
    tekst = norskTabell
  } else if (land == "frankrike") {
    tekst = franskTabell
  }

  document.getElementById("kultur-tekst").innerHTML = tekst; 

}

  function playSound(word) {
  const audio = new Audio('Lyd/' + word + '.m4a');
  audio.play();
  }