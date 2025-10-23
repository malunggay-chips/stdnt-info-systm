const showLogin=document.getElementById("show-login");
const showSignup=document.getElementById("show-signup");
const signupForm=document.getElementById("signup-form");
const loginForm=document.getElementById("login-form");
const authSection=document.getElementById("auth-section");
const portal=document.getElementById("portal");
showLogin.addEventListener("click",()=>{signupForm.classList.add("hidden");loginForm.classList.remove("hidden");});
showSignup.addEventListener("click",()=>{loginForm.classList.add("hidden");signupForm.classList.remove("hidden");});
signupForm.addEventListener("submit",e=>{e.preventDefault();signupForm.classList.add("hidden");loginForm.classList.remove("hidden");});
loginForm.addEventListener("submit",e=>{e.preventDefault();authSection.classList.add("hidden");portal.classList.remove("hidden");});
document.getElementById("logout-btn").addEventListener("click",()=>{portal.classList.add("hidden");authSection.classList.remove("hidden");loginForm.classList.add("hidden");});
const navLinks=document.querySelectorAll(".sidebar a");
const sections=document.querySelectorAll(".section");
navLinks.forEach(link=>{
  link.addEventListener("click",e=>{
    e.preventDefault();
    const id=e.target.getAttribute("data-section");
    sections.forEach(s=>s.classList.remove("active"));
    navLinks.forEach(n=>n.parentElement.classList.remove("active"));
    document.getElementById(id).classList.add("active");
    e.target.parentElement.classList.add("active");
    if(window.innerWidth<=1024){document.getElementById("sidebar").classList.remove("active");}
  });
});
document.getElementById("menu-toggle").addEventListener("click",()=>{document.getElementById("sidebar").classList.toggle("active");});
