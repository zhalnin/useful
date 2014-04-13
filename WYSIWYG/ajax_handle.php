<?php
/**
 * Created by JetBrains PhpStorm.
 * User: zhalnin
 * Date: 13/04/14
 * Time: 15:44
 * To change this template use File | Settings | File Templates.
 */

if( isset( $_POST['text'] ) ) {
//    if( iconv_strlen( $_POST['text'], 'utf-8' ) < 10 ) {
//        echo "Мало текста";
//    } elseif( !preg_match('|[а-я]|iu', $_POST['text'] ) ) {
//        echo "А по-русски?";
//    } elseif(preg_match('|https?:|', $_POST['text'] ) ) {
//        echo "Обнаружена ссылка";
//    }else {
    echo "Добавим к БД";
    echo "<br />";
    echo "ok";
//    }
}

?>