(function inputs() {
  // Cache DOM
  const inputSection = document.getElementById("input-section");
  const inputPassword = inputSection.querySelector("#password");
  const inputRepeatPassword = inputSection.querySelector("#repeat-password");

  // Events Bind
  inputSection.addEventListener("focusout", checkInputValidity);

  function checkInputValidity(event) {
    const element = event.target;
    if (element.type.includes("password")) {
      passwordValidity()
    } else {
      textValidity(element);
    }
  }

  function textValidity(element) {
    if (element.checkValidity()) {
      element.classList.remove("invalid-input");
      element.classList.add("valid-input");
    } else {
      element.classList.add("invalid-input");
      element.classList.remove("valid-input");
    }
  }

  function passwordValidity() {
    const userPassword = inputPassword.value;
    const userRepeatPassword = inputRepeatPassword.value;

    if (userPassword === userRepeatPassword && userPassword !== "" && userRepeatPassword !== "") {
      inputPassword.className = "valid-input";
      inputRepeatPassword.className = "valid-input";
      inputPassword.setCustomValidity('');
      inputRepeatPassword.setCustomValidity('');
    } else {
      inputPassword.className = "invalid-input";
      inputRepeatPassword.className = "invalid-input";
      inputPassword.setCustomValidity("Invalid field.");

      inputRepeatPassword.setCustomValidity("Invalid field.");
    }
  }
})()





