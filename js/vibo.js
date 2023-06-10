const nav = document.getElementById("navbarNav");
const burgerBtn = document.querySelector(".x-btn");
burgerBtn.addEventListener("click", () => {
  nav.classList.toggle("show");
  burgerBtn.classList.toggle("x-btn-close");
});
// ---------------------------------------------------------------
const navLinks = document.querySelectorAll("#navbarNav .nav-link");
navLinks.forEach((navLink) => {
  navLink.style.setProperty("--data-length", `${navLink.innerHTML.length}ch`);
  navLink.setAttribute("title", navLink.innerHTML.trim());
});
// ---------------------------------------------------------------
const navbar = document.querySelector("header");
const scrollToTopBtn = document.querySelector(".scroll-to-top");
let staticScrollY = window.scrollY;

scrollToTopBtn.addEventListener("click", () => {
  scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

window.onscroll = () => {
  let currentScrollY = window.scrollY;
  if (currentScrollY > staticScrollY) {
    navbar.style.top = "-100%";
  } else {
    navbar.style.top = "0";
  }
  staticScrollY = currentScrollY;
  // --------------
  if (currentScrollY > 600) {
    scrollToTopBtn.style.left = "1rem";
  } else {
    scrollToTopBtn.style.left = "-3rem";
  }
};
