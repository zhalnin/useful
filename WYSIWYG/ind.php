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
    <script type="text/javascript" src="dragMaster.js"></script>
    <style>
        .mainIFrame {
            width: 50%;
            margin: 20px auto;
        }
    </style>
</head>
<body>

<p id="showmsg"></p>



<form method="POST">

    <div class="mainIFrame">
        <span class="editorSpan" id="editorSpan">
            <table id="wysiwyg_toolbar" cellspacing="0" cellpadding="0" class="editorMain" >
                <tr class="editorFirst">
                    <td class="editorToolbar">
                        <table>
                            <tr id="editorTR">
                                <td class=""><span></span></td>
                                <td><a href="#" id="bold" value="Жирный" class="editor_bold" title="Жирный текст"><span id="bold" class="editorIcon editor_bold"></span></a></td>
                                <td><a href="#" id="italic" value="Курсив" class="editor_italic" title="Наклонный текст"><span id="italic" class="editorIcon editor_italic"></span></a></td>
                                <td><a href="#" id="underline" value="Подчеркнутый" class="editor_underline" title="Подчеркнутый текст"><span id="underline" class="editorIcon editor_underline"></span></a></td>
                                <td><a href="#" id="strikethrough" value="Перечеркнутый" class="editor_strikethrough" title="Перечеркнутый текст"><span id="strikethrough" class="editorIcon editor_strikethrough"></span></a></td>
                                <td><a href="#" class="editorSpacer" ><span class="editorIcon editorSpacer"></span></a></td>
                                <td><a href="#" id="justifyleft" value="Выровнять влево" class="editor_justifyleft" title="Выравнивание влево"><span id="justifyleft" class="editorIcon editor_justifyleft"></span></a></td>
                                <td><a href="#" id="justifycenter" value="Выровнять по центру" class="editor_justifycenter" title="Выравнивание по центру"><span id="justifycenter" class="editorIcon editor_justifycenter"></span></a></td>
                                <td><a href="#" id="justifyright" value="Выровнять вправо" class="editor_justifyright" title="Выравнивание вправо"><span id="justifyright" class="editorIcon editor_justifyright"></span></a></td>
                                <td><a href="#" class="editorSpacer" ><span class="editorIcon editorSpacer"></span></a></td>
                                <td><a href="#" id="image" value="Прикрепить изображение" class="editor_image"><span id="image" class="editorIcon editor_image" title="Прикрепить изображение"></span></a></td>
                                <td><a href="#" id="uploadImage" value="Загрузить изображение" class="editor_uploadImage"><span id="uploadImage" class="editorIcon editor_uploadImage" title="Загрузить изображение"></span></a></td>
                                <td><a href="#" id="url" value="Ссылка" class="editor_link"><span id="link" class="editorIcon editor_link" title="Добавить ссылку"></span></a></td>
                                <td><a href="#" class="editorSpacer" ><span class="editorIcon editorSpacer"></span></a></td>
                                <td style="padding-right: 2px;" class=""><span></span></td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr class="editorIFrame" id="editorIFrame">
                    <td class="" id="iframe_td">
                        <iframe id="iframe_redactor" name="iframe_redactor" ></iframe>
                    </td>
                </tr>
                <tr class="editorLast">
                    <td class="editorStatusbar"><a href="#" id="editorResize" class="editorResize" ><span class="editorIcon editorResize"></span></a></td>
                </tr>
            </table>
        </span>

        <div><input type="button" value="Предпросмотр" onclick="previewPost()"></div>
        <div><input type="button" value="Отправить" onclick="sendPost()"></div>
    </div>

</form>




</body>
</html>