const inputs = document.querySelectorAll("input");
const passwordInput = document.querySelectorAll("input[type='password']");
inputs.forEach(input => input.addEventListener("focusout", styleInput))
passwordInput.forEach(input => input.addEventListener("focusout", checkPassword))



function styleInput(event) {
  if(event.target.checkValidity()) {
    event.target.className = ""
  } else {
    event.target.className ="invalid-input";
  }
}

function checkPassword() {
  const inputPassword = document.getElementById("password");
  const inputRepeatPassword = document.getElementById("repeat-password");
  const userPassword = inputPassword.value;
  const userRepeatPassword = inputRepeatPassword.value;


 if (userPassword === userRepeatPassword && userPassword !== "" && userRepeatPassword !== ""){
    inputPassword.className = "valid-input";
    inputRepeatPassword.className = "valid-input";
    inputPassword.setCustomValidity('');
    inputRepeatPassword.setCustomValidity('');
  } else {
    inputPassword.className = "invalid-input";
    inputPassword.setCustomValidity("Invalid field.");
    inputRepeatPassword.className = "invalid-input";
    inputRepeatPassword.setCustomValidity("Invalid field.");
  }
}