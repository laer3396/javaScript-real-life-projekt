/* -----------------------------------
   BILLEDE-GALLERI DATA
   - Et objekt der indeholder arrays af billeder
   - Nøglerne (driedsage, delicioso) matcher data-color i HTML
----------------------------------- */
const productImages = {
    driedsage: [
        "images/jakke1.webp",
        "images/jakke2.webp",
        "images/jakke3.webp",
        "images/jakke4.webp",
        "images/jakke5.webp",
        "images/jakke6.webp",
        "images/jakke7.webp",
        "images/jakke8.webp"
    ],
    delicioso: [
        "images/brunjakke1.webp",
        "images/brunjakke2.webp",
        "images/brunjakke3.webp",
        "images/brunjakke4.webp",
        "images/brunjakke5.webp",
        "images/brunjakke6.webp",
        "images/brunjakke7.webp",
        "images/brunjakke8.webp",
        "images/brunjakke9.webp",
        "images/brunjakke10.webp",
        "images/brunjakke11.webp",
        "images/brunjakke12.webp",
        "images/brunjakke13.webp",
        "images/brunjakke14.webp",
        "images/brunjakke15.webp"
    ]
};


/* -----------------------------------
   FUNKTION: OPDATER GALLERI
   - Skifter hovedbilledet
   - Genskaber thumbnails ud fra valgt farve
   - Tilføjer klik-event til hvert thumbnail
----------------------------------- */
function updateGallery(color) {
    const images = productImages[color];             // Henter array for valgt farve
    const mainImg = document.querySelector(".main-image img");
    const thumbs = document.querySelector(".thumbs");

    mainImg.src = images[0];                         // Sæt første billede som hovedbillede
    thumbs.innerHTML = "";                           // Ryd thumbnails før nye tilføjes

    images.forEach(src => {
        const img = document.createElement("img");   // Lav nyt <img> element
        img.src = src;

        img.addEventListener("click", () => {        // Klik → skift hovedbillede
            mainImg.src = src;
        });

        thumbs.appendChild(img);                     // Tilføj thumbnail til DOM
    });
}


/* -----------------------------------
   FARVE-KLIK
   - Fjerner active fra alle farver
   - Tilføjer active til den valgte
   - Opdaterer galleriet med ny farve
----------------------------------- */
document.querySelectorAll(".color-dot").forEach(dot => {
    dot.addEventListener("click", () => {

        document.querySelectorAll(".color-dot")
            .forEach(d => d.classList.remove("active"));

        dot.classList.add("active");

        updateGallery(dot.dataset.color);            // dataset.color = "driedsage" / "delicioso"
    });
});


/* -----------------------------------
   INITIALT LOAD
   - Finder aktiv farve (eller første farve)
   - Loader galleriet ved side-load
----------------------------------- */
const activeDot = document.querySelector(".color-dot.active") 
               || document.querySelector(".color-dot");

updateGallery(activeDot.dataset.color);


/* -----------------------------------
   STØRRELSER
   - Klik vælger størrelse
   - Disabled knapper kan ikke vælges
----------------------------------- */
const sizeButtons = document.querySelectorAll(".size-btn");

sizeButtons.forEach(btn => {
    btn.addEventListener("click", () => {

        if (btn.classList.contains("disabled")) return;  // Stop hvis knappen er disabled

        sizeButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
    });
});


/* -----------------------------------
   LIKE / FAVORIT
   - Toggle klassen "active"
   - Skifter farve på hjerte-knappen
----------------------------------- */
const wishlistBtn = document.querySelector(".wishlist-btn");

wishlistBtn.addEventListener("click", () => {
    wishlistBtn.classList.toggle("active");
});


/* -----------------------------------
   LÆG I KURV
   - Øger cartCount
   - Console-log til debugging
   - Lille animation på knappen
----------------------------------- */
const addToCartBtn = document.querySelector(".add-to-cart-btn");
let cartCount = 0;

addToCartBtn.addEventListener("click", () => {
    cartCount++;                                      // Øg antal i kurv
    console.log("Antal i kurv:", cartCount);

    addToCartBtn.classList.add("added");              // Animation
    setTimeout(() => addToCartBtn.classList.remove("added"), 300);
});


/* -----------------------------------
   SCROLL-KNAPPER TIL THUMBNAILS
   - Klik på ▲ scroller op
   - Klik på ▼ scroller ned
   - Smooth scroll for bedre UX
----------------------------------- */
const thumbsContainer = document.querySelector(".thumbs");
const scrollUp = document.querySelector(".thumb-scroll.up");
const scrollDown = document.querySelector(".thumb-scroll.down");

scrollUp.addEventListener("click", () => {
    thumbsContainer.scrollBy({
        top: -150,                                    // Scroll op
        behavior: "smooth"
    });
});

scrollDown.addEventListener("click", () => {
    thumbsContainer.scrollBy({
        top: 150,                                     // Scroll ned
        behavior: "smooth"
    });
});


