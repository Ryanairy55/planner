<?php
session_start();
$token = isset($_SESSION['delete_customer_token']) ? $_SESSION['delete_customer_token'] : "";
if ($token && $_POST['token'] === $token) {
$data = json_decode($_POST["array"]);

include("sql.php");

$conn = new mysqli($servername, $username, $password, $database, $port);

for($i = 0; $i < count($data); $i++){
  $categoryId = $data[$i]->id;
  $categoryOrder = $data[$i]->categoryOrder;
  $sql = "UPDATE category SET categoryOrder = '".$categoryOrder."' WHERE categoryId = ".$categoryId;
  $result = mysqli_query($conn, $sql);
  for($a = 0; $a < count($data[$i]->cards); $a++){
    $thingId = $data[$i]->cards[$a]->thingId;
    $thingOrder = $data[$i]->cards[$a]->thingOrder;
    $thingCategory = $data[$i]->cards[$a]->thingCategory;
    $sql = "UPDATE cards SET thingOrder = '".$thingOrder."', categoryId = '".$thingCategory."' WHERE thingId = ".$thingId;
    $result = mysqli_query($conn, $sql);
  }
}

mysqli_close($conn);
}
session_write_close();
?>
