const tab = document.getElementById("newsletterTab");
const popup = document.getElementById("newsletterPopup");
const closeBtn = document.getElementById("closePopup");

tab.addEventListener("click", () => {
    popup.classList.add("open");
});

closeBtn.addEventListener("click", () => {
    popup.classList.remove("open");
});

const form = document.getElementById("newsletterForm");
const signupView = document.getElementById("signupView");
const thankyouView = document.getElementById("thankyouView");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("nameInput").value.trim();
    const email = document.getElementById("emailInput").value.trim();

    // ← Her bestemmer du hvilke værdier der skal acceptere skiftet
  const validNames = ["Mathilde", "Lærke", "Ela"];
    const validEmail = "test@gruppe11.com";

    if (name === validName && email === validEmail) {
        signupView.style.display = "none";
        thankyouView.style.display = "flex";
    } else {
        alert("Forkert navn eller email");
    }
});