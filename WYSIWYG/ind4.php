<?php
/**
 * Created by JetBrains PhpStorm.
 * User: zhalnin
 * Date: 28/04/14
 * Time: 22:22
 * To change this template use File | Settings | File Templates.
 */
$text = "IMEI : 012265007370518
Unlock code :&nbsp;  IMEI: 012265007370518Serial: 5K0471U33NSModel: IPHONE 3GS,32GB,WHITEMAC: ICCID: 8944110064890613726iOS Version: 6.1.6Activation Status: YesUnbricked: trueUnlocked: falseFirst Unbricked Date: 2011-01-05Last Unbricked Date: 2011-01-05Initial Activation Policy: 55 - EMEA Service.Applied Activation Policy: 55 - EMEA Service.Next Tether Policy (Carrier): 269 - UK O2 Tesco.Sim Lock: Locked
Orders details
Order ID : 19441
Service Name :  iPhone Operator/Network Check
Credit : 0.4";

echo $text;
echo "<br />";
echo strip_tags($text);
echo "<br />";
echo html_entity_decode($text, ENT_COMPAT, 'UTF-8');
echo "<br />";
echo str_replace('&nbsp;', '', $text);
?>