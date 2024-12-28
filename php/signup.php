<?php
include('db.php'); 

if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    
    $first_name = $_POST['first_name'];
    $last_name = $_POST['last_name'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $confirm_password = $_POST['confirm_password'];
    $phone_number = $_POST['phone_number'];

   
    $username = strtolower($first_name . '_' . $last_name);

   
    if ($password !== $confirm_password) {
        echo "<script>alert('Passwords do not match.');</script>";
    } else {

       
        $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

        $sql_check_email = "SELECT * FROM user WHERE email = :email";
        $stmt_check = $pdo->prepare($sql_check_email); 
        $stmt_check->bindParam(':email', $email, PDO::PARAM_STR);
        $stmt_check->execute();

        if ($stmt_check->rowCount() > 0) {
            echo "<script>alert('Email is already taken.');</script>";
        } else {

            
            $sql = "INSERT INTO user (username, first_name, last_name, email, password, phone_number) 
                    VALUES (:username, :first_name, :last_name, :email, :password, :phone_number)";
            $stmt = $pdo->prepare($sql); 

            
            $stmt->bindParam(':username', $username, PDO::PARAM_STR);
            $stmt->bindParam(':first_name', $first_name, PDO::PARAM_STR);
            $stmt->bindParam(':last_name', $last_name, PDO::PARAM_STR);
            $stmt->bindParam(':email', $email, PDO::PARAM_STR);
            $stmt->bindParam(':password', $hashedPassword, PDO::PARAM_STR);
            $stmt->bindParam(':phone_number', $phone_number, PDO::PARAM_STR);

            
            if ($stmt->execute()) {
                echo "<script>alert('Account successfully created.');</script>";
            } else {
                echo "<script>alert('Error creating account.');</script>";
            }
        }
    }
}
?>
