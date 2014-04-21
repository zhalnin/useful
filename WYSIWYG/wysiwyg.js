/**
 * Created with JetBrains PhpStorm.
 * User: zhalnin
 * Date: 13/04/14
 * Time: 16:09
 * To change this template use File | Settings | File Templates.
 */

function iFrameInit() {
    var iframe = document.createElement("iframe");
    iframe.setAttributes('id','iframe');
    var doc = iframe.contentWindow.document || iframe.contentDocument;
    iframe.addEventListener('load', function () {
        doc.contentDocument.designMode="on";
    }, false);
    document.body.appendChild(iframe);
}




//console.log(Par.iFrame);
AM.Event.addEvent(window, 'load', function() {
    var theIframe = AM.DOM.$('iframe_redactor'),
        doc = theIframe.contentWindow.document || theIframe.contentDocument,
        activeStatus = {},
        editorTR = AM.DOM.$('editorTR'),
        editorTD = AM.DOM.tag('td', editorTR),
        i, len,
        editorResize = AM.DOM.$('editorResize'),
        wysiwyg_toolbar = AM.DOM.$('wysiwyg_toolbar'),
        iframe_redactor = AM.DOM.$('iframe_redactor');



    var modal = document.createElement("div");
    modal.id = "modal";
    modal.innerHTML = '<div id="modalContent"></div>' +
        '<div id="modalTitle"></div>';
    document.body.appendChild(modal);
    var overlay = document.createElement("div");
    overlay.id = "overlay";
    overlay.onclick = hideOverlay;
    document.body.appendChild(overlay);


    doc.designMode = "On";

    for( i = 0, len = editorTD.length; i < len; i++ ) {
//        if( AM.DOM.first(editorTD[i]).tagName == 'A' ) {
            activeStatus[i] = '';
        with( { num: i }) {
            AM.Event.addEvent( AM.DOM.first(editorTD[num]), 'click', function( event ) {
                var targetId = AM.DOM.first(editorTD[num]).id;
                switch ( targetId ) {
                    case "image":
                        doImg();
                        break;
                    case "url":
                            doURL();
                        break;
                    default:
                        doStyle(targetId);
                        break;
                }
            });
        }
    }




    var cur = null

    function hook(e) {
//        e = e || window.event;
//        e = AM.Event.getEvent(e);
        // Получаем адаптированный объект "е" (e.pageY, e.pageX, e, e.which)
        e = AM.Event.fixEventMouse(e);
//        var el = ( e.srcElement || e.target ).parentNode.parentNode;
        var elframe = AM.DOM.$('iframe_redactor');
        var el = AM.DOM.$('editorIFrame');
        cur = { 'el': el, 'elframe': elframe, 'x': e.pageX - el.offsetWidth, 'y': e.pageY - el.offsetHeight }
    }
    function unhook(e) {
        if( cur )
            cur = null;
    }
    function move(e) {
        if( !cur )
            return;
//        e = e || window.event;
        e = AM.Event.fixEventMouse(e);
        with( cur ) {
            var nx = e.pageX - x;
            var ny = e.pageY - y;

            if( nx < 700 ) nx = 700;
            if( nx > 700 ) nx = 700;
            if( ny < 200 ) ny = 200;

//            el.style.width = nx + 'px';
            el.style.height = ny  + 'px';
            elframe.style.height = ny  + 'px';
        }
        (e.preventDefault) ? e.preventDefault() : e.returnValue = false;
    }

    AM.Event.addEvent(document, 'mouseup', function(e) {
//        console.log('mouseup');
        unhook(e);
    });
    AM.Event.addEvent(document, 'mousemove', function(e) {
//        console.log('mousemove');
        move(e);
    });
    AM.Event.addEvent(document, 'dragstart', function(e) {
//        console.log('dragstart');
        return false;
    });
    AM.Event.addEvent(editorResize, 'mousedown', function(e) {
//        console.log('mousedown');
        hook(e);
    });
//    AM.Event.addEvent(editorResize, 'mouseout', function(e) {
////        console.log('mouseout');
//        unhook(e);
//    });


}); // End of window.onload






//function holdMouse( e ) {
//    var event = AM.Event.getEvent( e );
//    var target = AM.Event.getTarget( event );
//    console.log(target);
//}



function hideOverlay(){
    AM.DOM.hide(AM.DOM.$("overlay"));
    AM.DOM.hide(AM.DOM.$("modal"));
}
function showOverlay(){
    var over = AM.DOM.$("overlay");
    AM.DOM.fadeIn(over, 50, 10);
}
function showForm(){
    var img = AM.DOM.$("modalContent");
    if(img.firstChild){
        img.removeChild(img.firstChild);
    }
    var form = '<iframe style="display: none;" id="uploadFrame" name="uploadFrame"></iframe>' +
        '<form class="main-modal shadowed rounded" enctype="multipart/form-data" action="upload.php" target="uploadFrame" method="post" id="uploadForm">'+
        '<fieldset>'+
        '<legend>Загрузить изображение</legend>'+
        '<div class="two"><label for="filename">Выберите файл</label><input type="file" name="filename" id="filename" /></div>'+
        '<p>Максимальный размер файла: 2.0 MB. </p>' +
        '<p>Изображение будет сжато до размера 450px в ширину или 600px в высоту. </p>'+
        '<div class="two"><label for="submit"></label><input type="submit" value="Отправить &rarr;" id="submit" /></div>'+
        '</fieldset>'+
        '</form>';

    img.innerHTML=form;
    AM.DOM.fadeIn(modal, 100, 10);
}

function showFormUrl(){
    var img = AM.DOM.$("modalContent");
    if(img.firstChild){
        img.removeChild(img.firstChild);
    }
    var form = '<iframe style="display: none;" id="uploadUrlFrame" name="uploadUrlFrame"></iframe>' +
        '<form class="main-modal shadowed rounded" action="upload.php" target="uploadUrlFrame" method="post" id="uploadUrlForm">'+
        '<fieldset>'+
        '<legend>Вставить ссылку</legend>'+
        '<div class="two"><label for="url">Введите адрес ссылки</label><input type="text" name="url" id="url" value="http://" /></div>'+
        '<div class="two"><label for="submit"></label><input type="submit" value="Вставить &rarr;" id="submit" /></div>'+
        '</fieldset>'+
        '</form>';

    img.innerHTML=form;
    AM.DOM.fadeIn(modal, 100, 10);
}


function openModal( param ){
    showOverlay();
    switch( param ) {
        case 'image':
            showForm();
            break;
        case 'url':
           showFormUrl();
            break;
    }

    return false;
}


function doStyle(style) {
    var theIframe = AM.DOM.$('iframe_redactor'),
        doc = theIframe.contentWindow.document || theIframe.contentDocument;
    doc.execCommand(style, false, null);
    theIframe.focus();
}



function doURL() {
    openModal( 'url' );
}

function doImg() {
    openModal( 'image' );
}



function uploadSuccess( path ) {
    var theIframe = AM.DOM.$('iframe_redactor'),
        doc = theIframe.contentWindow.document || theIframe.contentDocument;
    doc.execCommand('InsertImage', null, path );
    theIframe.focus();
    hideOverlay();
}

function uploadUrlSuccess( url ) {
    var theIframe = AM.DOM.$('iframe_redactor'),
        doc = theIframe.contentWindow.document || theIframe.contentDocument;
    if( url === 'error' ) {
        hideOverlay();
        theIframe.focus();
        return;
    }
    doc.execCommand('createlink', null, url );
    theIframe.focus();
    hideOverlay();
}