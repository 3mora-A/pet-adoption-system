 <?php

// include('db.php');

// if ($_SERVER['REQUEST_METHOD'] == 'POST') {
//     $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);


//     $sql = "SELECT * FROM user WHERE email = :email";
//     $stmt = $pdo->prepare($sql);
//     $stmt->bindParam(':email', $email, PDO::PARAM_STR);
//     $stmt->execute();

//      $user = $stmt->fetch(PDO::FETCH_ASSOC);

//     if ($user) {
        
//         $token = bin2hex(random_bytes(50)); 

        
//         $sql = "INSERT INTO password_resets (email, token) VALUES (:email, :token)";
//         $stmt = $pdo->prepare($sql);
//         $stmt->bindParam(':email', $email, PDO::PARAM_STR);
//         $stmt->bindParam(':token', $token, PDO::PARAM_STR);
//         $stmt->execute();

//         $resetLink = "http://localhost/project/php/reset-password.php?token=$token";
//         mail($email, "Password Reset", "Click here to reset your password: $resetLink");

//         echo "<script>alert('A password reset link has been sent to your email.');</script>";
//     } else {
//         echo "<script>alert('Email address not found.');</script>";
//     }
// }
?> 