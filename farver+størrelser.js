// FARVER
document.querySelectorAll(".color-dot").forEach(dot => {
    dot.addEventListener("click", () => {

        // Skift aktiv farve
        document.querySelectorAll(".color-dot").forEach(d => d.classList.remove("active"));
        dot.classList.add("active");

        // Skift hovedbillede
        const newImage = dot.dataset.image;
        document.querySelector(".main-image img").src = newImage;
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
