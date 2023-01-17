const inputs = document.querySelectorAll("input");
const passwordInput = document.querySelectorAll("input[type='password']");
inputs.forEach(input => input.addEventListener("focusout", styleInput))
passwordInput.forEach(input => input.addEventListener("focusout", checkPassword))



function styleInput(event) {
  event.target.className = (event.target.checkValidity())? "": "invalid-input";
}

function checkPassword() {
  const inputPassword = document.getElementById("password");
  const inputRepeatPassword = document.getElementById("repeat-password");
  const userPassword = inputPassword.value;
  const userRepeatPassword = inputRepeatPassword.value;

  if (userPassword !== "" && userRepeatPassword !== "" && userPassword !== userRepeatPassword) {
    inputPassword.className = "invalid-input";
    inputRepeatPassword.className = "invalid-input";
  } else if (userPassword === userRepeatPassword && userPassword !== ""){
    inputPassword.className = "valid-input";
    inputRepeatPassword.className = "valid-input";
  }
}