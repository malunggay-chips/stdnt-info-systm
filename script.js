const auth = document.getElementById("auth-section");
const signupForm = document.getElementById("signup-form");
const loginForm = document.getElementById("login-form");
const portal = document.getElementById("portal");

document.getElementById("show-login").onclick = () => {
  auth.classList.add("hidden");
  loginForm.classList.remove("hidden");
};

document.getElementById("show-signup").onclick = () => {
  auth.classList.add("hidden");
  signupForm.classList.remove("hidden");
};

document.getElementById("back-login").onclick = () => {
  loginForm.classList.add("hidden");
  auth.classList.remove("hidden");
};

document.getElementById("back-signup").onclick = () => {
  signupForm.classList.add("hidden");
  auth.classList.remove("hidden");
};

signupForm.querySelector("form").onsubmit = (e) => {
  e.preventDefault();
  signupForm.classList.add("hidden");
  auth.classList.remove("hidden");
};

loginForm.querySelector("form").onsubmit = (e) => {
  e.preventDefault();
  loginForm.classList.add("hidden");
  portal.classList.remove("hidden");
};

document.getElementById("logout-btn").onclick = () => {
  portal.classList.add("hidden");
  auth.classList.remove("hidden");
};

const links = document.querySelectorAll(".sidebar a");
const sections = document.querySelectorAll(".section");
links.forEach(link => {
  link.onclick = e => {
    e.preventDefault();
    links.forEach(l => l.parentElement.classList.remove("active"));
    e.target.parentElement.classList.add("active");
    const id = e.target.dataset.section;
    sections.forEach(s => s.classList.remove("active"));
    document.getElementById(id).classList.add("active");
  };
});

document.getElementById("theme-toggle").onchange = () => {
  document.body.classList.toggle("dark");
};
