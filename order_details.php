<?php 
    include "dbconnect.php";

    // $sql = "CREATE TABLE Orders (
    //     order_id INTEGER PRIMARY KEY AUTO_INCREMENT,
    //     name VARCHAR(30) NOT NULL,
    //     total_money INTEGER NOT NULL,
    //     address VARCHAR(150) NOT NULL,
    //     pincode INTEGER NOT NULL,
    //     phone_num BIGINT NOT NULL,
    //     email VARCHAR(50)
    //     )";

    // if(mysqli_query($conn, $sql)){
    //     echo "<br>Table Orders created successfully";
    // }
    // else{
    //     echo "Error: ". mysqli_error($conn);
    // }
    // mysqli_close($conn);
    
    $total_money = (int)$_POST["total_price"];
    $name = $_POST["name"];
    $address = $_POST["address"];
    $pincode = $_POST["pin_code"];
    $phone_num = $_POST["phone"];
    $email = $_POST["email"];
    $sql = "INSERT INTO Orders(name, total_money, address, pincode, phone_num, email) Values
            ('" .  $name . "' ," . $total_money .  ", '" .  $address . "' , ". $pincode . ", " . $phone_num . ", '" . $email . "')";
    if(mysqli_query($conn, $sql)){
      echo $total_money;
		echo "<br>New record inserted";
	}
	else{
		echo "Error: ". mysqli_error($conn);
    }
    

    $sql = "SELECT * FROM Orders";
    $result = $conn->query($sql);
    $order_id = 0;
    if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        if($name == $row['name']){
            $order_id =  $row["order_id"];
        }
    }
    } else {
    echo "0 results";
    }
    header('Location: payment.php?id='.$order_id );
?>