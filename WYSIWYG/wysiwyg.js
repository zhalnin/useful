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
        arrayTag = ['bold','italic','underline','strikethrough'],
        i, len;

    doc.designMode = "On";

    for( i = 0, len = editorTD.length; i < len; i++ ) {
        if( AM.DOM.first(editorTD[i]).tagName == 'A' ) {
            activeStatus[i] = '';
            (function(num){
                /**
                 * Меняем статус кнопки в редакторе: <span class='acitve'>
                 * Нажали - кнопка выделена, при повторном нажатии выделение снимается
                 * Необходимо для визуального восприятия того, что активировано редактирование
                 */
                AM.Event.addEvent( AM.DOM.first(editorTD[num]), 'click', function( event ) {
                    var target = AM.Event.getTarget( event );
                    for(var j=0, lenj=arrayTag.length; j < lenj; j++ ) {
                        // Проверяем, чтобы теги были из тех, которые должны "залипать" в редакторе
                        if( target.id === arrayTag[j] ) {
                            if( activeStatus[num] == '' ) {
                                AM.DOM.addClass( 'active', target );
                                activeStatus[num] = target.id;
                                theIframe.focus();
                            } else if( activeStatus[num] != '' ) {
                                AM.DOM.removeClass( 'active', target);
                                activeStatus[num] = '';
                                theIframe.focus();
                            }
                        }
                        theIframe.focus();
                    }
                });
            })(i);
        }
    }
});



function doStyle(style) {
    var theIframe = AM.DOM.$('iframe_redactor'),
        doc = theIframe.contentWindow.document || theIframe.contentDocument;
    doc.execCommand(style, false, null);
}
function doURL() {var mylink = prompt("Enter a URL:", "http://");
    var theIframe = AM.DOM.$('iframe_redactor'),
        doc = theIframe.contentWindow.document || theIframe.contentDocument;
    if ((mylink != null) && (mylink != "")) {
        doc.execCommand("CreateLink",false,mylink);
    }
}
