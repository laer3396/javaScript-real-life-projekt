document.addEventListener("DOMContentLoaded", () => {

  const $ = id => document.getElementById(id);

  const tab = $("newsletterTab");
  const popup = $("newsletterPopup");
  const closeBtn = $("closeNewsletterPopup");

  const form = $("newsletterForm");
  const signupView = $("signupView");
  const thankyouView = $("thankyouView");

  const allowedUsers = [
    { name: "Mathilde", email: "test@example.com" },
    { name: "Lærke", email: "laerke@example.com" },
    { name: "Ela", email: "ela@example.com" }
  ];

  // ÅBN popup
  tab?.addEventListener("click", () => popup.classList.add("open"));

  // LUK popup
  closeBtn?.addEventListener("click", () => popup.classList.remove("open"));

  // FORM
  form?.addEventListener("submit", e => {
    e.preventDefault();

    const name = $("nameInput").value.trim();
    const email = $("emailInput").value.trim();

    const isValid = allowedUsers.some(u =>
      u.name === name && u.email === email
    );

    if (isValid) {
      signupView.style.display = "none";
      thankyouView.style.display = "flex";
    } else {
      alert("Forkert navn eller email");
    }
  });
});