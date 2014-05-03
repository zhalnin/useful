<?php
/**
 * Created by JetBrains PhpStorm.
 * User: zhalnin
 * Date: 03/05/14
 * Time: 16:25
 * To change this template use File | Settings | File Templates.
 */

?>
<!DOCTYPE>
<html>
<head>
    <title>Resize</title>
    <script type="text/javascript" src="../AlezhalModules.js" ></script>
    <script type="text/javascript">

        window.onload = function( event ) {

            var resizeable = document.getElementById('resizable');

            var drag = new DragMove( resizeable );

        };




        function DragMove( element ) {
            console.log('DragMove');
            console.log(this);

            element.dragElement = this;

            dragMaster.makeDraggable( element );


            this.onStart = function(offset ) {
                console.log('onStart');
                mouseOffset = offset;
            };

            this.onMove = function( x, y, width, height ) {
                console.log('onMove');
                console.log(AM.Position.getElementTop(element));
//                console.log(y);
//                console.log(mouseOffset.y);
//                console.log(parseInt(diffY));
//                console.log(height);

//                var diffX = x - mouseOffset.x;
//                console.log(diffY);

                element.style.height = height + y - mouseOffset.y - AM.Position.getElementTop(element) + 'px';
                element.style.width = width + x - mouseOffset.x - AM.Position.getElementLeft(element) + 'px';

            };

        }







        var dragMaster = (function() {
            var dragElement,
                mousePoint,
                height,
                width;

            function mouseDown( e ) {
                console.log('mouseDown');
                e = AM.Event.fixEventMouse( e );
                if(e.which != 1 ) { return; }
                mousePoint = { x: e.pageX, y: e.pageY, element: this };
//                width = this.offsetWidth;
                width = AM.Position.fullWidth(this);
                height = AM.Position.fullHeight(this);
                addDocumentEventHandlers();
                return false;
            }


            function mouseMove( e ) {
                console.log('mouseMove');
                e = AM.Event.fixEventMouse( e );
                if( mousePoint ) {
                    var elem = mousePoint.element;
                    dragElement = elem.dragElement;
                    var mouseOffset = AM.Event.getMouseOffset( elem, mousePoint.x, mousePoint.y );
                    mousePoint = null;
                    dragElement.onStart( mouseOffset );
                }

                dragElement.onMove(e.pageX, e.pageY, width, height );
                return false;
            }



            function mouseUp( ) {
                console.log('mouseUp');
                if( !dragElement ) {
                    console.log('dragElement not found');
                    mousePoint = null;
                }
                removeDocumentEventHandlers();
            }



            function addDocumentEventHandlers() {
                console.log('addDocumentEventHandlers');
                document.onmousemove = mouseMove;
                document.onmouseup = mouseUp;

            }

            function removeDocumentEventHandlers() {
                console.log('removeDocumentEventHandlers');
                document.onmousemove = document.onmouseup = null;

            }

            return {
                makeDraggable: function( element ) {
                    console.log('makeDraggable');
                    element.onmousedown = mouseDown;
                }
            }
        }());



        //window.onload = function() {
        //    var div = document.getElementById("resizable");
        //// Получаем div нужный нам
        //    var width = div.offsetWidth;
        //    var height = div.offsetHeight;
        //// Ширина и высота div'a
        //
        //    document.onmousedown = function(event) {
        //// При нажатии кнопки . . .
        //
        //        pos = event.pageX;
        //        posY = event.pageY;
        //// Получаем позицию (в px) курсора относительно документа
        //
        //        document.onmousemove = function(event) {
        //// При движении . . .
        //
        //            console.log(event.pageY);
        //            console.log(posY);
        //            console.log(height);
        //            res = width + event.pageX-pos;
        //            resY = height + event.pageY-posY;
        //// 'rez' = ширина div'a + кол-во пикселов смещения
        //            div.style.width = res+"px";
        //            div.style.height = resY + 'px';
        //
        //        }
        //
        //    }
        //
        //    document.onmouseup = function(){
        //        document.onmousemove = document.onmousedown = null;
        //    }
        //}

    </script>
    <style type="text/css" >
        * {
            padding: 0;
            margin: 0;
        }
        #resizable {
            position: relative;
            width: 200px;
            height: 200px;
            background-color: yellow;
            border: 1px solid slategray ;
            margin-top: 20px;
        }
    </style>
</head>
<body>

<div id="resizable"></div>

</body>
</html>

window.onload = function() {<br />
var div = document.getElementById("resizable");<br />

// Получаем div нужный нам<br />
var width = div.offsetWidth;<br />
var height = div.offsetHeight;<br />
// Ширина и высота div'a<br />

document.onmousedown = function() {<br />
// При нажатии кнопки . . .<br />

pos = event.pageX;<br />
// Получаем позицию (в px) курсора относительно документа<br />

document.onmousemove = function(event) {<br />
// При движении . . .<br />

res = width + event.pageX-pos;<br />
// 'rez' = ширина div'a + кол-во пикселов смещения<br />
div.style.width = res+"px";<br />

}<br />

}<br />
