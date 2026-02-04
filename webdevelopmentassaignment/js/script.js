// -----------------------------
// Add to Cart Message
// -----------------------------
const buttons = document.querySelectorAll('.add-btn');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const msg = btn.closest('.product-card').querySelector('.success-msg');
    msg.textContent = "Added to cart!";
    msg.style.color = "green";

    setTimeout(() => msg.textContent = "", 1000);
  });
});

// -----------------------------
// Dark Mode Toggle with localStorage
// -----------------------------
const toggle = document.getElementById('dark-toggle');

if(localStorage.getItem('theme') === 'dark') {
  document.documentElement.classList.add('dark');
}

toggle.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark');
  localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
});

// -----------------------------
// Password Show/Hide Toggle
// -----------------------------
const togglePassword = document.getElementById('toggle-password');
const toggleConfirmPassword = document.getElementById('toggle-confirm-password');
const passwordInput = document.getElementById('password');
const confirmInput = document.getElementById('confirmPassword');

togglePassword.addEventListener('click', () => {
  const type = passwordInput.type === 'password' ? 'text' : 'password';
  passwordInput.type = type;
  togglePassword.textContent = type === 'password' ? 'Show' : 'Hide';
});

toggleConfirmPassword.addEventListener('click', () => {
  const type = confirmInput.type === 'password' ? 'text' : 'password';
  confirmInput.type = type;
  toggleConfirmPassword.textContent = type === 'password' ? 'Show' : 'Hide';
});

// -----------------------------
// Form Validation
// -----------------------------
const form = document.getElementById('registration-form');
const fullName = document.getElementById('fullName');
const email = document.getElementById('email');
const formSuccess = document.getElementById('form-success');

function showError(input, message) {
  const error = input.parentElement.querySelector('.error-msg');
  error.textContent = message;
  input.classList.add('border-red-500');
}

function clearError(input) {
  const error = input.parentElement.querySelector('.error-msg');
  error.textContent = '';
  input.classList.remove('border-red-500');
}

function validateEmail(emailValue) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(emailValue);
}

function validateInput() {
  let isValid = true;

  if(fullName.value.trim() === '') {
    showError(fullName, 'Full Name is required');
    isValid = false;
  } else clearError(fullName);

  if(email.value.trim() === '') {
    showError(email, 'Email is required');
    isValid = false;
  } else if(!validateEmail(email.value.trim())) {
    showError(email, 'Enter a valid email');
    isValid = false;
  } else clearError(email);

  if(passwordInput.value.length < 8) {
    showError(passwordInput, 'Password must be at least 8 characters');
    isValid = false;
  } else clearError(passwordInput);

  if(confirmInput.value !== passwordInput.value || confirmInput.value === '') {
    showError(confirmInput, 'Passwords do not match');
    isValid = false;
  } else clearError(confirmInput);

  return isValid;
}

// Validate on blur
[fullName, email, passwordInput, confirmInput].forEach(input => {
  input.addEventListener('blur', validateInput);
});

// Handle form submission
form.addEventListener('submit', (e) => {
  e.preventDefault();
  if(validateInput()) {
    form.reset();
    formSuccess.textContent = 'Registration Successful!';
    setTimeout(() => formSuccess.textContent = '', 3000);
  } else {
    formSuccess.textContent = '';
  }
});
