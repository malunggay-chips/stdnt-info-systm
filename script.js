const loginChoice = document.getElementById("loginChoice");
const signupChoice = document.getElementById("signupChoice");
const signupForm = document.getElementById("signupForm");
const loginForm = document.getElementById("loginForm");
const authChoice = document.getElementById("authChoice");
const portal = document.getElementById("portal");
const authSection = document.getElementById("auth-section");
const logoutBtn = document.getElementById("logoutBtn");

loginChoice.onclick = () => {
  authChoice.classList.add("hidden");
  loginForm.classList.remove("hidden");
};

signupChoice.onclick = () => {
  authChoice.classList.add("hidden");
  signupForm.classList.remove("hidden");
};

document.getElementById("backToMain1").onclick = () => {
  signupForm.classList.add("hidden");
  authChoice.classList.remove("hidden");
};

document.getElementById("backToMain2").onclick = () => {
  loginForm.classList.add("hidden");
  authChoice.classList.remove("hidden");
};

document.getElementById("signupBtn").onclick = () => {
  signupForm.classList.add("hidden");
  authChoice.classList.remove("hidden");
  alert("Account created! You may now log in.");
};

document.getElementById("loginBtn").onclick = () => {
  authSection.classList.add("hidden");
  portal.classList.remove("hidden");
  document.getElementById("studentName").textContent = "Welcome, Student!";
};

logoutBtn.onclick = () => {
  portal.classList.add("hidden");
  authSection.classList.remove("hidden");
  loginForm.classList.add("hidden");
  authChoice.classList.remove("hidden");
};

function showSection(id) {
  document.querySelectorAll(".section").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  document.querySelectorAll(".sidebar li").forEach(li => li.classList.remove("active"));
  document.querySelector(`a[onclick="showSection('${id}')"]`).parentElement.classList.add("active");
}

// Store Items
const storeItems = [
  { id: 1, name: "University T-Shirt", price: 500, img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&q=60" },
  { id: 2, name: "University Jacket", price: 1200, img: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=600&q=60" },
  { id: 3, name: "PE Jersey", price: 700, img: "https://images.unsplash.com/photo-1539910741010-0eec2bfb4939?auto=format&fit=crop&w=600&q=60" },
  { id: 4, name: "University Hoodie", price: 1000, img: "https://images.unsplash.com/photo-1601924582971-c9a7f2df8a9f?auto=format&fit=crop&w=600&q=60" },
  { id: 5, name: "University Cap", price: 350, img: "https://images.unsplash.com/photo-1533237261546-a4a372b804c7?auto=format&fit=crop&w=600&q=60" }
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function renderStore() {
  const store = document.getElementById("storeItems");
  store.innerHTML = storeItems.map(item => `
    <div class="item">
      <img src="${item.img}" alt="${item.name}">
      <h3>${item.name}</h3>
      <p>₱${item.price}</p>
      <button onclick="addToCart(${item.id})">Add to Cart</button>
    </div>
  `).join("");
  renderCart();
}

function addToCart(id) {
  const item = storeItems.find(i => i.id === id);
  cart.push(item);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

function renderCart() {
  const cartDiv = document.getElementById("cart");
  const totalDiv = document.getElementById("cartTotal");
  if (cart.length === 0) {
    cartDiv.innerHTML = "<p>Your cart is empty.</p>";
    totalDiv.textContent = "";
    return;
  }
  cartDiv.innerHTML = cart.map((i, index) => `
    <div>${i.name} - ₱${i.price} 
      <button onclick="removeItem(${index})">❌</button>
    </div>
  `).join("");
  const total = cart.reduce((sum, i) => sum + i.price, 0);
  totalDiv.innerHTML = `<h4>Total: ₱${total}</h4>`;
}

function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

renderStore();
