<?php
/**
 * Created by JetBrains PhpStorm.
 * User: zhalnin
 * Date: 13/04/14
 * Time: 15:44
 * To change this template use File | Settings | File Templates.
 */


?>

<html>
<body>
<!--<script src="DragObject.js"></script>-->
<!--<script src="DropTarget.js"></script>-->
<!--<script src="dragMaster.js"></script>-->
<!--<script src="helpers.js"></script>-->
<script type="text/javascript">
    var dragMaster = ( function() {

        var dragObject,
            mouseDownAt,
            currentDropTarget;

        function mouseDown( e ) {
            console.log('mouseDown');
            e = fixEvent( e );
            mouseDownAt = { x: e.pageX, y: e.pageY, element: this };
            addDocumentEventHandlers();
            return false;
        }

        function mouseMove( e ) {
            console.log('mouseMove');
            e = fixEvent( e );
            if( mouseDownAt ) {
                if( Math.abs( mouseDownAt.x - e.pageX ) < 5 && Math.abs( mouseDownAt.y - e.pageY ) < 5 ) {
                    return false;
                }
                // Перенос
                var elem = mouseDownAt.element;
                // Объект для переноса
                dragObject = elem.dragObject;
                // Запоминаем начальные координаты
                var mouseOffset = getMouseOffset( elem, mouseDownAt.x, mouseDownAt.y );
                // Удаляем значение до переноса
                mouseDownAt = null;

                // Начало движения
                dragObject.onDragStart( mouseOffset )
            }

            dragObject.onDragMove(e.pageX, e.pageY);

            var newTarget = getCurrentTarget( e );

            if( currentDropTarget != newTarget ) {
                if( currentDropTarget ) {
                    currentDropTarget.onLeave()
                }
                if( newTarget ) {
                    newTarget.onEnter();
                }
                currentDropTarget = newTarget;
            }
            return false;
        }


        function mouseUp() {
            console.log('mouseUp');
            if( ! dragObject ) {
                mouseDownAt = null;
            } else {
                if( currentDropTarget ) {
                    currentDropTarget.accept( dragObject );
                    dragObject.onDragSuccess( currentDropTarget );
                } else {
                    dragObject.onDragFail();
                }
                dragObject = null;
            }
            removeDocumentEventHandlers();
        }


        function getMouseOffset( target, x, y ) {
            console.log('getMouseOffset');
            var docPos = getOffset( target );
            return { x: x - docPos.left, y: y - docPos.top };
        }

        function getCurrentTarget( e ) {
            console.log('getCurrentTarget');
            // Прячем объект, получаем элемент под ним и опять показываем
            if( navigator.userAgent.match('MSIE') || navigator.userAgent.match('Gecko') ) {
                var x= e.clientX, y= e.clientY;
            } else {
                var x = e.pageX, y = e.pageY;
            }
            // Убираем мигание, чтобы не было видно мигания
            dragObject.hide();
            var elem = document.elementFromPoint( x, y );
            dragObject.show();

            // Находим самую вложенную dropTarget
            while( elem ) {
                // которая может принять dropObject
                if( elem.dropTarget && elem.dropTarget.canAccept( dragObject ) ) {
                    return elem.dropTarget;
                }
                elem = elem.parentNode;
            }
            // dropTarget не нашли
            return null
        }

        function addDocumentEventHandlers() {
            console.log('addDocumentEventHandlers');
            document.onmousemove = mouseMove;
            document.onmouseup = mouseUp;
            document.ondragstart = document.body.onselectstart = function() { return false; }
        }
        function removeDocumentEventHandlers() {
            console.log('removeDocumentEventHandlers');
            document.onmousemove = document.onmouseup = document.ondragstart = document.body.onselectstart = null;
        }

        return {
            makeDraggable: function( element ) {
                element.onmousedown = mouseDown;
            }
        }
    }());





    // Drag constructor
    function DragObject( element ) {
        console.log('DragObject');

        element.dragObject = this;

        dragMaster.makeDraggable( element );

        var rememberPosition,
            mouseOffset;

        this.onDragStart = function( offset ) {
            console.log('onDragStart');
            var s = element.style;
            rememberPosition = { top: s.top, left: s.left, position: s.position }
            s.position = 'absolute';
            mouseOffset = offset;
        };

        this.hide = function() {
            console.log('hide');
            element.style.display = 'none';
        };

        this.show = function() {
            console.log('show');
            element.style.display = '';
        };

        this.onDragMove = function( x, y ) {
            console.log('onDragMove');
            element.style.top = y - mouseOffset.y + 'px';
            element.style.left = x - mouseOffset.x + 'px';
        };

        this.onDragSuccess = function( dropTarget ) {
            console.log('onDragSuccess');

        };

        this.onDragFail = function() {
            console.log('onDragFail');
            var s = element.style;
            s.top = rememberPosition.top;
            s.left = rememberPosition.left;
            s.position = rememberPosition.position;
        };

        this.toString = function() {
            console.log('toString');
            return element.id;
        };
    }





    // Drop constructor
    function DropTarget( element ) {

        element.dropTarget = this;

        this.canAccept = function( dragObject ) {
            console.log('canAccept');
            return true;
        };

        this.accept = function( dragObject ) {
            console.log('accept');
            this.onLeave();
            dragObject.hide();
            alert("Acceptor'" + this + "' : accepted the object '" + dragObject + "'" );
        };

        this.onLeave = function() {
            console.log('onLeave');
            element.className  = '';
        };

        this.onEnter = function() {
            console.log('onEnter');
            element.className = 'uponMe';
        };

        this.toString = function() {
            console.log('toString');
            return element.id;
        };

//        console.log(element);
    }






