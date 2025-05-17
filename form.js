// Handle both login and signup functionality
document.addEventListener('DOMContentLoaded', function () {
  const path = window.location.pathname;

  if (path.includes('login.html')) {
    document.getElementById('loginForm').addEventListener('submit', handleLogin);
  } else if (path.includes('signup.html')) {
    document.getElementById('signupForm').addEventListener('submit', handleSignup);
  }
});

// Handle login
function handleLogin(event) {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  fetch('http://localhost:5000/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  })
    .then(response => response.json().then(data => ({ status: response.status, data })))
    .then(({ status, data }) => {
      if (status === 200) {
        alert('Login successful!');
        localStorage.setItem('token', data.token); // optional
        window.location.href = '/project.html';
      } else {
        alert(data.message || 'Invalid login credentials');
      }
    })
    .catch(err => {
      console.error('Login error:', err);
      alert('An error occurred. Please try again.');
    });
}

// Handle signup
function handleSignup(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  fetch('http://localhost:5000/api/auth/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, email, password })
  })
    .then(response => response.json().then(data => ({ status: response.status, data })))
    .then(({ status, data }) => {
      if (status === 201) {
        alert('Signup successful! Please log in.');
        window.location.href = '/login.html';
      } else {
        alert('Signup failed: ' + (data.message || 'Unknown error'));
      }
    })
    .catch(err => {
      console.error('Signup error:', err);
      alert('An error occurred. Please try again.');
    });
}
