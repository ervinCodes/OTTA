// Quote Carousel
let slideIndex = 1;
runSlideShow(slideIndex); // runSlideShow(1)

// function currentSlide(n) {
//   runSlideShow((slideIndex = n));
// }

function runSlideShow(n) {
  let slides = document.querySelectorAll(".slides");
  let quotes = document.querySelectorAll(".quotes");
  // console.log(dots);

  // if slideIndex > 3, reset slideIndex = 1
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  // if slideIndex < 3
  if (slideIndex < 1) {
    slideIndex = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.add("hidden");
    slides[slideIndex - 1].classList.remove("hidden");
  }

  slideIndex++;
}

setInterval(runSlideShow, 7000);

// Show Password Function
const showPassword = document.querySelector("#show-password");
const passwordField = document.querySelector("#password");

showPassword.addEventListener("click", function () {
  if (passwordField.type === "password") {
    showPassword.setAttribute("name", "eye-off");
  } else {
    showPassword.setAttribute("name", "eye");
  }
  const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
  passwordField.setAttribute('type', type)
});
