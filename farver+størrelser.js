// BILLEDE-GALLERI DATA
const productImages = {
    black: [
        "images/jakke1.webp",
        "images/jakke2.webp",
        "images/jakke3.webp",
        "images/jakke4.webp"
    ],
    blue: [
        "images/brunjakke1.webp",
        "images/brunjakke2.webp",
        "images/brunjakke3.webp",
        "images/brunjakke4.webp"
    ]
};

// FARVER
document.querySelectorAll(".color-dot").forEach(dot => {
    dot.addEventListener("click", () => {

        // Aktiv farve
        document.querySelectorAll(".color-dot").forEach(d => d.classList.remove("active"));
        dot.classList.add("active");

        const color = dot.dataset.color;
        const images = productImages[color];

        // Skift hovedbillede
        const mainImg = document.querySelector(".main-image img");
        mainImg.src = images[0];

        // Skift thumbnails
        const thumbs = document.querySelector(".thumbs");
        thumbs.innerHTML = "";

        images.forEach(src => {
            const img = document.createElement("img");
            img.src = src;
            img.addEventListener("click", () => {
                mainImg.src = src;
            });
            thumbs.appendChild(img);
        });
    });
});


// STØRRELSER
document.querySelectorAll(".size-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        if (btn.classList.contains("disabled")) return;

        document.querySelectorAll(".size-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
    });
});


// LIKE / FAVORIT
const wishlistBtn = document.querySelector(".wishlist-btn");

wishlistBtn.addEventListener("click", () => {
    wishlistBtn.classList.toggle("active");
});


// LÆG I KURV
const addToCartBtn = document.querySelector(".add-to-cart-btn");
const cartIcon = document.querySelector('.nav-right img[alt="Kurv"]');

let cartCount = 0;

addToCartBtn.addEventListener("click", () => {
    cartCount++;

    // Vis antal i konsollen (kan senere vises i UI)
    console.log("Antal i kurv:", cartCount);

    // Lille visuel feedback på knappen
    addToCartBtn.classList.add("added");
    setTimeout(() => addToCartBtn.classList.remove("added"), 300);
});
