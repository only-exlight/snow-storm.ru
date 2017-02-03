<?php

require_once '../include/conect.php';
$link = mysqli_connect($host, $user, $password, $database) //mysqli_connect подключается к бд
    or die("Ошибка " . mysqli_error($link));

mysqli_query($link, "SET NAMES utf8 COLLATE utf8_unicode_ci");

$query ="SELECT link,description FROM video_link";

echo '<h1>Видео</h1><hr>';
$result = mysqli_query($link, $query) or die("Ошибка " . mysqli_error($link)); //mysqli_query получает результаты запроса
if ($result) {
    $rows = mysqli_num_rows($result);
    for ($i = 0; $i < $rows; ++$i){
        $row = mysqli_fetch_row($result);
        echo '<div class="videowrap col"><div class="video"><iframe class="vframe"  src="',$row[0],'" frameborder="0" allowfullscreen></iframe></div></div>';
    };
};