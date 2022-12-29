let slideIndex = 1;
runSlideShow(slideIndex); // runSlideShow(1)

function currentSlide(n) {
  runSlideShow((slideIndex = n));
}

function runSlideShow(n) {
  let slides = document.querySelectorAll(".slides");
  let dots = document.querySelectorAll("#dot");
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

  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
    dots[slideIndex - 1].classList.add("active");
  }

  // for (let i = 0; i < quotes.length; i++) {
  //   quotes[slideIndex - 1].classList.add("quotes");
  // }
  slideIndex++;
}

setInterval(runSlideShow, 7000);
