/**
 * Created with JetBrains PhpStorm.
 * User: zhalnin
 * Date: 13/04/14
 * Time: 16:09
 * To change this template use File | Settings | File Templates.
 */



AM.Event.addEvent(window, 'load', function() {



    var theIframe = AM.DOM.$('iframe_redactor'),
        doc = theIframe.contentWindow.document || theIframe.contentDocument,
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
        with( { num: i }) {
            AM.Event.addEvent( AM.DOM.first(editorTD[num]), 'click', function( event ) {
                var targetId = AM.DOM.first(editorTD[num]).id;
                switch ( targetId ) {
                    case "uploadImage":
                        doUploadImg();
                        break;
                    case "url":
                        doURL();
                        break;
                    case "image":
                        doImg();
                        break;
                    default:
                        doStyle(targetId);
                        break;
                }
            });
        }
    }

    new DragObject( AM.DOM.$('editorResize' ), AM.DOM.$('wysiwyg_toolbar'), AM.DOM.$('iframe_redactor') );

}); // End of window.onload


function hideOverlay(){
    AM.DOM.hide(AM.DOM.$("overlay"));
    AM.DOM.hide(AM.DOM.$("modal"));
}
function showOverlay(){
    var over = AM.DOM.$("overlay");
    AM.DOM.fadeIn(over, 50, 10);
}
function showFormUploadImage(){
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

function showFormImage(){
    var img = AM.DOM.$("modalContent");
    if(img.firstChild){
        img.removeChild(img.firstChild);
    }
    var form = '<iframe style="display: none;" id="insertImage" name="insertImage"></iframe>' +
        '<form class="main-modal shadowed rounded" action="upload.php" target="insertImage" method="post" id="insertImageForm">'+
        '<fieldset>'+
        '<legend>Прикрепить изображение</legend>'+
        '<div class="two"><label for="image">Введите адрес изображения</label><input type="text" name="image" id="image" value="http://" /></div>'+
        '<div class="two"><label for="submit"></label><input type="submit" value="Вставить &rarr;" id="submit" /></div>'+
        '</fieldset>'+
        '</form>';

    img.innerHTML=form;
    AM.DOM.fadeIn(modal, 100, 10);
}


function openModal( param ){
    showOverlay();
    switch( param ) {
        case 'uploadImage':
            showFormUploadImage();
            break;
        case 'url':
            showFormUrl();
            break;
        case 'image':
            showFormImage();
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

function doUploadImg() {
    openModal( 'uploadImage' );
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

function uploadInsertImageSuccess( image, img_width, img_height ) {
    var theIframe = AM.DOM.$('iframe_redactor'),
        doc = theIframe.contentWindow.document || theIframe.contentDocument;
    if( image === 'error' ) {
        hideOverlay();
        theIframe.focus();
        return;
    }

    doc.execCommand('insertHtml', false, "<img src="+image+" height="+img_height+" width="+img_width+" />" );

    theIframe.focus();
    hideOverlay();
}

function previewPost() {

    var theIframe = AM.DOM.$('iframe_redactor'),
        doc = theIframe.contentWindow.document || theIframe.contentDocument,
        content = doc.body.innerHTML;
    AM.Ajax.ajax({
        'method':'POST',
        'url': 'ajax_handle.php',
        'postParams': 'mode=preview&text='+content,
        'onSuccess': handleResult
    });

}

function sendPost() {
    var theIframe = AM.DOM.$('iframe_redactor'),
        doc = theIframe.contentWindow.document || theIframe.contentDocument,
        content = doc.body.innerHTML;
    AM.Ajax.ajax({
        'method':'POST',
        'url': 'ajax_handle.php',
        'postParams': 'text='+content,
        'onSuccess': handleResult
    });
}

function handleResult( response ) {
    AM.DOM.$('showmsg').innerHTML = response;
}