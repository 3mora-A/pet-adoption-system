<?php

include('db.php'); 


$sql = "SELECT * FROM user";


$stmt = $pdo->prepare($sql); 


$stmt->execute();


if ($stmt->rowCount() > 0) {
   

    echo "<table border='1'>
            <tr>
                <th>User ID</th>
                <th>Username</th>
                <th>Email</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Phone Number</th>
            </tr>";
    
  
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        echo "<tr>
                <td>" . htmlspecialchars($row['user_id']) . "</td>
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


$pdo = null;
?>
