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
        wysiwyg_toolbar = AM.DOM.$('wysiwyg_toolbar');


    var wysiwyg = new WysiwygObject();
    var modal = document.createElement("div");
    modal.id = "modal";
    modal.innerHTML = '<div id="modalTitle"></div>'+
        '<div id="modalContent"></div>';
    document.body.appendChild(modal);

    var editor_span = AM.DOM.$('editorSpan');
    var modal_preview = document.createElement("div");
    modal_preview.id = "modal_preview";
    AM.DOM.attr( modal_preview, 'class', 'modal_preview' );
    modal_preview.innerHTML = '<div id="modalPreviewTitle">Предпросмотр</div>'+
        '<div id="modalPreviewContent"></div>';
    document.body.appendChild(modal_preview);

    var modal_submit = document.createElement("div");
    modal_submit.id = "modal_submit";
    AM.DOM.attr( modal_submit, 'class', 'modal_submit' );
    modal_submit.innerHTML = '<div id="modalSubmitTitle">Успех</div>'+
        '<div id="modalSubmitContent"></div>';
    document.body.appendChild( modal_submit );



    var overlay = document.createElement("div");
    overlay.id = "overlay";
    overlay.onclick = wysiwyg.hideOverlay;
    document.body.appendChild(overlay);


    doc.designMode = "On";


    for( i = 0, len = editorTD.length; i < len; i++ ) {
//        if( AM.DOM.first(editorTD[i]).tagName == 'A' ) {
        with( { num: i }) {
            AM.Event.addEvent( AM.DOM.first(editorTD[num]), 'click', function( event ) {
                var getX = AM.Position.getX(event),
                    getY = AM.Position.getY(event),
                    targetId = AM.DOM.first(editorTD[num]).id;

                switch ( targetId ) {
                    case "uploadImage":
                        doUploadImg(getX, getY);
                        break;
                    case "url":
                        doURL(getX, getY);
                        break;
                    case "image":
                        doImg(getX, getY);
                        break;
                    default:
                        doStyle(targetId);
                        break;
                }
            });
        }
    }


    new DragObject( editorResize, wysiwyg_toolbar, theIframe );

    AM.Event.addEvent(document, 'scroll', function(event) {
        adjustAllOverlay();
    } );

}); // End of window.onload


/**
 * Перепозиционирование затемнения на весь экран
 */
function adjustAllOverlay() {
    if( AM.DOM.$("overlay") != undefined ) {
        // Обнаружение затемнения
        var overl = AM.DOM.$("overlay");
        // Установка его размеров по высоте и ширине текущей страницы
        // (что будет полезным при использовании прокрутки)
        overl.style.height = AM.Position.scrollY() + AM.Position.windowHeight()+ "px";
        overl.style.width = AM.Position.scrollX() + AM.Position.windowWidth()+"px";
    }
}


function WysiwygObject() {

    this.theIframe = function() {
        return AM.DOM.$('iframe_redactor');
    };
    this.doc = function() {
        return this.theIframe().contentWindow.document || this.theIframe().contentDocument;
    };
    this.hideOverlay = function(){
        AM.DOM.hide(AM.DOM.$("overlay"));
        AM.DOM.hide(AM.DOM.$("modal"));
        AM.DOM.hide(AM.DOM.$("modal_preview"));
        AM.DOM.hide(AM.DOM.$("modal_submit"));
    };
    this.showOverlay = function(){
        var over = AM.DOM.$("overlay");
        AM.DOM.fadeIn(over, 50, 10);
    };
    this.openModal = function( param, x, y ){
        this.showOverlay();
        switch( param ) {
            case 'uploadImage':
                this.showFormUploadImage(x,y);
                break;
            case 'url':
                this.showFormUrl(x,y);
                break;
            case 'image':
                this.showFormImage(x,y);
                break;
            case 'preview':
                this.showPreview();
                break;
        }

        return false;
    };
    this.showPreview = function() {
        var img = AM.DOM.$("modalPreviewContent");
        if(img.firstChild){
            img.removeChild(img.firstChild);
        }
        img.innerHTML=response;
        AM.DOM.fadeIn(modal_preview, 100, 10);
//        AM.DOM.$('showmsg').innerHTML = response;
    };

    this.showFormUploadImage = function(x, y){
        var modalUploadImage = AM.DOM.$('modal');
        AM.Position.setX(modalUploadImage, x);
        AM.Position.setY(modalUploadImage, y);

        var img = AM.DOM.$("modalContent");
        if(img.firstChild){
            img.removeChild(img.firstChild);
        }
        var form = '<iframe style="display: none;" id="uploadFrame" name="uploadFrame"></iframe>' +
            '<form class="main-modal shadowed rounded" enctype="multipart/form-data" action="upload.php" target="uploadFrame" method="post" id="uploadForm">'+
            '<fieldset>'+
            '<legend>Загрузить изображение</legend>'+
            '<div class="two"><label for="filename"><span>Выберите файл</span></label><input type="file" name="filename" id="filename" /></div>'+
            '<p>Максимальный размер файла: 2.0 MB. </p>' +
            '<p>Изображение будет сжато до размера 450px в ширину или 600px в высоту. </p>'+
            '<div class="two"><label for="submit"></label><input type="submit" value="Отправить" id="submit" /></div>'+
            '</fieldset>'+
            '</form>';

        img.innerHTML=form;
        AM.DOM.fadeIn(modal, 100, 10);
    };
    this.showFormUrl = function(x, y){

        var modalUrl = AM.DOM.$('modal');
        AM.Position.setX(modalUrl, x);
        AM.Position.setY(modalUrl, y);

        var img = AM.DOM.$("modalContent");
        if(img.firstChild){
            img.removeChild(img.firstChild);
        }
        var form = '<iframe style="display: none;" id="uploadUrlFrame" name="uploadUrlFrame"></iframe>' +
            '<form class="main-modal shadowed rounded" action="upload.php" target="uploadUrlFrame" method="post" id="uploadUrlForm">'+
            '<fieldset>'+
            '<legend>Вставить ссылку</legend>'+
            '<div class="two"><label for="url"><span>Введите адрес ссылки</span></label><input type="text" name="url" id="url" value="http://" /></div>'+
            '<div class="two"><label for="submit"></label><input type="submit" value="Вставить" id="submit" /></div>'+
            '</fieldset>'+
            '</form>';

        img.innerHTML=form;
        AM.DOM.fadeIn(modal, 100, 10);
    };

    this.showFormImage = function(x, y){

        var modalImage = AM.DOM.$('modal');
        AM.Position.setX(modalImage, x);
        AM.Position.setY(modalImage, y);

        var img = AM.DOM.$("modalContent");
        if(img.firstChild){
            img.removeChild(img.firstChild);
        }
        var form = '<iframe style="display: none;" id="insertImage" name="insertImage"></iframe>' +
            '<form class="main-modal shadowed rounded" action="upload.php" target="insertImage" method="post" id="insertImageForm">'+
            '<fieldset>'+
            '<legend>Прикрепить изображение</legend>'+
            '<div class="two"><label for="image"><span>Введите адрес изображения</span></label><input type="text" name="image" id="image" value="http://" /></div>'+
            '<div class="two"><label for="submit"></label><input type="submit" value="Вставить" id="submit" /></div>'+
            '</fieldset>'+
            '</form>';

        img.innerHTML=form;
        AM.DOM.fadeIn(modal, 100, 10);
    };
    this.uploadUrlSuccess = function( url ) {
        if( url === 'error' ) {
            this.hideOverlay();
            this.theIframe().focus();
            return;
        }
        this.doc().execCommand('createlink', null, url );
        this.theIframe().focus();
        this.hideOverlay();
    };

    this.uploadSuccess = function( path ) {
        this.doc().execCommand('InsertImage', null, path );
        this.theIframe().focus();
        this.hideOverlay();
    };

    this.uploadInsertImageSuccess = function( image, img_width, img_height ) {
        if( image === 'error' ) {
            this.hideOverlay();
            this.theIframe().focus();
            return;
        }
        this.doc().execCommand('insertHtml', false, "<img src="+image+" height="+img_height+" width="+img_width+" />" );
        this.theIframe().focus();
        this.hideOverlay();
    };

}





