
document.addEventListener("DOMContentLoaded", () => {
    
    const popup = document.getElementById("popup");
    const popupText = document.getElementById("popupText");
    const closeBtn = document.getElementById("closePopup");

    // Tekster til hver feature (i samme rækkefølge som dine billeder)
    const featureTexts = {
        "åndbar": "Denne jakke er åndbar og giver god ventilation.",
        "tapede sømme": "De tapede sømme gør jakken ekstra vandtæt.",
        "vandskyende": "Materialet afviser vand for at holde dig tør."
    };

    // Find alle billeder
    const featureItems = document.querySelectorAll(".feature-item img");

    featureItems.forEach(img => {
        img.addEventListener("click", () => {
            const altText = img.alt;   // bruger 'alt' til at finde beskrivelse
            popupText.textContent = featureTexts[altText] || "Ingen tekst tilgængelig";
            popup.style.display = "flex";
        });
    });

    closeBtn.addEventListener("click", () => {
        popup.style.display = "none";
    });

    popup.addEventListener("click", (e) => {
        if (e.target === popup) popup.style.display = "none";
    });
});
