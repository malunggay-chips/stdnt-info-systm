document.getElementById("show-login").addEventListener("click", () => {
  document.getElementById("signup-form").classList.add("hidden");
  document.getElementById("login-form").classList.remove("hidden");
});

document.getElementById("show-signup").addEventListener("click", () => {
  document.getElementById("login-form").classList.add("hidden");
  document.getElementById("signup-form").classList.remove("hidden");
});

document.getElementById("signup-form").addEventListener("submit", (e) => {
  e.preventDefault();
  document.getElementById("signup-form").classList.add("hidden");
  document.getElementById("login-form").classList.remove("hidden");
});

document.getElementById("login-form").addEventListener("submit", (e) => {
  e.preventDefault();
  document.getElementById("auth-section").classList.add("hidden");
  document.getElementById("portal").classList.remove("hidden");
});

document.getElementById("logout-btn").addEventListener("click", () => {
  document.getElementById("portal").classList.add("hidden");
  document.getElementById("auth-section").classList.remove("hidden");
  document.getElementById("login-form").classList.add("hidden");
});

const navLinks = document.querySelectorAll(".sidebar a");
const sections = document.querySelectorAll(".section");
navLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const sectionId = e.target.getAttribute("data-section");
    sections.forEach(sec => sec.classList.remove("active"));
    navLinks.forEach(n => n.parentElement.classList.remove("active"));
    document.getElementById(sectionId).classList.add("active");
    e.target.parentElement.classList.add("active");
    if (window.innerWidth <= 1024) {
      document.getElementById("sidebar").classList.remove("active");
    }
  });
});

const menuToggle = document.getElementById("menu-toggle");
menuToggle.addEventListener("click", () => {
  document.getElementById("sidebar").classList.toggle("active");
});
