const inputs = document.querySelectorAll("input");
inputs.forEach(input => input.addEventListener("focusout", styleInput))

function styleInput(event) {
  event.target.className = (event.target.checkValidity())? "valid-input": "invalid-input";
}