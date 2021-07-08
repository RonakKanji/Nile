
<?php 
	include "dbconnect.php";
	$order_id = $_GET['id'];
	$sql = "SELECT * FROM Orders";
	$result = $conn->query($sql);
	$order_details = NULL;

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
<!DOCTYPE html>
<html>
<head>
	<title>Payment</title>
	<link rel="stylesheet" type="text/css" href="paymentstyle.css">
</head>
<body>
<p class='user-box'>
		Dear <?php echo $order_details['name'] ?>, your item will be delivered to you on the following address:
		<?php echo $order_details['address'] ?> in 7 days. 
		Verify the OTP that you will recevie in your phone 
		<?php echo $order_details['phone_num'] ?> or by your email <?php echo $order_details['email'] ?>
	</p>
<div class="app-container">
	<div class="top-box">
	<p>PAYMENT</p>
	</div>
	<div class="middle-box">
		<h1><span> ₹</span><?php echo $order_details['total_money'] ?></h1>
		<p>Pay to NILE</p>
	</div>
	<button type="button" class="payment-btn">Pay with GPay</button>
	<button type="button" class="payment-btn">Pay with Netbanking</button>

	<div class="card-details">
	<p>Pay using Credit card or Debit Card</p>
	<div class="card-num-field-group">
		<label>Card Number</label><br>
		<input type="text" class="card-num-field" placeholder="xxxx-xxxx-xxxx">
	</div>
	<div class="data-field-group">
		<label>Expiry Date</label><br>
		<input type="text" class="data-field" placeholder="mm">
		<input type="text" class="data-field" placeholder="yyyy">

	</div>
		<div class="cvc-field-group">
		<label>CVC	</label><br>
		<input type="password" class="cvc-field" placeholder="xxx">
	</div>
		<div class="name-field-group">
		<label>Card Holder's Name</label><br>
		<input type="text" class="card-num-field" placeholder="Full Name">
		
	</div>
		<button type="button" class="pay-btn">Pay Now</button>
	</div>
</div>
</body>
</html>

