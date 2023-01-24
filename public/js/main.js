const slider = document.querySelector(".slider");
const carousel = document.querySelector(".carousel");

const leftArrow = document.querySelector(".previous");
const rightArrow = document.querySelector(".next");
console.log(rightArrow);

let direction;

function startCarousel() {
  setInterval(function () {
    direction = -1;
    carousel.style.justifyContent = "flex-start";
    // slider.style.transform = "translate(-33%)";
  }, 5000);
}

startCarousel();

leftArrow.addEventListener("click", function () {
  if (direction === -1) {
    slider.appendChild(slider.firstElementChild);
    direction = 1;
  }

  carousel.style.justifyContent = "flex-end";
  slider.style.transform = "translate(33%)";
});

function goRight() {
  direction = -1;
  carousel.style.justifyContent = "flex-start";
  slider.style.transform = "translate(-33%)";
}

rightArrow.addEventListener("click", goRight);

slider.addEventListener("transitionend", function () {
  if (direction === -1) {
    slider.appendChild(slider.firstElementChild);
  } else if (direction === 1) {
    slider.prepend(slider.lastElementChild);
  }

  slider.style.transition = "none";
  slider.style.transform = "translate(0px)";
  setTimeout(function () {
    slider.style.transition = "all 0.5s";
  });
});

setInterval(goRight, 10000);

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
