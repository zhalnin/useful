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
    <script type="text/javascript" src="load.js"></script>
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
                                <td><a href="#" id="emoticon" value="Вставить смайлик" class="editor_emoticon" title="Вставить смайлик"><span id="editorEmoticon" class="editorIcon editor_emoticon"></span></a></td>
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
<!--<div id="emoticons" style="position: absolute; left: 515px; top: 1323px; z-index: 200000;width: 95px; height: 500px;">-->
<!--    <div class="mceMenu">-->
<!--        <table id="menu_wysiwygtext_wysiwygtext_jiveemoticons_menu_tbl" cellspacing="0" cellpadding="0" border="0">-->
<!--            <tbody>-->
<!--            <tr id="mce_0" class="mceMenuItem mceMenuItemEnabled mceFirst">-->
<!--                <td>-->
<!--                    <a href="javascript:;" onclick="return false;" onmousedown="return false;">-->
<!--                        <span class="mceIcon mce_jiveMacro_emoticon_happy"></span>-->
<!--                        <span class="mceText" title="Happy">Happy</span>-->
<!--                    </a>-->
<!--                </td>-->
<!--            </tr>-->
<!--            <tr id="mce_1" class="mceMenuItem mceMenuItemEnabled">-->
<!--                <td>-->
<!--                    <a href="javascript:;" onclick="return false;" onmousedown="return false;">-->
<!--                        <span class="mceIcon mce_jiveMacro_emoticon_laugh"></span>-->
<!--                        <span class="mceText" title="Laugh">Laugh</span>-->
<!--                    </a>-->
<!--                </td>-->
<!--            </tr>-->
<!--            <tr id="mce_2" class="mceMenuItem mceMenuItemEnabled">-->
<!--                <td>-->
<!--                    <a href="javascript:;" onclick="return false;" onmousedown="return false;">-->
<!--                        <span class="mceIcon mce_jiveMacro_emoticon_silly"></span>-->
<!--                        <span class="mceText" title="Silly">Silly</span>-->
<!--                    </a>-->
<!--                </td>-->
<!--            </tr>-->
<!--            <tr id="mce_3" class="mceMenuItem mceMenuItemEnabled">-->
<!--                <td>-->
<!--                    <a href="javascript:;" onclick="return false;" onmousedown="return false;">-->
<!--                        <span class="mceIcon mce_jiveMacro_emoticon_wink"></span>-->
<!--                        <span class="mceText" title="Wink">Wink</span>-->
<!--                    </a>-->
<!--                </td>-->
<!--            </tr>-->
<!--            <tr id="mce_4" class="mceMenuItem mceMenuItemEnabled">-->
<!--                <td>-->
<!--                    <a href="javascript:;" onclick="return false;" onmousedown="return false;">-->
<!--                        <span class="mceIcon mce_jiveMacro_emoticon_plain"></span>-->
<!--                        <span class="mceText" title="Plain">Plain</span>-->
<!--                    </a>-->
<!--                </td>-->
<!--            </tr>-->
<!--            <tr id="mce_5" class="mceMenuItem mceMenuItemEnabled">-->
<!--                <td>-->
<!--                    <a href="javascript:;" onclick="return false;" onmousedown="return false;">-->
<!--                        <span class="mceIcon mce_jiveMacro_emoticon_angry"></span>-->
<!--                        <span class="mceText" title="Angry">Angry</span>-->
<!--                    </a>-->
<!--                </td>-->
<!--            </tr>-->
<!--            <tr id="mce_6" class="mceMenuItem mceMenuItemEnabled">-->
<!--                <td>-->
<!--                    <a href="javascript:;" onclick="return false;" onmousedown="return false;">-->
<!--                        <span class="mceIcon mce_jiveMacro_emoticon_blush"></span>-->
<!--                        <span class="mceText" title="Blush">Blush</span>-->
<!--                    </a>-->
<!--                </td>-->
<!--            </tr>-->
<!--            <tr id="mce_7" class="mceMenuItem mceMenuItemEnabled">-->
<!--                <td>-->
<!--                    <a href="javascript:;" onclick="return false;" onmousedown="return false;">-->
<!--                        <span class="mceIcon mce_jiveMacro_emoticon_confused"></span>-->
<!--                        <span class="mceText" title="Confused">Confused</span>-->
<!--                    </a>-->
<!--                </td>-->
<!--            </tr>-->
<!--            <tr id="mce_8" class="mceMenuItem mceMenuItemEnabled">-->
<!--                <td>-->
<!--                    <a href="javascript:;" onclick="return false;" onmousedown="return false;">-->
<!--                        <span class="mceIcon mce_jiveMacro_emoticon_cool"></span>-->
<!--                        <span class="mceText" title="Cool">Cool</span>-->
<!--                    </a>-->
<!--                </td>-->
<!--            </tr>-->
<!--            <tr id="mce_9" class="mceMenuItem mceMenuItemEnabled">-->
<!--                <td>-->
<!--                    <a href="javascript:;" onclick="return false;" onmousedown="return false;">-->
<!--                        <span class="mceIcon mce_jiveMacro_emoticon_cry"></span>-->
<!--                        <span class="mceText" title="Cry">Cry</span>-->
<!--                    </a>-->
<!--                </td>-->
<!--            </tr>-->
<!--            <tr id="mce_10" class="mceMenuItem mceMenuItemEnabled">-->
<!--                <td>-->
<!--                    <a href="javascript:;" onclick="return false;" onmousedown="return false;">-->
<!--                        <span class="mceIcon mce_jiveMacro_emoticon_devil"></span>-->
<!--                        <span class="mceText" title="Devil">Devil</span>-->
<!--                    </a>-->
<!--                </td>-->
<!--            </tr>-->
<!--            <tr id="mce_11" class="mceMenuItem mceMenuItemEnabled">-->
<!--                <td>-->
<!--                    <a href="javascript:;" onclick="return false;" onmousedown="return false;">-->
<!--                        <span class="mceIcon mce_jiveMacro_emoticon_grin"></span>-->
<!--                        <span class="mceText" title="Grin">Grin</span>-->
<!--                    </a>-->
<!--                </td>-->
<!--            </tr>-->
<!--            <tr id="mce_12" class="mceMenuItem mceMenuItemEnabled">-->
<!--                <td>-->
<!--                    <a href="javascript:;" onclick="return false;" onmousedown="return false;">-->
<!--                        <span class="mceIcon mce_jiveMacro_emoticon_love"></span>-->
<!--                        <span class="mceText" title="Love">Love</span>-->
<!--                    </a>-->
<!--                </td>-->
<!--            </tr>-->
<!--            <tr id="mce_13" class="mceMenuItem mceMenuItemEnabled">-->
<!--                <td>-->
<!--                    <a href="javascript:;" onclick="return false;" onmousedown="return false;">-->
<!--                        <span class="mceIcon mce_jiveMacro_emoticon_mischief"></span>-->
<!--                        <span class="mceText" title="Mischief">Mischief</span>-->
<!--                    </a>-->
<!--                </td>-->
<!--            </tr>-->
<!--            <tr id="mce_14" class="mceMenuItem mceMenuItemEnabled">-->
<!--                <td>-->
<!--                    <a href="javascript:;" onclick="return false;" onmousedown="return false;">-->
<!--                        <span class="mceIcon mce_jiveMacro_emoticon_sad"></span>-->
<!--                        <span class="mceText" title="Sad">Sad</span>-->
<!--                    </a>-->
<!--                </td>-->
<!--            </tr>-->
<!--            <tr id="mce_15" class="mceMenuItem mceMenuItemEnabled">-->
<!--                <td>-->
<!--                    <a href="javascript:;" onclick="return false;" onmousedown="return false;">-->
<!--                        <span class="mceIcon mce_jiveMacro_emoticon_shocked"></span>-->
<!--                        <span class="mceText" title="Shocked">Shocked</span>-->
<!--                    </a>-->
<!--                </td>-->
<!--            </tr>-->
<!--            <tr id="mce_16" class="mceMenuItem mceMenuItemEnabled">-->
<!--                <td>-->
<!--                    <a href="javascript:;" onclick="return false;" onmousedown="return false;">-->
<!--                        <span class="mceIcon mce_jiveMacro_emoticon_info"></span>-->
<!--                        <span class="mceText" title="Info">Info</span>-->
<!--                    </a>-->
<!--                </td>-->
<!--            </tr>-->
<!--            <tr id="mce_17" class="mceMenuItem mceMenuItemEnabled">-->
<!--                <td>-->
<!--                    <a href="javascript:;" onclick="return false;" onmousedown="return false;">-->
<!--                        <span class="mceIcon mce_jiveMacro_emoticon_plus"></span>-->
<!--                        <span class="mceText" title="Plus">Plus</span>-->
<!--                    </a>-->
<!--                </td>-->
<!--            </tr>-->
<!--            <tr id="mce_18" class="mceMenuItem mceMenuItemEnabled">-->
<!--                <td>-->
<!--                    <a href="javascript:;" onclick="return false;" onmousedown="return false;">-->
<!--                        <span class="mceIcon mce_jiveMacro_emoticon_minus"></span>-->
<!--                        <span class="mceText" title="Minus">Minus</span>-->
<!--                    </a>-->
<!--                </td>-->
<!--            </tr>-->
<!--            <tr id="mce_19" class="mceMenuItem mceMenuItemEnabled mceLast">-->
<!--                <td>-->
<!--                    <a href="javascript:;" onclick="return false;" onmousedown="return false;">-->
<!--                        <span class="mceIcon mce_jiveMacro_emoticon_alert"></span>-->
<!--                        <span class="mceText" title="Alert">Alert</span>-->
<!--                    </a>-->
<!--                </td>-->
<!--            </tbody>-->
<!--        </table>-->
<!--    </div>-->
<!--</div>-->


</body>
</html>