<?php
/**
 * Created by JetBrains PhpStorm.
 * User: zhalnin
 * Date: 17.05.12
 * Time: 18:45
 * To change this template use File | Settings | File Templates.
 */
 
error_reporting(1);
//require_once('JSON.php');
 header('Content-Type: text/javascript');
$call = $_POST['callback'];
$d = $_POST['db'];
$sql = $_POST['sql'];
$title = $_POST['title'];
$author = $_POST['author'];
$content = $_POST['content'];
$date = $_POST['date'];

if($sql == 'INSERT INTO'){
    $res = "INSERT INTO $d VALUES('$title','$author','$content','$date')";
}

elseif($sql == 'SELECT * FROM'){
    $res = "SELECT * FROM $d";
    
}
else
{
    $res = $sql;
}

$d = preg_replace("[^a-zA-Z0-9_-]", "", $d);
if( $d == "") $d = "test";
$r = array();
if($sql){
    try {
        $db = sqlite_open("../../data/". $d . ".db");
        $q = sqlite_query($db, $res);
        if($q){
            while($row = sqlite_fetch_array($q)){
                array_push($r , $row);
            }
        } else {
            $err = sqlite_error_string($db);
        }
    } catch (SQLiteException $e ){
        $err = $e->getMessage();
    }
}
else {
    $err = "NO query provided.";
}
if($err)
{
    $r = array("error" => $err);
}
$jout = json_encode($r);

print $jout;
//print $call ? "$call($jout)" : $jout;
sqlite_close($db);
?>