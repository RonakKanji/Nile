<?php 
    include "dbconnect.php";
    $order_id = $_GET['id'];
    $sql = "SELECT * FROM Orders";
    $result = $conn->query($sql);
    $order_details = NULL

    if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        if($order_id == $row['order_id']){
            $order_details = $row;
            
        }
    }
    } else {
    echo "0 results";
    }
?>