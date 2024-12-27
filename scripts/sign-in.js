function toggleForm() {
  document.getElementById('login-form').classList.toggle('hidden');
  document.getElementById('signup-form').classList.toggle('hidden');
  document.getElementById('forgot-password-form').classList.add('hidden');
}

function toggleForgotPasswordForm() {
  document.getElementById('login-form').classList.add('hidden');
  document.getElementById('forgot-password-form').classList.toggle('hidden');
}


document.querySelector('.forgot-password-section a').addEventListener('click', function(event) {
  event.preventDefault(); 
  document.getElementById('forgot-password-form').classList.add('hidden'); 
  document.getElementById('login-form').classList.remove('hidden'); 
});



function validateForm(event) {
  event.preventDefault(); 

  document.getElementById('alert').innerHTML = '';

 
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;
  const termsChecked = document.getElementById('terms').checked;

  
  let errorMessages = [];


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


  if (errorMessages.length > 0) {
    document.getElementById('alert').innerHTML = errorMessages.join('<br>');
    document.getElementById('alert').style.color = 'red';
    return false;
  }

  if (password !== confirmPassword) {
      document.getElementById('alert').innerHTML = 'Passwords do not match!';
      document.getElementById('alert').style.color = 'red';
      return false;
  }


  
  document.getElementById('alert').innerHTML = 'Account created successfully!';
  document.getElementById('alert').style.color = 'green';



  return true; 
}
