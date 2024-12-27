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
        echo "Passwords do not match.";
    } else {
        
        $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

        
        $sql_check_email = "SELECT * FROM user WHERE email = ?";
        $stmt_check = $conn->prepare($sql_check_email); 
        $stmt_check->bind_param('s', $email);  
        $stmt_check->execute();
        $stmt_check->store_result();

        if ($stmt_check->num_rows > 0) {
            echo "Email is already taken.";
        } else {
           
            $sql = "INSERT INTO user (username, first_name, last_name, email, password, phone_number) 
                    VALUES (?, ?, ?, ?, ?, ?)";
            $stmt = $conn->prepare($sql);  
            $stmt->bind_param('ssssss', $username, $first_name, $last_name, $email, $hashedPassword, $phone_number);

            
            if ($stmt->execute()) {
                echo "Account successfully created.";
                
                exit();
            } else {
                echo "Error creating account.";
            }
        }
    }
}
?>
