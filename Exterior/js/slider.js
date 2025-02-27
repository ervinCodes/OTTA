const slider = document.querySelector(".slider");
const carousel = document.querySelector(".carousel");
const leftArrow = document.querySelector(".previous");
const rightArrow = document.querySelector(".next");
// console.log(rightArrow);

let direction;

function startCarousel() {
  setInterval(function () {
    direction = -1;
    carousel.style.justifyContent = "flex-end";
    slider.style.transform = "translate(25%)";
  }, 15000);
}

startCarousel();

rightArrow.addEventListener("click", goRight);

function goRight() {
  if (direction === -1) {
    slider.prepend(slider.lastElementChild);
    direction = 1;
  }

  carousel.style.justifyContent = "flex-start";
  slider.style.transform = "translate(-25%)";
}

leftArrow.addEventListener("click", goLeft);

function goLeft() {
  direction = -1;
  carousel.style.justifyContent = "flex-end";
  slider.style.transform = "translate(25%)";
}

slider.addEventListener("transitionend", function () {
  if (direction === -1) {
    slider.prepend(slider.lastElementChild);
    
  } else if (direction === 1) {
    slider.appendChild(slider.firstElementChild);
  }

  slider.style.transition = "none";
  slider.style.transform = "translate(0px)";
  setTimeout(function () {
    slider.style.transition = "all 0.5s";
  });
});

// setInterval(goLeft, 10000);
