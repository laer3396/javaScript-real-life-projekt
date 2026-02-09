// FARVER
document.querySelectorAll(".color-dot").forEach(dot => {
    dot.addEventListener("click", () => {
        document.querySelectorAll(".color-dot").forEach(d => d.classList.remove("active"));
        dot.classList.add("active");
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
