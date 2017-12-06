<?php
require_once "../connect.php";

header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");

$statement=$db->prepare(
  "SELECT location FROM sensorData GROUP BY location"
);
$statement->execute();
$results=$statement->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($results);
?>
