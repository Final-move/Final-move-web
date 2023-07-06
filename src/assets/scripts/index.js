//***  for my preloader
const preloader = document.querySelector(".preloader");

window.addEventListener("load", () => {
  const hideLoader = preloader.classList;

  hideLoader.add("hide-preloader");
});

//*** Nav fixed on scroll
const primaryHeader = document.querySelector(".primary__header");

window.addEventListener("scroll", () => {
  const windowPageHeight = window.pageYOffset;
  const primaryHeaderHeight = primaryHeader.getBoundingClientRect().height;

  windowPageHeight > primaryHeaderHeight
    ? primaryHeader.classList.add("fixed_nav")
    : primaryHeader.classList.remove("fixed_nav");
});

//***  navToggle controls

const navToggle = document.querySelector(".nav-toggle");
const closeToggle = document.querySelector(".close-toggle");
const navLinks = document.querySelector(".nav__links");
const controlKey = navLinks.classList;

navToggle.addEventListener("click", function () {
  if (controlKey.contains("show__links")) {
    controlKey.remove("show__links");
  } else {
    controlKey.add("show__links");
  }
});

closeToggle.addEventListener("click", function () {
  if (controlKey.contains("show__links")) {
    controlKey.remove("show__links");
  }
});
