<?php

include('db.php');

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
   
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $password = $_POST['password'];

   
    $sql = "SELECT * FROM user WHERE email = ?";
    $stmt = $conn->prepare($sql);

   
    $stmt->bind_param('s', $email);
    $stmt->execute();

   
    $result = $stmt->get_result();
    $user = $result->fetch_assoc();

    if ($user && password_verify($password, $user['password'])) {
        
        echo "Welcome, " . $user['username'];
    } else {
        
        echo "Invalid email or password.";
    }
}
?>
