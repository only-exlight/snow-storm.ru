<?php
require_once '../include/conect.php';
$link = mysqli_connect($host, $user, $password, $database) //mysqli_connect подключается к бд
    or die("Ошибка " . mysqli_error($link));

$id = $_GET['id'];

$query = "SELECT img FROM photo WHERE id=".$id;
$result = mysqli_query($link, $query);

if ($result) {
    $row = mysqli_fetch_row($result);
    header("Content-type: image/*");
    echo $row[0];
}

mysqli_close($link);
/*if ( isset( $_GET['id'] ) ) {
  // Здесь $id номер изображения
  $id = (int)$_GET['id'];
  if ( $id > 0 ) {
    $query = "SELECT img FROM photo WHERE id=".$id;
    // Выполняем запрос и получаем файл
    $result = mysqli_query($link, $query) or die("Ошибка " . mysqli_error($link));
    if ( mysql_num_rows( $result ) == 1 ) {
      $image = mysql_fetch_array($result);
      // Отсылаем браузеру заголовок, сообщающий о том, что сейчас будет передаваться файл изображения
      header("Content-type: image/*");
      // И  передаем сам файл
      echo $image['img'];
    }
  }
}*/
?>