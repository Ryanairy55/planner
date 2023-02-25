<?php
session_start();
$token = isset($_SESSION['delete_customer_token']) ? $_SESSION['delete_customer_token'] : "";

if ($token && $_POST['token'] === $token) {

    include("sql.php");

    $conn = new mysqli($servername, $username, $password, $database, $port);

    $sqlmax = 'SELECT MAX(categoryOrder) FROM category WHERE userId = 1';

    $result = mysqli_query($conn, $sqlmax);

    $row = mysqli_fetch_array($result);

    echo json_encode($row);

    if($row[0] == null){
        $max = 0;
    }else{
        $max = $row[0] + 1;
    }

    $sql = 'INSERT INTO category (userId, categoryName, categoryOrder) VALUES (1, "", '.$max.')';

    $result = mysqli_query($conn, $sql);

    mysqli_close($conn);
}
session_write_close();
?>
