<?php 

session_start();

if (!isset($_SESSION['username'])) {
    header("Location: index.php");
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome</title>
</head>
<body>
    <?php if($_SESSION['username']){
        header('Location: index.html?is_login=true' );
    } ?>
    <a href="logout.php">Logout</a>
</body>
</html>