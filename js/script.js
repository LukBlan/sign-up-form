(function inputs() {
  const inputPassword = document.getElementById("password");
  const inputRepeatPassword = document.getElementById("repeat-password");

  document.body.addEventListener("focusout", checkInputValidity);

  function checkInputValidity(event) {
    const element = event.target;
    if (element.nodeName === "INPUT") {
      if (element.type.includes("password")) {
        passwordValidity()
      } else {
        textValidity(element);
      }
    }
  }

  function textValidity(element) {
    if(element.checkValidity()) {
      if (element.className.includes("invalid-input")) {
        element.classList.remove("invalid-input")
      }
      if (!element.className.includes("valid-input")) {
        element.classList.add("valid-input")
      }
    } else {
      if (!element.className.includes("invalid-input")) {
        element.classList.add("invalid-input")
      }
      if (element.className.includes("valid-input")) {
        element.classList.remove("valid-input")
      }
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





