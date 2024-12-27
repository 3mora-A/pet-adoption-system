<?php

include('db.php');


if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);

  
    $sql = "SELECT * FROM user WHERE email = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param('s', $email);
    $stmt->execute();
    $result = $stmt->get_result();

   
    if ($result->num_rows > 0) {
       
        $token = bin2hex(random_bytes(50));

        echo "A password reset link has been sent to your email.";
    } else {
        
        echo "Email address not found in our system.";
    }
}
?>