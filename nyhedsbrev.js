const tab = document.getElementById("newsletterTab");
const popup = document.getElementById("newsletterPopup");
const closeBtn = document.getElementById("closePopup");

tab.addEventListener("click", () => {
    popup.classList.add("open");
});

closeBtn.addEventListener("click", () => {
    popup.classList.remove("open");
});