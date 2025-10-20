// === AUTH SYSTEM ===
const signupForm = document.getElementById("signupForm");
if (signupForm) {
  signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("signupName").value.trim();
    const email = document.getElementById("signupEmail").value.trim();
    const password = document.getElementById("signupPassword").value.trim();

    if (!name || !email || !password) {
      alert("Please fill in all fields!");
      return;
    }

    const user = { name, email, password, photo: "" };
    localStorage.setItem("studentUser", JSON.stringify(user));
    alert("Account created successfully!");
    window.location.href = "login.html";
  });
}

const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value.trim();
    const storedUser = JSON.parse(localStorage.getItem("studentUser"));

    if (storedUser && storedUser.email === email && storedUser.password === password) {
      localStorage.setItem("loggedIn", "true");
      alert("Login successful!");
      window.location.href = "index.html";
    } else {
      alert("Invalid email or password.");
    }
  });
}

// === PROTECT DASHBOARD ===
if (window.location.pathname.endsWith("index.html")) {
  const isLoggedIn = localStorage.getItem("loggedIn");
  if (!isLoggedIn) {
    window.location.href = "login.html";
  }

  const student = JSON.parse(localStorage.getItem("studentUser"));
  if (student) {
    document.getElementById("studentName").textContent = student.name;
    document.getElementById("profileName").textContent = student.name;
    document.getElementById("profileEmail").textContent = student.email;
    if (student.photo) {
      document.getElementById("profilePhoto").src = student.photo;
    }
  }

  // === LOGOUT ===
  document.getElementById("logoutBtn").addEventListener("click", () => {
    localStorage.removeItem("loggedIn");
    window.location.href = "login.html";
  });

  // === PHOTO UPLOAD ===
  const uploadPhoto = document.getElementById("uploadPhoto");
  uploadPhoto.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const student = JSON.parse(localStorage.getItem("studentUser"));
        student.photo = reader.result;
        localStorage.setItem("studentUser", JSON.stringify(student));
        document.getElementById("profilePhoto").src = reader.result;
      };
      reader.readAsDataURL(file);
    }
  });

  // === EDIT PROFILE ===
  const editBtn = document.getElementById("editProfile");
  const editForm = document.getElementById("editForm");
  editBtn.addEventListener("click", () => editForm.classList.toggle("hidden"));
  document.getElementById("saveProfile").addEventListener("click", () => {
    const newName = document.getElementById("editName").value.trim();
    const newEmail = document.getElementById("editEmail").value.trim();
    const student = JSON.parse(localStorage.getItem("studentUser"));
    if (newName) student.name = newName;
    if (newEmail) student.email = newEmail;
    localStorage.setItem("studentUser", JSON.stringify(student));
    document.getElementById("profileName").textContent = student.name;
    document.getElementById("profileEmail").textContent = student.email;
    document.getElementById("studentName").textContent = student.name;
    alert("Profile updated!");
    editForm.classList.add("hidden");
  });
}

// === THEME TOGGLE ===
const themeBtn = document.getElementById("toggle-theme");
if (themeBtn) {
  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    themeBtn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
  });
}

// === NAVIGATION ===
function showSection(id) {
  document.querySelectorAll(".section").forEach((s) => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  document.querySelectorAll(".sidebar nav ul li").forEach((li) => li.classList.remove("active"));
  const clicked = Array.from(document.querySelectorAll(".sidebar nav ul li")).find((li) =>
    li.querySelector(`a[onclick*="${id}"]`)
  );
  if (clicked) clicked.classList.add("active");
}
