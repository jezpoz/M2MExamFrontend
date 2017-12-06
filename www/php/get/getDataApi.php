<?php
require_once "../connect.php";

header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");

$location = $_GET['location'];
$statement=$db->prepare(
  "SELECT * FROM sensorData WHERE location = :location"
);
$statement->bindParam(
  ":location",
  $location,
  PDO::PARAM_STR
);
$statement->execute();
$results=$statement->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($results);
?>
