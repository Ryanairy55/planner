<?php
session_start();
$token = isset($_SESSION['delete_customer_token']) ? $_SESSION['delete_customer_token'] : "";

if ($token && $_POST['token'] === $token) {

    include("sql.php");

    $conn = new mysqli($servername, $username, $password, $database, $port);

    $cardId = $_POST['cardId'];

    $sql = 'DELETE FROM cards WHERE thingId = '.$cardId;

    $result = mysqli_query($conn, $sql);

    mysqli_close($conn);
}
session_write_close();
?>
