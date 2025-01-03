<?php

include('db.php'); 


session_start();


if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $old_password = $_POST['old_password'];
    $new_password = $_POST['new_password'];
    $confirm_password = $_POST['confirm_password'];

  
    if (empty($email) || empty($old_password) || empty($new_password) || empty($confirm_password)) {
        echo "<script>alert('Please fill all the fields.');</script>";
    } elseif ($new_password !== $confirm_password) {
        echo "<script>alert('New password and confirm password do not match.');</script>";
    } elseif (strlen($new_password) < 6) {  
        echo "<script>alert('New password must be at least 6 characters long.');</script>";
    } else {
        try {
            
            $query = "SELECT * FROM user WHERE email = :email";
            $stmt = $pdo->prepare($query);
            $stmt->execute(['email' => $email]);
            $user = $stmt->fetch();

            if ($user) {
                
                if (password_verify($old_password, $user['password'])) {
                    
                    $hashed_new_password = password_hash($new_password, PASSWORD_DEFAULT);

                    
                    $update_query = "UPDATE user SET password = :new_password WHERE email = :email";
                    $update_stmt = $pdo->prepare($update_query);
                    $update_stmt->execute(['new_password' => $hashed_new_password, 'email' => $email]);

                    
                    echo "<script>alert('Password reset successfully!');</script>";
                    echo "<script>window.location.href = 'change-password.php';</script>"; 
                } else {
                    echo "<script>alert('Old password is incorrect.');</script>";
                }
            } else {
                echo "<script>alert('Email not found.');</script>";
            }
        } catch (PDOException $e) {
            echo "<script>alert('Database error: " . $e->getMessage() . "');</script>";
        }
    }
}
?>




<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Password Reset</title>
  <style>
    :root {
      --blue: #007bff;
      --indigo: #6610f2;
      --purple: #6f42c1;
      --pink: #e83e8c;
      --red: #dc3545;
      --orange: #fd7e14;
      --yellow: #ffc107;
      --green: #28a745;
      --teal: #20c997;
      --cyan: #17a2b8;
      --white: #fff;
      --gray: #6c757d;
      --gray-dark: #343a40;
      --primary: var(--blue);
      --secondary: var(--gray);
      --success: var(--green);
      --info: var(--cyan);
      --warning: var(--yellow);
      --danger: var(--red);
      --light: #f8f9fa;
      --dark: var(--gray-dark);
      --font-family-sans-serif: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
      --font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Poppins', sans-serif;
    }

    body {
      background-color: var(--dark);
      color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      margin: 0;
      flex-direction: column;
    }

    .container {
      display: flex;
      flex-direction: row;
      width: 90%;
      max-width: 600px;
      background: #1E2029;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.5);
    }

    .right-section {
      flex: 1;
      padding: 40px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    h2 {
      font-size: 2rem;
      margin-bottom: 10px;
      color: #9B7AFF;
    }

    form {
      display: flex;
      flex-direction: column;
      gap: 20px;
      transition: all 0.5s ease-in-out;
    }

    input {
      background: #2E2F3E;
      border: none;
      padding: 12px 15px;
      border-radius: 8px;
      color: #fff;
      transition: all 0.3s ease;
      outline: none;
    }

    input:focus {
      box-shadow: 0 0 8px rgba(155, 122, 255, 0.8);
      background: #353746;
    }

    input::placeholder {
      color: #aaa;
    }

    button {
      background-color: #9B7AFF;
      border: none;
      padding: 12px;
      font-size: 1rem;
      color: #fff;
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.3s ease-in-out;
    }

    button:hover {
      background-color: #7f5fe8;
      box-shadow: 0 4px 12px rgba(155, 122, 255, 0.4);
      transform: scale(1.05);
    }

    .error, .success {
      color: #fff;
      padding: 10px;
      margin-bottom: 15px;
      border-radius: 5px;
    }

    .error {
      background-color: #dc3545;
    }

    .success {
      background-color: #28a745;
    }

    p.change-password {
      margin: 0px 0px 20px 0px;
    }

    .forgot-password-section h3 {
      color: #9B7AFF;
      margin-bottom: 20px;
      font-size: 2rem;
    }

    .forgot-password-section p {
      color: #bbb;
      font-size: 1rem;
      margin-bottom: 20px;
      margin-top: 20px;
    }

    .forgot-password-section a {
      color: #9B7AFF;
      font-weight: 500;
      text-decoration: none;
      transition: color 0.3s ease;
    }

    .forgot-password-section a:hover {
      color: #7f5fe8;
    }
  </style>
</head>
<body>

  <div class="container">
    <div class="right-section">
      <div class="forgot-password-section">
        <h3>Change Your Password</h3>

        
        <?php if (isset($error)): ?>
          <div class="error"><?= $error; ?></div>
        <?php elseif (isset($success)): ?>s
          <div class="success"><?= $success; ?></div>
        <?php endif; ?>

        <form action="change-password.php" method="POST">
          <input type="email" name="email" class="input" placeholder="Enter your email" required>
          <input type="password" name="old_password" class="input" placeholder="Enter your old password" required>
          <input type="password" name="new_password" class="input" placeholder="Enter your new password" required>
          <input type="password" name="confirm_password" class="input" placeholder="Confirm your new password" required>
          <button type="submit">Change Password</button>
        </form>

        <p class="change-password"><a href="http://localhost/web/sign-in.html#">Back to Login</a></p>
      </div>
    </div>
  </div>

</body>
</html>