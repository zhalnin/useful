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
    <link rel="stylesheet" type="text/css" href="style2.css">
    <script type="text/javascript" src="../AlezhalModules.js" ></script>
    <script type="text/javascript" src="wysiwyg.js"></script>
</head>
<body>



    <div id="wysiwyg_form" class="wysiwyg_form">
        <form>
            <fieldset>
                <legend>Форма для комментария</legend>
                <div id="main_toolbar">
                    <div id="wysiwyg_toolbar" cellspacing="0" cellpadding="0"  class="editorMain clear-fix" >
                        <div><a href="javascript:;" class="editorSpacer" ><span class="editorIcon editorSpacer"></span></a></div>
                        <div class="editorFirst"><a href="#" id="bold" value="Жирный" class="editor_bold" title="Жирный текст"><span id="bold" class="editorIcon editor_bold"></span></a></div>
                        <div><a href="#" id="italic" value="Курсив" class="editor_italic" title="Наклонный текст"><span id="italic" class="editorIcon editor_italic"></span></a></div>
                        <div><a href="#" id="underline" value="Подчеркнутый" class="editor_underline" title="Подчеркнутый текст"><span id="underline" class="editorIcon editor_underline"></span></a></div>
                        <div><a href="#" id="strikethrough" value="Перечеркнутый" class="editor_strikethrough" title="Перечеркнутый текст"><span id="strikethrough" class="editorIcon editor_strikethrough"></span></a></div>
                        <div><a href="javascript:;" class="editorSpacer" ><span class="editorIcon editorSpacer"></span></a></div>
                        <div><a href="#" id="justifyleft" value="Выровнять влево" class="editor_justifyleft" title="Выравнивание влево"><span id="justifyleft" class="editorIcon editor_justifyleft"></span></a></div>
                        <div><a href="#" id="justifycenter" value="Выровнять по центру" class="editor_justifycenter" title="Выравнивание по центру"><span id="justifycenter" class="editorIcon editor_justifycenter"></span></a></div>
                        <div><a href="#" id="justifyright" value="Выровнять вправо" class="editor_justifyright" title="Выравнивание вправо"><span id="justifyright" class="editorIcon editor_justifyright"></span></a></div>
                        <div><a href="javascript:;" class="editorSpacer" ><span class="editorIcon editorSpacer"></span></a></div>
                        <div><a href="#" id="image" value="Картинка" class="editor_image"><span id="image" class="editorIcon editor_image" title="Прикрепить изображение"></span></a></div>
                        <div><a href="#" id="url" value="Ссылка" class="editor_link"><span id="link" class="editorIcon editor_link" title="Добавить ссылку"></span></a></div>
                        <div class="editorLast"><a href="javascript:;" class="editorSpacer" ><span class="editorIcon editorSpacer"></span></a></div>
                    </div>
                </div>
                <div id="wysiwyg_textarea">
                    <span>
                        <label></label>
                        <textarea id="textarea_redactor" name="textarea_redactor"  ></textarea>
                    </span>
                </div>
                <div><span>
                        <label>Отправить</label>
                        <input type="button" value="Предпросмотр" onclick="addTextToBase2()">
                    </span>
                </div>
            </fieldset>
        </form>
    </div>
            <p id="showmsg"></p>





</body>
</html>