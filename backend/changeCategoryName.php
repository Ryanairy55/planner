<?php
session_start();
$token = isset($_SESSION['delete_customer_token']) ? $_SESSION['delete_customer_token'] : "";
if ($token && $_POST['token'] === $token) {
$categoryName = $_POST["categoryName"];
$categoryId = $_POST["categoryId"];

include("sql.php");

$conn = new mysqli($servername, $username, $password, $database, $port);

$sql = "UPDATE category SET categoryName = '".$categoryName."' WHERE categoryId = ".$categoryId;

$result = mysqli_query($conn, $sql);

mysqli_close($conn);
}
session_write_close();
?>
