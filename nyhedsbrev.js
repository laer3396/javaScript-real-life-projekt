document.addEventListener("DOMContentLoaded", () => {

  // Små hjælpefunktioner
  const $ = id => document.getElementById(id);
  const show = el => el.style.display = "flex";
  const hide = el => el.style.display = "none";

  // DOM
  const tab = $("newsletterTab");
  const popup = $("newsletterPopup");
  const closeBtn = $("closePopup");
  const form = $("newsletterForm");
  const signupView = $("signupView");
  const thankyouView = $("thankyouView");

  // Tilladte brugere
  const allowedUsers = [
    { name: "Mathilde", email: "test@example.com" },
    { name: "Lærke", email: "laerke@example.com" },
    { name: "Ela", email: "ela@example.com" }
  ];

  // Events
  tab?.addEventListener("click", () => popup.classList.add("open"));
  closeBtn?.addEventListener("click", () => popup.classList.remove("open"));

  // Form submit
  form?.addEventListener("submit", e => {
    e.preventDefault();

    const name = $("nameInput").value.trim();
    const email = $("emailInput").value.trim();

    const isValid = allowedUsers.some(user =>
      user.name === name && user.email === email
    );

    if (isValid) {
      hide(signupView);
      show(thankyouView);
    } else {
      alert("Forkert navn eller email");
    }
  });
});
