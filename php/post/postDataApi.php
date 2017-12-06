<?php
require_once "../connect.php";

header('Content-Type: application:json');
header("Access-Control-Allow-Origin: *");

$phpjsonstring = file_get_contents('php://input');
$data = json_decode($phpjsonstring, true);
$statement = $db->prepare(
    "INSERT INTO sensorData()
    VALUES(
      :location,
      :temp,
      :humidity,
      :movement,
      :photoVal,
      :ppm,
      :messageReceived)"
    );
$statement->execute(array(
    "location" => $data["location"],
    "temp" => $data["temp"],
    "humidity" => $data["humidity"],
    "movement" => $data["movement"],
    "photoVal" => $data["photoVal"],
    "ppm" => $data["ppm"],
    "messageReceived" => date("Y-m-d H:i:s")
));
?>
