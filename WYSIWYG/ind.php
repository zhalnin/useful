<?php
/**
 * Created by JetBrains PhpStorm.
 * User: zhalnin
 * Date: 13/04/14
 * Time: 15:44
 * To change this template use File | Settings | File Templates.
 */


?>
<!DOCTYPE html>
<html>
<head>
    <title>WYSIWYG текстовый редактор</title>
    <meta content="text/html ; charset=utf-8" http-equiv="Content-Type" />
    <link rel="stylesheet" href="wysiwyg.css">
    <script type="text/javascript" src="../AlezhalModules.js" ></script>
    <script type="text/javascript" src="wysiwyg.js"></script>
    <script type="text/javascript">

        //        AM.Event.addEvent()
    </script>
    <style>
        .mainIFrame {
            width: 800px;
            margin: 20px 40px;
        }
    </style>
</head>
<body onload="init();">





<div class="mainIFrame">
    <span class="defaultSkin">
        <table cellspacing="0" cellpadding="0" style="height: 312px;" class="mceLayout" >
            <tr class="mceFirst">
                <td style="height: 28px; bottom: 0;" class="mceToolbar mceLeft mceFirst mceLast">
                    <table cellspacing="0" cellpadding="0" class="mceToolbar">
                        <tr>
                            <td class="mceToolbarStart mceToolbarStartButton mceFirst"> </td>
                            <td><a href="#" id="bold" value="Жирный" class="mce_bold"><span class="mceIcon mce_bold">b</span></a></td>
                            <td><a href="#" id="italic" value="Курсив" class="mce_italic"><span class="mceIcon mce_italic">i</span></a></td>
                            <td><a href="#" id="underline" value="Подчеркнутый" class="mce_underline"><span class="mceIcon mce_underline">u</span></a></td>
                            <td><a href="#" id="strikethrough" value="Перечеркнутый" class="mce_strikethrough"><span class="mceIcon mce_strikethrough">s</span></a></td>
                            <td><a href="#" id="justifyleft" value="Выровнять влево" class="mce_justifyright"><span class="mceIcon mce_justifyright">l</span></a></td>
                            <td><a href="#" id="justifycenter" value="Выровнять по центру" class="mce_justifycenter"><span class="mceIcon mce_justifycenter">c</span></a></td>
                            <td><a href="#" id="justifyright" value="Выровнять вправо" class="mce_justifyright"><span class="mceIcon mce_justifyright">r</span></a></td>
                            <td><a href="#" id="image" value="Картинка" class="mce_image"><span class="mceIcon mce_image">im</span></a></td>
                            <td><a href="#" id="url" value="Ссылка" class="mce_link"><span class="mceIcon mce_link">ur</span></a></td>
                            <td style="padding-right: 2px;" class="mceToolbarEnd mceToolbarEndButton mceLast"></td>
                        </tr>
                    </table>
                </td>
            </tr>
            <tr class="mceIframe">
                <td class="mceIframeContainer mceFirst mceLast">
                    <div style="position: absolute; overflow: hidden; top: 0px; left: 0px; width: 100%; height: 269px;"></div>
                    <iframe id="iframe_redactor" style="width: 100%; height: 264px; position: relative;" ></iframe>
                </td>
            </tr>
            <tr class=" mceLast">
                <td style="border-bottom: 1px solid #CCCCCC;" class="mceStatusbar mceLast mceFirst">
                    <a class="resize" href="#"></a>
                </td>
            </tr>
        </table>
    </span>

    <div><input type="button" value="Пердпросмотр" onclick="addTextToBase()"></div>
    <p id="showmsg"></p>
</div>




</body>
</html>