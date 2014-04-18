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

    <style>
        .mainIFrame {
            width: 50%;
            margin: 20px auto;
        }
    </style>
</head>
<body>





<div class="mainIFrame">
    <span class="editorSpan">
        <table id="wysiwyg_toolbar" cellspacing="0" cellpadding="0" style="height: 300px;" class="editorMain" >
            <tr class="editorFirst">
                <td style="height: 28px; bottom: 0;" class="editorToolbar">
                    <table>
                        <tr id="editorTR">
                            <td class=""><span></span></td>
                            <td><a href="#" onclick="doStyle('bold')" id="bold" value="Жирный" class="editor_bold" title="Жирный текст"><span id="bold" class="editorIcon editor_bold"></span></a></td>
                            <td><a href="#" onclick="doStyle('italic')" id="italic" value="Курсив" class="editor_italic" title="Наклонный текст"><span id="italic" class="editorIcon editor_italic"></span></a></td>
                            <td><a href="#" onclick="doStyle('underline')" id="underline" value="Подчеркнутый" class="editor_underline" title="Подчеркнутый текст"><span id="underline" class="editorIcon editor_underline"></span></a></td>
                            <td><a href="#" onclick="doStyle('strikethrough')" id="strikethrough" value="Перечеркнутый" class="editor_strikethrough" title="Перечеркнутый текст"><span id="strikethrough" class="editorIcon editor_strikethrough"></span></a></td>
                            <td><a href="javascript:;" class="editorSpacer" ><span class="editorIcon editorSpacer"></span></a></td>
                            <td><a href="#" onclick="doStyle('JustifyLeft')"  id="justifyleft" value="Выровнять влево" class="editor_justifyleft" title="Выравнивание влево"><span class="editorIcon editor_justifyleft"></span></a></td>
                            <td><a href="#" onclick="doStyle('JustifyCenter')"  id="justifycenter" value="Выровнять по центру" class="editor_justifycenter" title="Выравнивание по центру"><span class="editorIcon editor_justifycenter"></span></a></td>
                            <td><a href="#" onclick="doStyle('JustifyRight')"  id="justifyright" value="Выровнять вправо" class="editor_justifyright" title="Выравнивание вправо"><span class="editorIcon editor_justifyright"></span></a></td>
                            <td><a href="javascript:;" class="editorSpacer" ><span class="editorIcon editorSpacer"></span></a></td>
                            <td><a href="#" id="image" value="Картинка" class="editor_image"><span class="editorIcon editor_image" title="Прикрепить изображение"></span></a></td>
                            <td><a href="#" id="url" value="Ссылка" class="editor_link"><span class="editorIcon editor_link" title="Добавить ссылку"></span></a></td>
                            <td><a href="javascript:;" class="editorSpacer" ><span class="editorIcon editorSpacer"></span></a></td>
                            <td style="padding-right: 2px;" class=""><span></span></td>
                        </tr>
                    </table>
                </td>
            </tr>
            <tr class="editorIFrame">
                <td class="" id="iframe_td">
                    <iframe id="iframe_redactor" name="iframe_redactor" style="width: 100%; height: 264px; position: relative;" ></iframe>
                </td>
            </tr>
            <tr class="editorLast">
                <td class="editorStatusbar"><a href="javascript:;" class="editorResize" ><span class="editorIcon editorResize"></span></a></td>
            </tr>
        </table>
    </span>

    <div><input type="button" value="Пердпросмотр" onclick="addTextToBase2()"></div>
    <p id="showmsg"></p>
</div>






</body>
</html>