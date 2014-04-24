<?php
/**
 * Created by JetBrains PhpStorm.
 * User: zhalnin
 * Date: 13/04/14
 * Time: 15:44
 * To change this template use File | Settings | File Templates.
 */


function nameServer( $dir ) {
    $name = $_SERVER['SERVER_NAME'];
    if( stripos( $name, 'www' ) === 0 ) {
        $name = substr_replace( $name, '', 0, 4 );
    }
    if( ! empty( $_SERVER['SERVER_PORT'] ) ) {
        $port = ':'.$_SERVER['SERVER_PORT'];
    } else {
        $port = '';
    }
    $path = $_SERVER['PHP_SELF'];
    preg_match('|(.*)(?:\/.*\.php)|i', $path, $ar);
return $name.$port.$ar[1].$dir;
}

$dir = "/files/guestbook/";
//$name = nameServer();
//if( ! empty( $_SERVER['SERVER_PORT'] ) ) {
//    $port = ':'.$_SERVER['SERVER_PORT'];
//} else {
//    $port = '';
//}
//
//$path = $_SERVER['PHP_SELF'];
//echo $name.$port.$path;
//echo "<tt><pre>".print_r($_SERVER, true)."</pre></tt>";

//preg_match('|(?<=\/)[a-z0-9]+|i', $path, $ar);

 echo nameServer( $dir );
?>
