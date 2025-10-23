const authChoice=document.getElementById('authChoice');
const signupForm=document.getElementById('signupForm');
const loginForm=document.getElementById('loginForm');
const portal=document.getElementById('portal');

document.getElementById('signupChoice').onclick=()=>{authChoice.classList.add('hidden');signupForm.classList.remove('hidden')};
document.getElementById('loginChoice').onclick=()=>{authChoice.classList.add('hidden');loginForm.classList.remove('hidden')};
document.getElementById('backToMain1').onclick=()=>{signupForm.classList.add('hidden');authChoice.classList.remove('hidden')};
document.getElementById('backToMain2').onclick=()=>{loginForm.classList.add('hidden');authChoice.classList.remove('hidden')};

document.getElementById('signupBtn').onclick=()=>{
  const n=document.getElementById('signupName').value,e=document.getElementById('signupEmail').value,p=document.getElementById('signupPassword').value;
  if(!n||!e||!p){alert("Please fill in all fields.");return;}
  alert("Account created! You can now log in.");signupForm.classList.add('hidden');authChoice.classList.remove('hidden');
};

document.getElementById('loginBtn').onclick=()=>{
  const s=document.getElementById('loginStudentNo').value,e=document.getElementById('loginEmail').value,p=document.getElementById('loginPassword').value;
  if(!s||!e||!p){alert("All fields required.");return;}
  document.getElementById('auth-section').classList.add('hidden');portal.classList.remove('hidden');
  document.getElementById('studentName').textContent="Welcome, Student #"+s;
  document.getElementById('profileName').textContent="Student #"+s;
};

document.getElementById('logoutBtn').onclick=()=>{
  portal.classList.add('hidden');
  document.getElementById('auth-section').classList.remove('hidden');
  authChoice.classList.remove('hidden');
  loginForm.classList.add('hidden');
  signupForm.classList.add('hidden');
};

function showSection(id){
  document.querySelectorAll('.section').forEach(sec=>sec.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  document.querySelectorAll('.sidebar nav ul li').forEach(li=>li.classList.remove('active'));
  const c=[...document.querySelectorAll('.sidebar nav ul li')].find(li=>li.querySelector(`a[onclick*="${id}"]`));
  if(c)c.classList.add('active');
}

const themeBtn=document.getElementById('toggle-theme');
if(themeBtn)themeBtn.onclick=()=>{document.body.classList.toggle('dark');themeBtn.textContent=document.body.classList.contains('dark')?'☀️':'🌙';};

// Slideshow logic
const images=[
  "https://images.unsplash.com/photo-1581091215367-59ab6b6b76a9?auto=format&fit=crop&w=1000&q=60",
  "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1000&q=60",
  "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=60"
];
let index=0;
const announcementImage=document.getElementById('announcementImage');
setInterval(()=>{
  index=(index+1)%images.length;
  announcementImage.style.opacity=0;
  setTimeout(()=>{
    announcementImage.src=images[index];
    announcementImage.style.opacity=1;
  },500);
},4000);
