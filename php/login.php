<?php

include('db.php');


session_start();

if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $password = $_POST['password'];

    
    $sql = "SELECT * FROM user WHERE email = :email";
    $stmt = $pdo->prepare($sql);  

    
    $stmt->bindParam(':email', $email, PDO::PARAM_STR);

   
    $stmt->execute();

    
    $user = $stmt->fetch(PDO::FETCH_ASSOC);

    
    if ($user && password_verify($password, $user['password'])) {
       
        $_SESSION['user_id'] = $user['user_id'];
        $_SESSION['username'] = $user['username'];

        
        echo "<script>alert('Welcome, " . htmlspecialchars($user['username']) . "');</script>";
    } else {
        echo "<script>alert('Invalid email or password.');</script>";
    }
}
?>
