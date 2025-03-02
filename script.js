// Simulated user session
let isLoggedIn = false;

// DOM Elements
const loginBtn = document.getElementById('login-btn');
const logoutBtn = document.getElementById('logout-btn');
const passwordSaver = document.getElementById('password-saver');
const siteNameInput = document.getElementById('site-name');
const sitePasswordInput = document.getElementById('site-password');
const savePasswordBtn = document.getElementById('save-password');
const savedPasswordsList = document.getElementById('saved-passwords');

// Event Listeners
loginBtn.addEventListener('click', () => {
  isLoggedIn = true;
  loginBtn.style.display = 'none';
  logoutBtn.style.display = 'inline-block';
  passwordSaver.style.display = 'block';
});

logoutBtn.addEventListener('click', () => {
  isLoggedIn = false;
  loginBtn.style.display = 'inline-block';
  logoutBtn.style.display = 'none';
  passwordSaver.style.display = 'none';
});

savePasswordBtn.addEventListener('click', () => {
  const siteName = siteNameInput.value;
  const sitePassword = sitePasswordInput.value;

  if (siteName && sitePassword) {
    const listItem = document.createElement('li');
    listItem.textContent = `${siteName}: ${sitePassword}`;
    savedPasswordsList.appendChild(listItem);

    // Clear inputs
    siteNameInput.value = '';
    sitePasswordInput.value = '';
  } else {
    alert('Please enter both site name and password.');
  }
});
