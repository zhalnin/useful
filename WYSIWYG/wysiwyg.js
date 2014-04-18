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
        i, len;

    doc.designMode = "On";

    for( i = 0, len = editorTD.length; i < len; i++ ) {
        if( AM.DOM.first(editorTD[i]).tagName == 'A' ) {
            activeStatus[i] = false;
            (function(num){
                /**
                 * Меняем статус кнопки в редакторе: <span class='acitve'>
                 * Нажали - кнопка выделена, при повторном нажатии выделение снимается
                 * Необходимо для визуального восприятия того, что активировано редактирование
                 */
                AM.Event.addEvent( AM.DOM.first(editorTD[num]), 'click', function( event ) {
                    var target = AM.Event.getTarget( event );
                    if( activeStatus[num] == false ) {
                        AM.DOM.addClass( 'active', target );
                        activeStatus[num] = true;
                        theIframe.focus();
                    } else if( activeStatus[num] == true ) {
                        AM.DOM.removeClass( 'active', target);
                        activeStatus[num] = false;
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
