<?php
session_start();
$token = isset($_SESSION['delete_customer_token']) ? $_SESSION['delete_customer_token'] : "";
if ($token && $_POST['token'] === $token) {
$cardDescription = $_POST["cardDescription"];
$cardId = $_POST["cardId"];

include("sql.php");

$conn = new mysqli($servername, $username, $password, $database, $port);

$sql = "UPDATE cards SET thingDescription = '".$cardDescription."' WHERE thingId = ".$cardId;

$result = mysqli_query($conn, $sql);

mysqli_close($conn);
}
session_write_close();
?>
