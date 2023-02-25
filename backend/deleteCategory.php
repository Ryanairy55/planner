<?php
session_start();
$token = isset($_SESSION['delete_customer_token']) ? $_SESSION['delete_customer_token'] : "";

if ($token && $_POST['token'] === $token) {

    include("sql.php");

    $conn = new mysqli($servername, $username, $password, $database, $port);

    $categoryId = $_POST['categoryId'];

    $sql = 'DELETE FROM category WHERE categoryId = '.$categoryId;

    $result = mysqli_query($conn, $sql);

    $sql = 'DELETE FROM cards WHERE categoryId = '.$categoryId;

    $result = mysqli_query($conn, $sql);

    mysqli_close($conn);
}
session_write_close();
?>
