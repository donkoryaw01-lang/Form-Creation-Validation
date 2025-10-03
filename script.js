// Wait until HTML is fully loaded
document.addEventListener('DOMContentLoaded', () => {

  // Select the form and feedback div
  const form = document.getElementById('registration-form');
  const feedbackDiv = document.getElementById('form-feedback');

  // Listen for form submit
  form.addEventListener('submit', (event) => {
    event.preventDefault(); // stop page reload

    // Get and trim inputs
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    // Validation
    let isValid = true;
    let messages = [];

    // Username check
    if (username.length < 3) {
      isValid = false;
      messages.push('Username must be at least 3 characters long.');
    }

    // Email check (basic)
    if (!email.includes('@') || !email.includes('.')) {
      isValid = false;
      messages.push('Email must contain "@" and "."');
    }

    // Password check
    if (password.length < 8) {
      isValid = false;
      messages.push('Password must be at least 8 characters long.');
    }

    // Show feedback
    feedbackDiv.style.display = 'block';

    if (isValid) {
      feedbackDiv.textContent = 'Registration successful!';
      feedbackDiv.style.color = '#28a745'; // green
      feedbackDiv.style.backgroundColor = '#d4edda';
    } else {
      feedbackDiv.innerHTML = messages.join('<br>');
      feedbackDiv.style.color = '#dc3545'; // red
      feedbackDiv.style.backgroundColor = '#f8d7da';
    }
  });
});
