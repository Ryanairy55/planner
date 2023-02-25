<?php
session_start();
$token = isset($_SESSION['delete_customer_token']) ? $_SESSION['delete_customer_token'] : "";

if ($token && $_POST['token'] === $token) {
    include("sql.php");

    $conn = new mysqli($servername, $username, $password, $database, $port);

    $sql = 'SELECT * FROM category ORDER BY categoryOrder ASC';

    $result = mysqli_query($conn, $sql);

    $emparray = array();

    while ($row = mysqli_fetch_assoc($result)) {
        $emparray[] = $row;
    }
    echo json_encode($emparray);
    mysqli_close($conn);
}
session_write_close();
?>
