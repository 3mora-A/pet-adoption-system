<?php
// Include the db.php file for the database connection
include('db.php');  // Ensure this path is correct and points to db.php

// Check if the form is submitted
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Collect the data from the form
    $first_name = $_POST['first_name'];
    $last_name = $_POST['last_name'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $confirm_password = $_POST['confirm_password'];
    $phone_number = $_POST['phone_number'];

    // Generate the username from first and last names (lowercase)
    $username = strtolower($first_name . '_' . $last_name);

    // Check if passwords match
    if ($password !== $confirm_password) {
        echo "Passwords do not match.";
    } else {
        // Hash the password
        $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

        // Check if the email already exists in the database using mysqli
        $sql_check_email = "SELECT * FROM user WHERE email = ?";
        $stmt_check = $conn->prepare($sql_check_email);  // Use $conn for mysqli
        $stmt_check->bind_param('s', $email);  // Bind the email parameter
        $stmt_check->execute();
        $stmt_check->store_result();

        if ($stmt_check->num_rows > 0) {
            echo "Email is already taken.";
        } else {
            // Insert new user into the database using mysqli
            $sql = "INSERT INTO user (username, first_name, last_name, email, password, phone_number) 
                    VALUES (?, ?, ?, ?, ?, ?)";
            $stmt = $conn->prepare($sql);  // Use $conn for mysqli
            $stmt->bind_param('ssssss', $username, $first_name, $last_name, $email, $hashedPassword, $phone_number);

            // Execute the query and insert the data
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
