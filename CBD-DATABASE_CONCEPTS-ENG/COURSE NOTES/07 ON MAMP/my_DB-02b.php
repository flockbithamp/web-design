<!DOCTYPE html>
<html>
<head>
<title> Retrive data</title>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.js"></script>
</head>
<body>

<?php
$db = new mysqli('localhost', 'root', 'root', 'My_test_DB');


if ($db->connect_error) {
	die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT title, author, year FROM library ORDER BY year";
$result = mysqli_query($db, $sql);

} else {
	echo "0 results";
}

$db->close();
?>




</body>
</html>