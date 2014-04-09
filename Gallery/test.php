<?php
/**
 * Created by PhpStorm.
 * User: zhalnin
 * Date: 07/02/14
 * Time: 18:14
 */

?>

<! DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
"http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <title>Test</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <link rel="stylesheet" href="../wiki/css/style.css">
    <script type="text/javascript" src="../../imei-service/js/AlezhalModules.js" ></script>
    <style type="text/css">
        * {
            padding: 0;
            margin: 0;
        }
        #imgs {
            position: absolute;
            display: none;
        }
        #imgs2 {
            position: absolute;
        }
        #parent_imgs {
            width: 30px;
            height: 30px;
        }
        .bold {
            color: #5d5d5d;
            width: 400px;
            display: inline;
            /*float: left;*/
            position: relative;
        }
        .italic {
            font-style: italic;
        }
        #outside {
            display: inline-block;
            width: 200px;
            height: 200px;
            background-color: #ffc0cb;
            margin: 10px 10px;
            position: relative;
        }
        #inside {
            width: 200px;
            height: 200px;
            background-color: #ffff00;
            display: none;
        }
        #outsidediv {
            width: 300px;
            height: 300px;
            background-color: #008000;
            margin: 20px 20px;
        }
        #list li {
            width: 300px;
        }
        #list div {
            width: 150px;
        }
        #draggable {
            width: 200px;
            height: 200px;
            background-color: #ffc0cb;
            position: absolute;
        }
        #status {
            position: relative;
            float: right;
            width: 90px;
            height: 30px;
            text-align: center;
            display: block;
            color: #000000;
            background-color: #ffffff;;
        }
        #form {
            clear: both;
        }
        #wrap {
            position: relative;
            left: 20px;
        }
    </style>
    <script type="text/javascript">
// <![CDATA[
        AM.Event.addEvent(window,'load',function(){
            var imgs = AM.DOM.$('imgs'),
                imgs2 = AM.DOM.$('imgs2'),
                pi = AM.DOM.$('parent_imgs'),
                bold = AM.DOM.$('bold'),
                inside = AM.DOM.$('inside'),
                outside = AM.DOM.$('outside'),
                outsidediv = AM.DOM.$('outsidediv'),
                list = AM.DOM.$('list'),
                styleSheet = AM.DOM.tag('link')[0],
                textarea = AM.DOM.$('textarea'),
                xmlXml = "xml.xml",
                draggable = AM.DOM.$('draggable'),
                ul = AM.DOM.tag('ul')[0],
                sel = AM.DOM.$("selectName"),
                sel2 = AM.DOM.tag('select'),
                form = AM.DOM.tag('form')[0],
                xhrs = AM.DOM.$('xhr'),
                send = AM.DOM.$('send'),
                status = AM.DOM.$('status'),
                wrap = AM.DOM.$('wrap');


            try {


                AM.Event.addEvent(status, 'click', function(event) {
                    if( sID ) {
                        console.log("y");
                    }
                    var sID = setTimeout(function(){
                        console.log("a");
                        setTimeout(arguments.callee, 1000);
                    },1000 );


                });


            } catch (ex) {
                AM.DOM.consoleLog(ex);
            }
        });
//]]>
    </script>
</head>
<body>

<div style="left: -700px; position: relative; float: right;"><span style="visibility: hidden">test page</span></div>
<h1 id="bold" class="bold italic">Тестовая страница</h1>

<div id="xhr"></div>
<form id="form" name="form">
    <fieldset>
        <legend>Form</legend>
        <label for="textarea">Textarea</label>
        <textarea id="textarea" cols="40" rows="20" maxlength="10" name="Description">
            Выделенный текст
        </textarea><br />

        <label for="text">Input</label>
        <input type="text" id="text" maxlength="3" name="Name"/><br />

        <label for="selectName">Select</label>
        <select name="selectName" id="selectName" multiple>
            <option>option 1</option>
            <option>option 2</option>
            <option>option 3</option>
            <option>option 4</option>
        </select><br />

        <label for="checkboxName">checkBox</label>
        <input type="checkbox" name="checkboxName1">
        <input type="checkbox" name="checkboxName2"><br />

        <label for="radioName">Radio</label>
        <input type="radio" name="radioName1">
        <input type="radio" name="radioName2">
        <input type="radio" name="radioName3">

        <label for="Send">Send</label>
        <input type="button" name="send" id="send">

    </fieldset>
</form>
<div id="wrap">
    <h3 id="status">Status: </h3>
</div>

    <div class="draggable" id="draggable" ></div>
<ul id="list">
    <li id="list1"><div><a href="">List1</a></div></li>
    <li id="list2"><div>List2</div></li>
    <li id="list3"><div>List3</div></li>
    <li id="list4"><div>List4</div></li>
</ul>
<div id="outsidediv"><span id="outside"></span></div>
<div id="inside"></div>
<div id="parent_imgs" style="width: 20px;">
<div id="imgs2" ><img src="img/image2.png" /></div>
</div>
<div id="imgs"><img src="img/image1.png" /></div>
<div class="bold">Это DIV с классом BOLD</div>

</body>
</html>