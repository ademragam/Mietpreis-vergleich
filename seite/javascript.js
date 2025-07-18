document.addEventListener("DOMContentLoaded", function () {
  const bilder = {
    bretzfeld: "Prognosen/bretzfeld.jpg",
    dorzbach: "Prognosen/dorzbach.jpg",
    forchtenberg: "Prognosen/forchtenberg.jpg",
    ingelfingen: "Prognosen/ingelfingen.jpg",
    krautheim: "Prognosen/krautheim.jpg",
    kunzelsau: "Prognosen/kunzelsau.jpg",
    kupferzell: "Prognosen/kupferzell.jpg",
    mulfingen: "Prognosen/mulfingen.jpg",
    neuenstein: "Prognosen/neuenstein.jpg",
    niedernhall: "Prognosen/niedernhall.jpg",
    ohringen: "Prognosen/ohringen.jpg",
    pfedelbach: "Prognosen/pfedelbach.jpg",
    schontal: "Prognosen/schontal.jpg",
    waldenburg: "Prognosen/waldenburg.jpg",
    weissbach: "Prognosen/weissbach.jpg",
    zweiflingen: "Prognosen/zweiflingen.jpg"
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
