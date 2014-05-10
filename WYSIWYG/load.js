/**
 * Created with JetBrains PhpStorm.
 * User: zhalnin
 * Date: 10/05/14
 * Time: 10:09
 * To change this template use File | Settings | File Templates.
 */

AM.Event.addEvent(window, 'load', function() {
    try {

        if( AM.DOM.$('iframe_redactor') != null ) {
            var theIframe = AM.DOM.$('iframe_redactor'),
                doc = theIframe.contentWindow.document || theIframe.contentDocument,
                editorTR = AM.DOM.$('editorTR'),
                editorTD = AM.DOM.tag('td', editorTR),
                editorResize = AM.DOM.$('editorResize'),
                wysiwyg_toolbar = AM.DOM.$('wysiwyg_toolbar'),
                j, lenj,
                overlay = document.createElement("div");


            for( j = 0, lenj = editorTD.length; j < lenj; j++ ) {
                with( { num: j }) {
                    AM.Event.addEvent( AM.DOM.first(editorTD[num]), 'click', function( event ) {
                        AM.Event.stopDefault( event );
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
                            case "emoticon":
                                doEmoticon(getX, getY);
                                break;
                            default:
                                doStyle(targetId);
                                break;
                        }
                    });
                }
            }
        //                new DragObject( editorResize, wysiwyg_toolbar, theIframe );
            new DragMove( wysiwyg_toolbar );
        }

        var wysiwyg = new WysiwygObject();

        overlay.id = "overlay";
        overlay.onclick = wysiwyg.hideOverlay;
        AM.DOM.append(document.body, overlay);


        var editor_span = AM.DOM.$('editorSpan'),
            modal_preview = document.createElement("div");

        modal_preview.id = "modal_preview";
        AM.DOM.attr( modal_preview, 'class', 'modal_preview' );
        modal_preview.innerHTML = '<div id="modalPreviewTitle">Предпросмотр</div>'+
            '<div id="modalPreviewContent"></div>';
        document.body.appendChild(modal_preview);

        var modal = document.createElement("div");
        modal.id = "modal";
        modal.innerHTML = '<div id="modalContent"></div>' +
            '<div id="modalTitle"></div>';
        document.body.appendChild(modal);


        (function() {
            setTimeout( function() {
                var iframes = document.getElementsByTagName('iframe');
                for (var j = 0, leni = iframes.length, doc; j < leni; ++j) {
                    doc = iframes[j].contentDocument || iframes[j].contentWindow.document;
                    doc.designMode = "On";
                }

            }, 1000 );
        }());

        // если скроллим, то экран "ожидания" оптимизируется по всему экрану
        AM.Event.addEvent(document, 'scroll', function(event) {
            adjustAllOverlay();
        } );

    } catch( ex ) {
        consoleLog( ex );
    }

});

