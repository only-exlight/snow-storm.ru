<?php
require_once '../include/conect.php'; // подключаем скрипт
$link = mysqli_connect($host, $user, $password, $database) //mysqli_connect подключается к бд
    or die("Ошибка " . mysqli_error($link));
mysqli_query($link, "SET NAMES utf8 COLLATE utf8_unicode_ci");

$art_id = $_GET["art_id"];
$query ="SELECT name, content, views FROM art WHERE id = " . $art_id; // текст запроса

$result = mysqli_query($link, $query) or die("Ошибка " . mysqli_error($link)); //mysqli_query получает результаты запроса
$rows = mysqli_num_rows($result);
$row = mysqli_fetch_row($result);
$inkViews = $row[2]+1;

$ink_views = "UPDATE art SET views = " . $inkViews . " WHERE id = " . $art_id;
mysqli_query($link, $ink_views) or die("Ошибка " . mysqli_error($link));
    
if ($result){
    if($rows == 0){
        echo "<h1>ОШИБКА! Такой статьи не существует!</h1>";
    } else {
        echo '<h1>',$row[0],'</h1><hr>';
        echo '<div class="cont"><p class="article">',$row[1],'</p></div>
        <div class="views"><p>Просмотров: ',$row[2],'</p></div></div>';
    }
};
mysqli_close($link);
?>