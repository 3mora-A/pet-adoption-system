<?php

$host = 'localhost';
$dbname = 'project';
$username = 'root';
$password = 'Amora@12';

try {
    
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    
    
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
   
} catch (PDOException $e) {
    
    die("Database connection failed: " . $e->getMessage());
}
?>
