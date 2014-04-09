<?php
/**
 * Created by JetBrains PhpStorm.
 * User: zhalnin
 * Date: 04.06.12
 * Time: 10:02
 * To change this template use File | Settings | File Templates.
 */
 
$q = intval($_GET['q']);
$data = array('user'=>'bradly','name'=>'Bradly S');

foreach($data as $d => $dd)
{
    echo $d;
    echo "<br>";
    echo $dd['name'];
    echo "<br>";
}
//echo "<li>
//        <img src='icons/$row[user].jpg'
//        <div>
//            <strong>$row[user]</strong> ($row[name])
//        </div>
//      </li>";
?>