<?php
    session_start();
    $token = isset($_SESSION['delete_customer_token']) ? $_SESSION['delete_customer_token'] : "";

    if ($token && $_POST['token'] === $token) {
        include("sql.php");

        $conn = new mysqli($servername, $username, $password, $database, $port);

        if($_POST['id'] == "*"){
        $sql = 'SELECT * FROM cards ORDER BY thingOrder ASC';
        $result = mysqli_query($conn, $sql);
        $emparray = array();
        while ($row = mysqli_fetch_assoc($result)) {
            $emparray[] = $row;
        }
        echo json_encode($emparray);
        }else{
        $sql = 'SELECT * FROM cards WHERE thingId = '.$_POST["id"].'';
        $result = mysqli_query($conn, $sql);
        $emparray = array();
        while ($row = mysqli_fetch_assoc($result)) {
            $emparray[] = $row;
        }
        echo json_encode($emparray);
        }
        mysqli_close($conn);
    }
    session_write_close();
?>
