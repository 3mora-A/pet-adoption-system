<?php
$host = 'localhost';
$dbname = 'project';
$username = 'root';
$password = 'Amora@12';

// Create connection
$conn = new mysqli($host, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
