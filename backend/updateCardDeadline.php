<?php
session_start();
$token = isset($_SESSION['delete_customer_token']) ? $_SESSION['delete_customer_token'] : "";
if ($token && $_POST['token'] === $token) {
    $deadlineChange = $_POST["deadlineChange"];
    $now = date_format(new DateTime(date("Y-m-d H:i")), 'Y-m-d H:i');
    $id = $_POST["cardIdCustomize"];
    include("sql.php");
    $conn = new mysqli($servername, $username, $password, $database, $port);
    if(isset($_POST["changeNeedsToBeDoneTime"]) && isset($_POST["changeNeedsToBeDone"])){
    $ntbdt = $_POST["changeNeedsToBeDoneTime"];
    $ntbdd = $_POST["changeNeedsToBeDone"];
    $needsToBeDone = date_format(date_create($ntbdd." ".$ntbdt), 'Y-m-d H:i:s');
    $sql = "UPDATE cards SET deadline = 1, momentNeedsToBeDone = '".$needsToBeDone."' WHERE thingId = ".$id;
    $result = mysqli_query($conn, $sql);
    }else{
    $sql = "UPDATE cards SET deadline = 0 WHERE thingId = ".$id;
    $result = mysqli_query($conn, $sql);
    }
    mysqli_close($conn);
}
session_write_close();
?>
