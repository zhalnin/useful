/**
 * Created by zhalnin on 26/04/14.
 */
var dragMaster = (function() {

    var dragObject,
        mouseDownAt;

    function mouseDown(e) {
        console.log('mouseDown');
        e = AM.Event.fixEventMouse(e);
        if(e.which != 1 ) return;
        mouseDownAt = { x: e.pageX, y: e.pageY, element: this }

        addDocumentEventHandlers();

        return false;
    }

    function mouseMove(e) {
        console.log('mouseMove');
        e = AM.Event.fixEventMouse(e);
        if( mouseDownAt ) {
            if( Math.abs(mouseDownAt.x - e.pageX) < 5 && Math.abs(mouseDownAt.y - e.pageY ) < 5 ) {
                return false;
            }
            var elem = mouseDownAt.element;
            dragObject = elem.dragObject;
            var mouseOffset = AM.Event.getMouseOffset( elem, mouseDownAt.x, mouseDownAt.y );
            mouseDownAt = null;

            dragObject.onDragStart( mouseOffset );
        }

        dragObject.onDragMove(e.pageX, e.pageY );
        return false;
    }

    function mouseUp() {
        console.log('mouseUp');
        if( ! dragObject ) {
            mouseDownAt = null
        }
        removeDocumentEventHandlers();
    }

    function addDocumentEventHandlers() {
        document.onmousemove = mouseMove;
        document.onmouseup = mouseUp;
        document.ondragstart = document.body.onselectstart = function() { return false; }
    }

    function removeDocumentEventHandlers() {
        document.onmousemove = document.onmouseup = document.ondragstart = document.body.onselectstart = null;
    }


    return  {
        makeDraggable: function( element ) {
            console.log(element);
            element.onmousedown = mouseDown;
        }
    }
}());