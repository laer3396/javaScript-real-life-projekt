
document.addEventListener('DOMContentLoaded', function () {

  // ─────────────────────────────────────────
  // LILLE "LIBRARY" (hjælpeobjekt)
  // ─────────────────────────────────────────
  const utils = {
    trim: (str) => str.trim(),
    show: (el) => el.style.display = "flex",
    hide: (el) => el.style.display = "none",
  };


  // ─────────────────────────────────────────
  // DOM ELEMENTS
  // ─────────────────────────────────────────
  const tab = document.getElementById("newsletterTab");
  const popup = document.getElementById("newsletterPopup");
  const closeBtn = document.getElementById("closePopup");
  const form = document.getElementById("newsletterForm");
  const signupView = document.getElementById("signupView");
  const thankyouView = document.getElementById("thankyouView");

  
  // ─────────────────────────────────────────
  //  ARRAY + LOOP (liste over acceptable værdier)
  // ─────────────────────────────────────────
  const allowedUsers = [
    { name: "Mathilde", email: "test@example.com" },
    { name: "Lærke", email: "laerke@example.com" },
    { name: "Ela", email: "ela@example.com" }
  ];
  // ✔ Arrays
  // ✔ Loops


  // ─────────────────────────────────────────
  //  EVENTS
  // ─────────────────────────────────────────
  if (tab && popup) {
    tab.addEventListener("click", () => popup.classList.add("open"));
  }

  if (closeBtn && popup) {
    closeBtn.addEventListener("click", () => popup.classList.remove("open"));
  }


  // ─────────────────────────────────────────
  //  FORM SUBMIT
  // ─────────────────────────────────────────
  if (form && signupView && thankyouView) {

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = utils.trim(document.getElementById("nameInput")?.value || "");
      const email = utils.trim(document.getElementById("emailInput")?.value || "");

      let isValid = false;

      // LOOPER gennem arrayet for at finde et match
      for (let i = 0; i < allowedUsers.length; i++) {
        if (allowedUsers[i].name === name && allowedUsers[i].email === email) {
          isValid = true;
          break;
        }
      }

      if (isValid) {
        utils.hide(signupView);
        utils.show(thankyouView);
      } else {
        alert("Forkert navn eller email");
      }
    });
  }
});

