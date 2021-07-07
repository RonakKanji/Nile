<?php 

$server = "localhost";
$user = "Ronak";
$pass = "dAOoCV6xxhNQSY0e";
$database = "login_register_pure_coding";

$conn = mysqli_connect($server, $user, $pass, $database);

if (!$conn) {
    die("<script>alert('Connection Failed.')</script>");
}

?>