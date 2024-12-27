<?php
// Include the db.php file for database connection
include('db.php');

// Write the SQL query to select all data from the 'user' table
$sql = "SELECT * FROM user";

// Execute the query
$result = $conn->query($sql);

// Check if there are any rows returned
if ($result->num_rows > 0) {
    // Display data in a table
    echo "<table border='1'>
            <tr>
                <th>User ID</th>
                <th>Username</th>
                <th>Email</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Phone Number</th>
            </tr>";
    
    // Output data of each row
    while ($row = $result->fetch_assoc()) {
        echo "<tr>
                <td>" . $row['user_id'] . "</td>
                <td>" . htmlspecialchars($row['username']) . "</td>
                <td>" . htmlspecialchars($row['email']) . "</td>
                <td>" . htmlspecialchars($row['first_name']) . "</td>
                <td>" . htmlspecialchars($row['last_name']) . "</td>
                <td>" . htmlspecialchars($row['phone_number']) . "</td>
              </tr>";
    }
    echo "</table>";
} else {
    echo "No records found.";
}

// Close the database connection
$conn->close();
?>
