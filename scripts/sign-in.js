function toggleForm() {
  document.getElementById('login-form').classList.toggle('hidden');
  document.getElementById('signup-form').classList.toggle('hidden');
  document.getElementById('forgot-password-form').classList.add('hidden');
}

function toggleForgotPasswordForm() {
  document.getElementById('login-form').classList.add('hidden');
  document.getElementById('forgot-password-form').classList.toggle('hidden');
}

// Ensure the "Back to Login" link only hides the "Forgot Password" form and shows the "Login" form
document.querySelector('.forgot-password-section a').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent default link behavior (reload)
  document.getElementById('forgot-password-form').classList.add('hidden'); // Hide Forgot Password Form
  document.getElementById('login-form').classList.remove('hidden'); // Show Login Form
});



function validateForm(event) {
  event.preventDefault(); // Prevent form from submitting

  // Reset alert message
  document.getElementById('alert').innerHTML = '';

  // Get form values
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;
  const termsChecked = document.getElementById('terms').checked;

  // Initialize an array to store error messages
  let errorMessages = [];

  // Password Strength Conditions
  if (password.length < 8) {
    errorMessages.push('Password must be at least 8 characters long.');
  }
  if (!/[A-Z]/.test(password)) {
    errorMessages.push('Password must contain at least one uppercase letter.');
  }
  if (!/[a-z]/.test(password)) {
    errorMessages.push('Password must contain at least one lowercase letter.');
  }
  if (!/\d/.test(password)) {
    errorMessages.push('Password must contain at least one number.');
  }
  if (!/[@$!%*?&]/.test(password)) {
    errorMessages.push('Password must contain at least one special character (@, $, _).');
  }

  // If there are any password errors, display them
  if (errorMessages.length > 0) {
    document.getElementById('alert').innerHTML = errorMessages.join('<br>');
    document.getElementById('alert').style.color = 'red';
    return false;
  }

  // Check if passwords match
  if (password !== confirmPassword) {
      document.getElementById('alert').innerHTML = 'Passwords do not match!';
      document.getElementById('alert').style.color = 'red';
      return false;
  }


  // If all validations pass, you can proceed with form submission
  document.getElementById('alert').innerHTML = 'Account created successfully!';
  document.getElementById('alert').style.color = 'green';

  // Optionally, you can submit the form here if the validation is successful:
  // document.getElementById('signupForm').submit();

  return true; // Allow form submission
}
