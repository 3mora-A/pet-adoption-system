<?php
$host = 'localhost';
$dbname = 'project';
$username = 'root';
$password = 'Amora@12';


$conn = new mysqli($host, $username, $password, $dbname);


if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
