<?php
$db_host =     "XXXXXXXXXXXXXXXXXXXX";
$db_user =     "XXXXXXXXXXXXXXXXXXXX";
$db_password = "XXXXXXXXXXXXXXXXXXXX";
$db_dbname =   "XXXXXXXXXXXXXXXXXXXX";

try {
    $db = new PDO("mysql:host=$db_host;dbname=$db_dbname", $db_user, $db_password);
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e){
    echo ("ERROR : ".$e->getMessage());
}
