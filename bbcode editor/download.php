<?php
//scriptjava.net
//nagon.net
//bablogon.net
if(isset($_GET['file'])) {
//а тут можно подсчитать количество скачиваний файла
//и редиректнуть на сам файл
//даже если это будет картинка она нормально отобразится

//редиректим на картинку
//кстати это вам код который защищает от иньекций, можно и без него
//но я написал так на всякий случай
header('Location: '.str_replace("\r","",str_replace("\n","",str_replace('&amp;','&',htmlspecialchars($_GET['file'], ENT_QUOTES)))));
}
?>
