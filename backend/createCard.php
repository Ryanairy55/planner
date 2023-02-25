<?php
session_start();
$token = isset($_SESSION['delete_customer_token']) ? $_SESSION['delete_customer_token'] : "";

if ($token && $_POST['token'] === $token) {

    include("sql.php");

    $conn = new mysqli($servername, $username, $password, $database, $port);

    $categoryId = $_POST['categoryId'];
    $ntbdd = $_POST['ntbdd'];
    $ntbdt = $_POST['ntbdt'];
    $forcategory = $_POST['categoryId'];
    $name = $_POST['thingName'];
    $now = date_format(new DateTime(date("Y-m-d H:i")), 'Y-m-d H:i');
    if(isset($_POST['deadlineCreate'])){
        $deadline = 1;
        $needsToBeDone = date_format(new DateTime(date("Y-m-d H:i")), $ntbdd." ".$ntbdt);
    }else{
        $deadline = 0;
        $needsToBeDone = date_format(new DateTime(date("Y-m-d H:i")), 'Y-m-d H:i');
    }


    $sqlmax = 'SELECT MAX(thingOrder) FROM cards WHERE userId = 1';

    $result = mysqli_query($conn, $sqlmax);

    $row = mysqli_fetch_array($result);
    if($row[0] == null){
        $max = 0;
    }else{
        $max = $row[0] + 1;
    }
    if($now<$needsToBeDone && $deadline == 1 || $deadline == 0){
        $sql = 'INSERT INTO cards (userId, categoryId, thingName, thingDescription, thingOrder, momentNeedsToBeDone, momentCreated, deadline) VALUES (1, "'.$forcategory.'", "'.$name.'", "", '.$max.', "'.$needsToBeDone.'", "'.$now.'", '.$deadline.')';
        $result = mysqli_query($conn, $sql);
    }
    mysqli_close($conn);
}
session_write_close();
?>