var wysiwyg = new WysiwygObject();


function doStyle(style) {
    wysiwyg.doc().execCommand(style, false, null);
    wysiwyg.theIframe().focus();
}

function doURL(x,y) {
    wysiwyg.openModal( 'url', x, y );
}

function doUploadImg(x,y) {
    wysiwyg.openModal( 'uploadImage', x, y );
}

function doImg(x,y) {
    wysiwyg.openModal( 'image', x, y );
}










function previewPost() {
    var modal_preview = AM.DOM.$('modal_preview'),
        editor_span = AM.DOM.$('editorSpan'),
        editor_span_width = AM.Position.getElementLeft(editor_span),
        editor_span_height = AM.Position.getElementTop(editor_span);

    AM.Position.setX(modal_preview, editor_span_width);
    AM.Position.setY(modal_preview, editor_span_height);
    var content = wysiwyg.doc().body.innerHTML;
    var result = content.replace(/&nbsp;/g,'');
    AM.Ajax.ajax({
        'method':'POST',
        'url': 'ajax_handle.php',
        'postParams': 'mode=preview&text='+result,
        'onSuccess': handleResultPreview
    });

}

function sendPost() {
    var modal_submit = AM.DOM.$('modal_submit'),
        editor_span = AM.DOM.$('editorSpan'),
        editor_span_width = AM.Position.getElementLeft(editor_span),
        editor_span_height = AM.Position.getElementTop(editor_span);
    AM.Position.setX(modal_submit, editor_span_width);
    AM.Position.setY(modal_submit, editor_span_height);
    var content = wysiwyg.doc().body.innerHTML;
    var result = content.replace(/&nbsp;/g,'');
    AM.Ajax.ajax({
        'method':'POST',
        'url': 'ajax_handle.php',
        'postParams': 'mode=submit&text='+result,
        'onSuccess': handleResult
    });
}

function handleResultPreview( response ) {
    wysiwyg.showOverlay();
    var img = AM.DOM.$("modalPreviewContent");
    if(img.firstChild){
        img.removeChild(img.firstChild);
    }
    var dialog_response = "<div class=\"dialog_response main-modal rounded shadowed\" style='width: 700px;'>"+response+"</div>";
    img.innerHTML=dialog_response;
    AM.DOM.fadeIn(modal_preview, 100, 10);

//    wysiwyg.openModal('preivew');
//    AM.DOM.$('showmsg').innerHTML = response;
}

function handleResult( response ) {
    wysiwyg.showOverlay();
    var img = AM.DOM.$("modalSubmitContent");
    if(img.firstChild){
        img.removeChild(img.firstChild);
    }
    var dialogResponseSubmit = "<div class=\"dialog_response main-modal rounded shadowed\" style='width: 700px;'>"+response+"</div>";
    img.innerHTML=dialogResponseSubmit;
    AM.DOM.fadeIn(modal_submit, 100, 10);

//    wysiwyg.openModal('preivew');
//    AM.DOM.$('showmsg').innerHTML = response;
}