<?php
// Include the db.php file for database connection
include('db.php');

// Check if the form is submitted
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Collect and sanitize the data from the form
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);

    // Check if the email exists in the database
    $sql = "SELECT * FROM user WHERE email = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param('s', $email);
    $stmt->execute();
    $result = $stmt->get_result();

    // If the user exists
    if ($result->num_rows > 0) {
        // Generate a unique token
        $token = bin2hex(random_bytes(50));

        // Here you would ideally send an email with the reset link containing the token
        // You can send the reset link to the email
        // For example: $reset_link = "http://localhost/reset-password-form.php?token=" . $token;

        // Inform the user that an email was sent
        echo "A password reset link has been sent to your email.";
    } else {
        // If email does not exist, display a message
        echo "Email address not found in our system.";
    }
}
?>