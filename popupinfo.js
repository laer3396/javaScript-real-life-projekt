document.addEventListener("DOMContentLoaded", () => {
  // Lille "library" (hjælpeobjekt)
  const utils = {
    show: el => (el.style.display = "flex"),
    hide: el => (el.style.display = "none"),
    text: (el, str) => (el.textContent = str)
  };

  const popup = document.getElementById("popup");
  const popupText = document.getElementById("popupText");
  const closeBtn = document.getElementById("closePopup");

  // Objekter + Arrays
  const featureTexts = {
    "åndbar": "Denne jakke er åndbar og giver god ventilation.",
    "tapede sømme": "De tapede sømme gør jakken ekstra vandtæt.",
    "vandskyende": "Materialet afviser vand for at holde dig tør."
  };
  const featureKeys = ["åndbar", "tapede sømme", "vandskyende"]; // rent array til pensum

  // Debug-eksempel
  console.log("Kendte features:", featureKeys);

  // Find alle billeder
  const featureItems = document.querySelectorAll(".feature-item img");

  featureItems.forEach((img) => {
    img.addEventListener("click", () => {
      // Eksempel på let + block scope
      let altText = img.alt;
      utils.text(popupText, featureTexts[altText] || "Ingen tekst tilgængelig");
      utils.show(popup);
    });
  });

  closeBtn.addEventListener("click", () => utils.hide(popup));

  popup.addEventListener("click", (e) => {
    if (e.target === popup) utils.hide(popup);
  });
});