// Helper function

    function fixEvent( e ) {
        // Получаем событие для IE
        e = e || window.event;

        // Добавляем pageX/pageY для IE
        if(e.pageX == null && e.clientX != null ) {
            var html = document.documentElement,
                body = document.body;
            e.pageX = e.clientX + ( html && html.scrollLeft || body && body.scrollLeft || 0 ) - ( html.clientLeft || 0 )
            e.pageY = e.clientY + ( html && html.scrollTop || body && body.scrollTop || 0 ) - ( html.clientTop || 0 )
        }

        if( !e.which && e.button ) {
            e.which = e.button & 1 ? 1 : ( e.button & 2 ? 3 : ( e.button & 4 ? 2 : 0 ) );
        }

        return e;
    }

    function getOffset( elem ) {
        if( elem.getBoundingClientRect ) {
            return getOffsetRect( elem );
        } else {
            return getOffsetSum( elem );
        }
    }


    function getOffsetRect( elem ) {
        var box = elem.getBoundingClientRect(),
            body = document.body,
            docElem = document.documentElement,
            scrollTop = window.pageYOffset || docElem.scrollTop || body.scrollTop,
            scrollLeft = window.pageXOffset || docElem.scrollLeft || body.scrollLeft,
            clientTop = docElem.clientTop || body.clientTop || 0,
            clientLeft = docElem.clientLeft || body.clientLeft || 0,
            top = box.top + scrollTop - clientTop,
            left = box.left + scrollLeft - clientLeft;

        return { top: Math.round( top ), left: Math.round( left ) }
    }

    function getOffsetSum( elem ) {
        var top= 0,
            left=0;
        while( elem ) {
            top = top + parseInt( elem.offsetTop );
            left = left + parseInt( elem.offsetLeft );
            elem = elem.offsetParent;
        }
        return { top: top, left: left }
    }
</script>
<style>
    .uponMe { background-color: red; }
</style>

<div id="dragObjects">
    <img src="img/1.png" id="piki"/>
    <img src="img/2.png" id="bubi"/>
    <img src="img/3.png" id="trefi"/>
    <img src="img/4.png" id="chervi"/>
</div>
<img src="img/trash.gif" style="margin-left:100px; margin-top: 100px;" id="trash"/>

<script>
    onload = function() {
        var dragObjects = document.getElementById('dragObjects').getElementsByTagName('img');
        for(var i= 0, len = dragObjects.length; i<len; i++) {
            new DragObject(dragObjects[i])
        }

        new DropTarget(document.getElementById('trash'))

    }
</script>


</body>
</html>
