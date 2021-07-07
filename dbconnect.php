<?php
    $dbhost = "localhost";
    $dbuser = "root";
    $dbpass = "";
    $db = "nileOrders";
    $conn = new mysqli($dbhost, $dbuser, $dbpass, $db) or die("Unable to connect");
    echo "Connected successfully";
?>