<?php
// Include the db.php file for database connection
include('db.php'); // Make sure the path to db.php is correct

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Collect and sanitize the data from the form
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $password = $_POST['password'];

    // Prepare the SQL query to fetch the user by email
    $sql = "SELECT * FROM user WHERE email = ?";
    $stmt = $conn->prepare($sql);

    // Bind the email parameter and execute the query
    $stmt->bind_param('s', $email);
    $stmt->execute();

    // Get the result and fetch user data
    $result = $stmt->get_result();
    $user = $result->fetch_assoc();

    if ($user && password_verify($password, $user['password'])) {
        // Login success
        echo "Welcome, " . $user['username'];
    } else {
        // Invalid credentials
        echo "Invalid email or password.";
    }
}
?>
