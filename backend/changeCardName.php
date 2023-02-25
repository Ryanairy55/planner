<?php
session_start();
$token = isset($_SESSION['delete_customer_token']) ? $_SESSION['delete_customer_token'] : "";
if ($token && $_POST['token'] === $token) {
$cardName = $_POST["cardName"];
$cardId = $_POST["cardId"];

include("sql.php");

$conn = new mysqli($servername, $username, $password, $database, $port);

$sql = "UPDATE cards SET thingName = '".$cardName."' WHERE thingId = ".$cardId;

$result = mysqli_query($conn, $sql);

mysqli_close($conn);
}
session_write_close();
?>
