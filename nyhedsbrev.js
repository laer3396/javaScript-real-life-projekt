
document.addEventListener('DOMContentLoaded', function () {
  const tab = document.getElementById("newsletterTab");
  const popup = document.getElementById("newsletterPopup");
  const closeBtn = document.getElementById("closePopup");
  const form = document.getElementById("newsletterForm");
  const signupView = document.getElementById("signupView");
  const thankyouView = document.getElementById("thankyouView");

  // Forsigtige null-checks (hvis fanen er på andre sider)
  if (tab && popup) {
    tab.addEventListener("click", () => popup.classList.add("open"));
  }
  if (closeBtn && popup) {
    closeBtn.addEventListener("click", () => popup.classList.remove("open"));
  }

  if (form && signupView && thankyouView) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("nameInput")?.value.trim() || "";
      const email = document.getElementById("emailInput")?.value.trim() || "";

      // Værdier der accepteres
      const validName = "Mathilde";
      const validEmail = "test@example.com";

      if (name === validName && email === validEmail) {
        signupView.style.display = "none";
        thankyouView.style.display = "flex"; // matcher dit centrerede layout
      } else {
        alert("Forkert navn eller email");
      }
    });
  }
});

