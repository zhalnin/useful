<?php
/**
 * Created by JetBrains PhpStorm.
 * User: zhalnin
 * Date: 13/04/14
 * Time: 15:44
 * To change this template use File | Settings | File Templates.
 */

if( ( $_POST['mode'] == 'preview' ) && isset( $_POST['text'] ) ) {
//    echo "Добавим к БД";
//    echo "<br />";
//    echo "ok";
//    $text = html_entity_decode($_POST['text'], ENT_COMPAT, 'UTF-8');
    $text = $_POST['text'];
//    $text = preg_replace('|&nbsp;|','', $text);
//    $text2 = str_replace("&nbsp;",'',$text);
//    if( preg_match('|&nbsp;|',$text ) ) {
//        echo "yes";
//    } else {
//        echo "no";
//    }
    echo $text;


} elseif( $_POST['mode'] == 'submit' ) {
    echo "Добавим к БД";
    echo "<br />";
    echo "ok";
}

?>