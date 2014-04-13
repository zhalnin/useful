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
    <link rel="stylesheet" href="style.css">
    <script type="text/javascript" src="../AlezhalModules.js" ></script>
    <script type="text/javascript" src="wysiwyg.js"></script>
    <script type="text/javascript">

        //        AM.Event.addEvent()
    </script>
    <style>
        .mainIFrame {
            width: 50%;
            margin: 20px auto;
        }
    </style>
</head>
<body onload="init();">





<div class="mainIFrame">
    <span class="defaultSkin">
        <table cellspacing="0" cellpadding="0" style="height: 300px;" class="mceLayout" >
            <tr class="mceFirst">
                <td style="height: 28px; bottom: 0;" class="mceToolbar mceLeft mceFirst mceLast">
                    <table>
                        <tr>
                            <td class="mceToolbarStart mceToolbarStartButton mceFirst"><span></span></td>
                            <td><a href="#" id="bold" class="mceButton mce_bold"><span class="mceIcon mce_bold"></span></a></td>
                            <td><a href="#" id="italic" class="mceButton mce_italic"><span class="mceIcon mce_italic"></span></a></td>
                            <td><a href="#" id="underline" class="mceButton mce_underline"><span class="mceIcon mce_underline"></span></a></td>
                            <td><a href="#" id="strikethrough" class="mceButton mce_strikethrough"><span class="mceIcon mce_strikethrough"></span></a></td>
                            <td><a href="javascript:;" class="mceButton mceButtonEnabled spacer_button" title="" >
                                    <span class="mceIcon spacer_button"></span>
                                </a></td>
                            <td><a href="#" id="justifyleft" class="mceButton mce_justifyright"><span class="mceIcon mce_justifyright"></span></a></td>
                            <td><a href="#" id="justifycenter" class="mceButton mce_justifycenter"><span class="mceIcon mce_justifycenter"></span></a></td>
                            <td><a href="#" id="justifyright" class="mceButton mce_justifyright"><span class="mceIcon mce_justifyright"></span></a></td>
                            <td>
                                <a href="javascript:;" class="mceButton mceButtonEnabled spacer_button spacer_button1" >
                                    <span class="mceIcon spacer_button spacer_button1"></span>
                                </a>
                            </td>
                            <td><a href="#" id="image" class="mceButton mce_image"><span class="mceIcon mce_image"></span></a></td>
                            <td><a href="#" id="url" class="mceButton mce_link"><span class="mceIcon mce_link"></span></a></td>
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



<div class="mainIFrame">
    <span class="editorSpan">
        <table cellspacing="0" cellpadding="0" style="height: 300px;" class="editorMain" >
            <tr class="editorFirst">
                <td style="height: 28px; bottom: 0;" class="">
                    <table cellspacing="0" cellpadding="0" class="">
                        <tr>
                            <td class=""><span></span></td>
                            <td><a href="#" id="bold" value="Жирный" class="bold"><span class="bold"></span></a></td>
                            <td><a href="#" id="italic" value="Курсив" class="italic"><span class="italic"></span></a></td>
                            <td><a href="#" id="underline" value="Подчеркнутый" class="underline"><span class="underline"></span></a></td>
                            <td><a href="#" id="strikethrough" value="Перечеркнутый" class="strikethrough"><span class="strikethrough"></span></a></td>
                            <td><a href="javascript:;" value="Разделитель" class="spacer_button" title="" >
                                    <span class="spacer_button"></span>
                                </a>
                            </td>
                            <td><a href="#" id="justifyleft" value="Выровнять влево" class="justifyright"><span class="ustifyright"></span></a></td>
                            <td><a href="#" id="justifycenter" value="Выровнять по центру" class="justifycenter"><span class="justifycenter"></span></a></td>
                            <td><a href="#" id="justifyright" value="Выровнять вправо" class="justifyright"><span class="justifyright"></span></a></td>
                            <td>
                                <a href="javascript:;" class="spacer_button" >
                                    <span class="spacer_button"></span>
                                </a>
                            </td>
                            <td><a href="#" id="image" value="Картинка" class="image"><span class="image"></span></a></td>
                            <td><a href="#" id="url" value="Ссылка" class="link"><span class="ink"></span></a></td>
                            <td style="padding-right: 2px;" class=""></td>
                        </tr>
                    </table>
                </td>
            </tr>
            <tr class="editorIFrame">
                <td class="">
                    <div style="position: absolute; overflow: hidden; top: 0px; left: 0px; width: 100%; height: 269px;"></div>
                    <iframe id="iframe_redactor" style="width: 100%; height: 264px; position: relative;" ></iframe>
                </td>
            </tr>
            <tr class="editorLast">
                <td class="">
                    <a class="" href="#"></a>
                </td>
            </tr>
        </table>
    </span>

    <div><input type="button" value="Пердпросмотр" onclick="addTextToBase()"></div>
    <p id="showmsg"></p>
</div>






</body>
</html>