// Show Password Function
const showPassword = document.querySelector("#show-password");
const passwordField = document.querySelector("#password");

showPassword.addEventListener("click", function () {
  if (passwordField.type === "password") {
    showPassword.setAttribute("name", "eye-off");
  } else {
    showPassword.setAttribute("name", "eye");
  }
  const type =
    passwordField.getAttribute("type") === "password" ? "text" : "password";
  passwordField.setAttribute("type", type);
});