const authChoice=document.getElementById('authChoice');
const signupForm=document.getElementById('signupForm');
const loginForm=document.getElementById('loginForm');
const portal=document.getElementById('portal');

document.getElementById('signupChoice').addEventListener('click',()=>{authChoice.classList.add('hidden');signupForm.classList.remove('hidden')});
document.getElementById('loginChoice').addEventListener('click',()=>{authChoice.classList.add('hidden');loginForm.classList.remove('hidden')});
document.getElementById('backToMain1').addEventListener('click',()=>{signupForm.classList.add('hidden');authChoice.classList.remove('hidden')});
document.getElementById('backToMain2').addEventListener('click',()=>{loginForm.classList.add('hidden');authChoice.classList.remove('hidden')});

document.getElementById('signupBtn').addEventListener('click',()=>{
  const n=document.getElementById('signupName').value;
  const e=document.getElementById('signupEmail').value;
  const p=document.getElementById('signupPassword').value;
  if(!n||!e||!p){alert("Please fill in all fields.");return;}
  alert("Account created successfully! Please log in.");
  signupForm.classList.add('hidden');
  authChoice.classList.remove('hidden');
});

document.getElementById('loginBtn').addEventListener('click',()=>{
  const s=document.getElementById('loginStudentNo').value;
  const e=document.getElementById('loginEmail').value;
  const p=document.getElementById('loginPassword').value;
  if(!s||!e||!p){alert("All fields are required.");return;}
  document.getElementById('auth-section').classList.add('hidden');
  portal.classList.remove('hidden');
  document.getElementById('studentName').textContent="Welcome, Student #"+s;
  document.getElementById('profileName').textContent="Student #"+s;
});

document.getElementById('logoutBtn').addEventListener('click',()=>{
  portal.classList.add('hidden');
  document.getElementById('auth-section').classList.remove('hidden');
  authChoice.classList.remove('hidden');
  loginForm.classList.add('hidden');
  signupForm.classList.add('hidden');
});

function showSection(id){
  document.querySelectorAll('.section').forEach(sec=>sec.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  document.querySelectorAll('.sidebar nav ul li').forEach(li=>li.classList.remove('active'));
  const c=[...document.querySelectorAll('.sidebar nav ul li')].find(li=>li.querySelector(`a[onclick*="${id}"]`));
  if(c)c.classList.add('active');
}

const themeBtn=document.getElementById('toggle-theme');
if(themeBtn){themeBtn.addEventListener('click',()=>{document.body.classList.toggle('dark');themeBtn.textContent=document.body.classList.contains('dark')?'☀️':'🌙';});}
