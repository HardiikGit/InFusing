const navButton = document.querySelector(".nav-btn");
const activeNav = document.querySelector(".navLinks");
const closeBtn = document.querySelector(".cls-btn");

navButton.addEventListener("click", () => {
  activeNav.classList.add("active");
});
closeBtn.addEventListener("click", () => {
  activeNav.classList.remove("active");
});
