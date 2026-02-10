
document.addEventListener("DOMContentLoaded", () => {
    
    const popup = document.getElementById("popup");
    const popupText = document.getElementById("popupText");
    const closeBtn = document.getElementById("closePopup");

    // Tekster til hver feature (i samme rækkefølge som dine billeder)
    const featureTexts = {
        "åndbar": "Dette materiale absorberer fugt og lader overskydende sved fordampe, så du holdes tør, varm og komfortabel under hele din træning.",
        "tapede sømme": "Dette produkt har tapede sømme. For at gøre dit produkt vandtæt, er der svejset vandtæt tape på indersiden af sømmene, så vandet ikke kan sive igennem.",
        "vandskyende": "Dette produkts overflade har fået en behandling, der gør det vandafvisende. Behandlingen vil aftage efter vask, men med det rette vaskemiddel kan du vedligeholde og forny dets funktion. Behandlingen er desuden PFC fri.",
        "vandtæt": "Dette produkt er vandafvisende, hvilket betyder, at det modvirker vand at trænge ind, men tillader fugt og sved at trænge ud. Dette produkt vil altså holde dig tør og komfortabel."
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
