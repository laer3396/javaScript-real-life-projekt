document.addEventListener("DOMContentLoaded", () => {

  // Lille helper-funktion (ikke pensum, bare nice)
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

  // ---------------------------------------------------
  // VARIABLE SCOPE (pensum)
  // ---------------------------------------------------
  let counter = 0; // global variabel

  function increment() {
    let counter = 10; // lokal variabel (samme navn, men kun inde i funktionen)
    console.log("lokal counter:", counter);
  }

  increment();
  console.log("global counter:", counter);

  // ---------------------------------------------------
  // LIBRARY-FUNKTION (pensum)
  // En genbrugelig funktion der validerer brugere
  // ---------------------------------------------------
  function validateUser(name, email, list) {
    return list.some(u => u.name === name && u.email === email);
  }

  // ---------------------------------------------------
  // ÅBN popup
  // ---------------------------------------------------
  tab?.addEventListener("click", () => popup.classList.add("open"));

  // ---------------------------------------------------
  // LUK popup
  // ---------------------------------------------------
  closeBtn?.addEventListener("click", () => popup.classList.remove("open"));

  // ---------------------------------------------------
  // FORM SUBMIT
  // ---------------------------------------------------
  form?.addEventListener("submit", e => {
    e.preventDefault();

    const name = $("nameInput").value.trim();
    const email = $("emailInput").value.trim();

    // Brug library-funktionen her
    const isValid = validateUser(name, email, allowedUsers);

    if (isValid) {
      signupView.style.display = "none";
      thankyouView.style.display = "flex";
    } else {
      alert("Forkert navn eller email");
    }
  });
});
