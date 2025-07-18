document.addEventListener("DOMContentLoaded", function () {
const bilder = {
  bretzfeld: "../data__science/Prognosen/bretzfeld.png",
  dorzbach: "../data__science/Prognosen/dorzbach.png",
  forchtenberg: "../data__science/Prognosen/forchtenberg.png",
  ingelfingen: "../data__science/Prognosen/ingelfingen.png",
  krautheim: "../data__science/Prognosen/krautheim.png",
  kunzelsau: "../data__science/Prognosen/kunzelsau.png",
  kupferzell: "../data__science/Prognosen/kupferzell.png",
  mulfingen: "../data__science/Prognosen/mulfingen.png",
  neuenstein: "../data__science/Prognosen/neuenstein.png",
  niedernhall: "../data__science/Prognosen/niedernhall.png",
  ohringen: "../data__science/Prognosen/ohringen.png",
  pfedelbach: "../data__science/Prognosen/pfedelbach.png",
  schontal: "../data__science/Prognosen/schontal.png",
  waldenburg: "../data__science/Prognosen/waldenburg.png",
  weissbach: "../data__science/Prognosen/weissbach.png",
  zweiflingen: "../data__science/Prognosen/zweiflingen.png"
};


  // Beide Bilder einzeln holen (HTMLCollection → Array-Index)
  const bilderElemente = document.getElementsByClassName("stadtbild");

  function updateBild(stadt, bildElement) {
    if (bilder[stadt]) {
      bildElement.src = bilder[stadt];
      bildElement.alt = "Bild von " + stadt;
      bildElement.style.display = "block";
    } else {
      bildElement.style.display = "none";
    }
  }

  // Dropdown 1 → Bild 0
  document.getElementById("Stadtwahl1").addEventListener("change", function () {
    updateBild(this.value, bilderElemente[0]);
  });

  // Dropdown 2 → Bild 1
  document.getElementById("Stadtwahl2").addEventListener("change", function () {
    updateBild(this.value, bilderElemente[1]);
  });
});
