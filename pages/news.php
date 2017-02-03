<?php
require_once '../include/conect.php'; // подключаем скрипт конфигурации подключения
$link = mysqli_connect($host, $user, $password, $database) //mysqli_connect подключается к бд
    or die("Ошибка " . mysqli_error($link));

mysqli_query($link, "SET NAMES utf8 COLLATE utf8_unicode_ci");
    
$query ="SELECT name, description, date, id FROM art"; // текст запроса
$result = mysqli_query($link, $query) or die("Ошибка " . mysqli_error($link)); //mysqli_query получает результаты запроса

$Page = $_GET['newspage'];

echo '<h1>Новости</h1>
<p href="#news/cat/">Страница: ',$Page,'</p>
<a class="curr" href="#news/1">Все</a>
<a href="#catmusic/1">Музыка</a>
<a href="#catblog/1">Блог</a>
<a href="#catdevelop/1">Разработка</a>
<a href="#cattexts/1">Стихи/Текста</a>
<hr>';

//if($result) {
//    $rows = mysqli_num_rows($result);//колличество строк в запросе
//    $numberInOnePage = 5;// колличество заголовков статей на страницу
//    $currentFirstArt = ($Page-1) * $numberInOnePage;
//    $maxNumberArt = $numberInOnePage * $Page;
//    
//    if ($maxNumberArt > $rows) {
//        $lastNumberArt = $rows;
//    } else {
//        $lastNumberArt = $numberInOnePage * $Page;
//    }
//    
//    for ($i = $currentFirstArt; $i < $lastNumberArt; ++$i){
//        mysqli_data_seek($result,$i);
//        $row = mysqli_fetch_row($result); // Колличество атрибутов
//        echo '<div class="art"><h2>', $row[0], '</h2><h3>',$row[2],'</h3>';
//        echo '<p>', $row[1],'</p>';
//        echo '<a href="#art/',$row[3],'">Читать подробнее...</a></div>';
//    }
//    echo '<div class="pagenav">Страница:';
//    for ($i = 1; $i < ($rows/5 + 1); $i++){
//        echo '<a href="#news/',$i,'">',$i,'</a>';
//    }
//    echo '</div>';
//}
// нормальный вывод

if($result) {
    $rows = mysqli_num_rows($result);//колличество строк в запросе
    $numberInOnePage = 5;// колличество заголовков статей на страницу
    $currentFirstArt = ($rows-1) - $numberInOnePage * ($Page-1);
    $maxNumberArt = $currentFirstArt - $numberInOnePage;
    
    if ($maxNumberArt < -1) {
        $maxNumberArt = -1;
    }

    for ($i = $currentFirstArt; $i > $maxNumberArt; $i--){
        mysqli_data_seek($result,$i);
        $row = mysqli_fetch_row($result); // Колличество атрибутов
        echo '<div class="art"><h2>', $row[0], '</h2><h3>',$row[2],'</h3>';
        echo '<p>', $row[1],'</p>';
        echo '<a href="#art/',$row[3],'">Читать подробнее...</a></div>';
    }
    echo '<div class="pagenav">Страница:';
    for ($i = 1; $i < ($rows/5 + 1); $i++){
        echo '<a href="#news/',$i,'">',$i,'</a>';
    }
    echo '</div>';
}
//обратный вывод
mysqli_close($link);
?>