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
<!--    <link rel="stylesheet" type="text/css" href="wysiwyg.css">-->
    <link rel="stylesheet" type="text/css" href="style.css">
    <script type="text/javascript" src="../AlezhalModules.js" ></script>
    <script type="text/javascript" src="wysiwyg.js"></script>
    <script type="text/javascript">
        AM.Event.addEvent(window, 'load', function() {
            AM.Event.addEvent(AM.DOM.$('bold'), 'focus', function() {
               alert("iframe");
            });
        });

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
    <span class="editorSpan">
        <table id="wysiwyg_toolbar" cellspacing="0" cellpadding="0" style="height: 300px;" class="editorMain" >
            <tr class="editorFirst">
                <td style="height: 28px; bottom: 0;" class="editorToolbar">
                    <table>
                        <tr>
                            <td class=""><span></span></td>
                            <td><a href="#" id="bold" value="Жирный" class="editorBold" title="Жирный текст"><span class="editorIcon editorBold"></span></a></td>
                            <td><a href="#" id="italic" value="Курсив" class="editorItalic" title="Наклонный текст"><span class="editorIcon editorItalic"></span></a></td>
                            <td><a href="#" id="underline" value="Подчеркнутый" class="editorUnderline" title="Подчеркнутый текст"><span class="editorIcon editorUnderline"></span></a></td>
                            <td><a href="#" id="strikethrough" value="Перечеркнутый" class="editorStrikethrough" title="Перечеркнутый текст"><span class="editorIcon editorStrikethrough"></span></a></td>
                            <td><a href="javascript:;" class="editorSpacer" ><span class="editorIcon editorSpacer"></span></a></td>
                            <td><a href="#" id="justifyleft" value="Выровнять влево" class="editorJustifyleft" title="Выравнивание влево"><span class="editorIcon editorJustifyleft"></span></a></td>
                            <td><a href="#" id="justifycenter" value="Выровнять по центру" class="editorJustifycenter" title="Выравнивание по центру"><span class="editorIcon editorJustifycenter"></span></a></td>
                            <td><a href="#" id="justifyright" value="Выровнять вправо" class="editorJustifyright" title="Выравнивание вправо"><span class="editorIcon editorJustifyright"></span></a></td>
                            <td><a href="javascript:;" class="editorSpacer" ><span class="editorIcon editorSpacer"></span></a></td>
                            <td><a href="#" id="image" value="Картинка" class="editorImage"><span class="editorIcon editorImage" title="Прикрепить изображение"></span></a></td>
                            <td><a href="#" id="url" value="Ссылка" class="editorLink"><span class="editorIcon editorLink" title="Добавить ссылку"></span></a></td>
                            <td><a href="javascript:;" class="editorSpacer" ><span class="editorIcon editorSpacer"></span></a></td>
                            <td style="padding-right: 2px;" class=""></td>
                        </tr>
                    </table>
                </td>
            </tr>
            <tr class="editorIFrame">
                <td class="">
                    <iframe id="iframe_redactor" style="width: 100%; height: 264px; position: relative;" ></iframe>
                </td>
            </tr>
            <tr class="editorLast">
                <td class="editorStatusbar"><a href="javascript:;" class="editorResize" ><span class="editorIcon editorResize"></span></a></td>
            </tr>
        </table>
    </span>

    <div><input type="button" value="Пердпросмотр" onclick="addTextToBase()"></div>
    <p id="showmsg"></p>
</div>






</body>
</html>