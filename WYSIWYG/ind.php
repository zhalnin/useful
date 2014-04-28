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
<style type="text/css">
    /*.showmsg {*/
        /*display: none;*/
        /*width: 700px;*/
        /*min-height: 200px;*/
        /*position: relative;*/
        /*margin: 0 auto;*/
        /*word-wrap: break-word;*/
    /*}*/
</style>
</head>
<body>

<div class="showmsg" id="showmsg"></div>



<form method="POST">

    <div class="mainIFrame">
        <span class="editorSpan" id="editorSpan">
            <table id="wysiwyg_toolbar" cellspacing="0" cellpadding="0" class="editorMain" >
                <tr class="editorFirst">
                    <td class="editorToolbar">
                        <table>
                            <tr id="editorTR">
                                <td class=""><span></span></td>
                                <td><a href="#" id="bold" value="Жирный" class="editor_bold"
                                       title="Нажмите на иконку и напечатайте выделенный текст, повторное нажатие отключит режим выделенного текста. Так же вы можете сначала напечатать текст, выделить его и, однократно нажав на иконку, сделать его выделенным.">
                                        <span id="bold" class="editorIcon editor_bold"></span></a></td>
                                <td><a href="#" id="italic" value="Курсив" class="editor_italic"
                                       title="Нажмите на иконку и напечатайте наклонный текст, повторное нажатие отключит режим наклонного текста. Так же вы можете сначала напечатать текст, выделить его и, однократно нажав на иконку, сделать его наколонным.">
                                        <span id="italic" class="editorIcon editor_italic"></span></a></td>
                                <td><a href="#" id="underline" value="Подчеркнутый" class="editor_underline"
                                       title="Нажмите на иконку и напечатайте подчеркнутый текст, повторное нажатие отключит режим подчеркнутого текста. Так же вы можете сначала напечатать текст, выделить его и, однократно нажав на иконку, сделать его подчеркнутым.">
                                        <span id="underline" class="editorIcon editor_underline"></span></a></td>
                                <td><a href="#" id="strikethrough" value="Перечеркнутый" class="editor_strikethrough"
                                       title="Нажмите на иконку и напечатайте перечеркнутым текст, повторное нажатие отключит режим перечеркнутого текста. Так же вы можете сначала напечатать текст, выделить его и, однократно нажав на иконку, сделать его перечеркнутым.">
                                        <span id="strikethrough" class="editorIcon editor_strikethrough"></span></a></td>
                                <td><a href="#" class="editorSpacer" ><span class="editorIcon editorSpacer"></span></a></td>
                                <td><a href="#" id="justifyleft" value="Выровнять влево" class="editor_justifyleft" title="Выравнивание влево"><span id="justifyleft" class="editorIcon editor_justifyleft"></span></a></td>
                                <td><a href="#" id="justifycenter" value="Выровнять по центру" class="editor_justifycenter" title="Выравнивание по центру"><span id="justifycenter" class="editorIcon editor_justifycenter"></span></a></td>
                                <td><a href="#" id="justifyright" value="Выровнять вправо" class="editor_justifyright" title="Выравнивание вправо"><span id="justifyright" class="editorIcon editor_justifyright"></span></a></td>
                                <td><a href="#" class="editorSpacer" ><span class="editorIcon editorSpacer"></span></a></td>
                                <td><a href="#" id="image" value="Прикрепить изображение" class="editor_image" title="Вставить ссылку на изображение"><span id="image" class="editorIcon editor_image" ></span></a></td>
                                <td><a href="#" id="uploadImage" value="Загрузить изображение" class="editor_uploadImage" title="Загрузить изображение с компьютера"><span id="uploadImage" class="editorIcon editor_uploadImage"></span></a></td>
                                <td><a href="#" id="url" value="Ссылка" class="editor_link"
                                       title="Напечатайте описание ссылки, выделите его, и нажмите на иконку. Введите адрес ссылки, нажмите кнопку 'Вставить'" >
                                        <span id="link" class="editorIcon editor_link" ></span></a></td>
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
                    <td class="editorStatusbar">
                        <div type="submit" onclick="previewPost();" class="button smallButton" value="Вставить" id="preview">
                                                    <span style="">
                                                        <span class="effect"></span>
                                                        <span class="label"> Предпросмотр </span>
                                                    </span>
                        </div>
                        <div type="submit" onclick="sendPost();" class="button smallButton" value="Вставить" id="submit">
                                                    <span style="">
                                                        <span class="effect"></span>
                                                        <span class="label"> Отправить </span>
                                                    </span>
                        </div>
                        <a href="#" id="editorResize" class="editorResize" ><span class="editorIcon editorResize"></span></a></td>
                </tr>
            </table>
        </span>

    </div>

</form>




</body>
</html>