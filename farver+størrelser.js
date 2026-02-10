/* -----------------------------------
   BILLEDE-GALLERI DATA
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
----------------------------------- */
function updateGallery(color) {
    const images = productImages[color];
    const mainImg = document.querySelector(".main-image img");
    const thumbs = document.querySelector(".thumbs");

    mainImg.src = images[0];
    thumbs.innerHTML = "";

    images.forEach(src => {
        const img = document.createElement("img");
        img.src = src;

        img.addEventListener("click", () => {
            mainImg.src = src;
        });

        thumbs.appendChild(img);
    });
}


/* -----------------------------------
   FARVE-KLIK
----------------------------------- */
document.querySelectorAll(".color-dot").forEach(dot => {
    dot.addEventListener("click", () => {
        document.querySelectorAll(".color-dot").forEach(d => d.classList.remove("active"));
        dot.classList.add("active");
        updateGallery(dot.dataset.color);
    });
});


/* -----------------------------------
   INITIALT LOAD
----------------------------------- */
const activeDot = document.querySelector(".color-dot.active") || document.querySelector(".color-dot");
updateGallery(activeDot.dataset.color);


/* -----------------------------------
   STØRRELSER
----------------------------------- */
const sizeButtons = document.querySelectorAll(".size-btn");

sizeButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        if (btn.classList.contains("disabled")) return;
        sizeButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
    });
});


/* -----------------------------------
   LIKE / FAVORIT
----------------------------------- */
const wishlistBtn = document.querySelector(".wishlist-btn");

wishlistBtn.addEventListener("click", () => {
    wishlistBtn.classList.toggle("active");
});


/* -----------------------------------
   LÆG I KURV
----------------------------------- */
const addToCartBtn = document.querySelector(".add-to-cart-btn");
let cartCount = 0;

addToCartBtn.addEventListener("click", () => {
    cartCount++;
    console.log("Antal i kurv:", cartCount);

    addToCartBtn.classList.add("added");
    setTimeout(() => addToCartBtn.classList.remove("added"), 300);
});


/* -----------------------------------
   SCROLL-KNAPPER TIL THUMBNAILS
----------------------------------- */
const thumbsContainer = document.querySelector(".thumbs");
const scrollUp = document.querySelector(".thumb-scroll.up");
const scrollDown = document.querySelector(".thumb-scroll.down");

scrollUp.addEventListener("click", () => {
    thumbsContainer.scrollBy({ top: -150, behavior: "smooth" });
});

scrollDown.addEventListener("click", () => {
    thumbsContainer.scrollBy({ top: 150, behavior: "smooth" });
});
