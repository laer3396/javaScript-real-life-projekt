// Popup elementer
const featurePopup = document.getElementById("featurePopup");
const popupTitle = document.getElementById("popupTitle");
const popupText = document.getElementById("popupText");
const closeFeaturePopup = document.getElementById("closeFeaturePopup");

// Tekster til hver feature
const featureText = {
    "åndbar": {
        title: "Åndbar",
        text: "Dette materiale absorberer fugt og lader overskydende sved fordampe, så du holdes tør, varm og komfortabel under hele din træning."
    },

    "tapede sømme": {
        title: "Tapede sømme",
        text: "DettDette produkt har tapede sømme. For at gøre dit produkt vandtæt, er der svejset vandtæt tape på indersiden af sømmene, så vandet ikke kan sive igenneme materiale absorberer fugt og lader overskydende sved fordampe, så du holdes tør, varm og komfortabel under hele din træning."
    },

    "vandskyende": {
        title: "Vandskyende",
        text: "Dette produkts overflade har fået en behandling, der gør det vandafvisende. Behandlingen vil aftage efter vask, men med det rette vaskemiddel kan du vedligeholde og forny dets funktion. Behandlingen er desuden PFC fri."
    },

    "vandtæt": {
        title: "Vandtæt",
        text: "Dette produkt er vandafvisende, hvilket betyder, at det modvirker vand at trænge ind, men tillader fugt og sved at trænge ud. Dette produkt vil altså holde dig tør og komfortabel."
    }
};


//Klik på feature-ikoner
document.querySelectorAll(".feature-item").forEach(item => {
    item.addEventListener("click", () => {
        const feature = item.dataset.feature;

        popupTitle.textContent = featureText[feature].title;
        popupText.textContent = featureText[feature].text;

        featurePopup.classList.remove("hidden");
    });
});

//Luk popup
closeFeaturePopup.addEventListener("click", () => {
    featurePopup.classList.add("hidden");
});

//Luk popup ved klik udenfor boksen
featurePopup.addEventListener("click", (e) => {
    if (e.target === featurePopup) {
        featurePopup.classList.add("hidden");
    }
});
