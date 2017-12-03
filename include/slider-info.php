<?php
include 'slider-info.class.php';
ini_set('display_errors', 1);
require_once '../include/conect.php';
$link = mysqli_connect($host, $user, $password, $database) //mysqli_connect подключается к бд
    or die("Ошибка " . mysqli_error($link));
mysqli_query($link, "SET NAMES utf8 COLLATE utf8_unicode_ci");
$query = "SELECT * FROM `sliderinfo` WHERE view = 1";
$result = mysqli_query($link, $query)
    or die("Ошибка " . mysqli_error($link));
$rows = mysqli_num_rows($result);
$fieldsCount = mysqli_num_fields($result);
$objectsToSend = [];

for ($i = 0; $i < $rows; $i++) {
    mysqli_data_seek($result, $i);
    $row = mysqli_fetch_row($result);
    $objectsToSend[$i] = new SliderInfo($row[1], $row[2], $row[3], $row[4]);
};
header('Content-type:application/json');
echo json_encode($objectsToSend,JSON_UNESCAPED_UNICODE);
mysqli_close($link);
?>