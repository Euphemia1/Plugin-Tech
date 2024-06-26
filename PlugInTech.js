const loginBtn = document.getElementById('login-btn');
loginBtn.addEventListener('click', () => {
  window.location.href = 'Home.html';
});

// Select the form element
const form = document.querySelector('form');

// Add an event listener to the form
form.addEventListener('submit', (e) => {
  // Prevent the default form submission behavior
  e.preventDefault();

  // Get the input values
  const name = document.querySelector('input[name="name"]').value;
  const email = document.querySelector('input[name="email"]').value;
  const password = document.querySelector('input[name="password"]').value;

  // Validate the input values
  if (name && email && password) {
    // Login the user
    login(name, email, password);
  } else {
    // Display an error message
    alert('Please fill in all fields');
  }
});

// Login function
function login(name, email, password) {
  // Make a request to the login API
  fetch('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name,
      email,
      password
    })
  })
  .then((response) => response.json())
  .then((data) => {
    // Login successful, redirect to dashboard
    window.location.href = '/dashboard';
  })
  .catch((error) => {
    // Display an error message
    alert('Invalid credentials');
  });
}