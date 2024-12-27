<?php
// Include the db.php file for database connection
include('db.php'); 

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Collect the data from the form
    $first_name = $_POST['first_name'];
    $last_name = $_POST['last_name'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $confirm_password = $_POST['confirm_password'];
    $phone_number = $_POST['phone_number'];

    // Generate the username from the first and last name
    $username = strtolower($first_name . '_' . $last_name);  // Example: john.doe

    // Check if passwords match
    if ($password !== $confirm_password) {
        echo "<script>alert('Passwords do not match.');</script>";
    } else {
        // Hash the password
        $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

        // Insert data into the database
        $sql = "INSERT INTO user (username, first_name, last_name, email, password, phone_number) VALUES (?, ?, ?, ?, ?, ?)";
        $stmt = $pdo->prepare($sql);

        // Execute the query and insert the data
        if ($stmt->execute([$username, $first_name, $last_name, $email, $hashedPassword, $phone_number])) {
            echo "<script>alert('Account successfully created.');</script>";
            // Redirect to the login page
            header("Location: sign-in.html");
            exit();
        } else {
            echo "<script>alert('Error creating account.');</script>";
        }
    }
}

?>
