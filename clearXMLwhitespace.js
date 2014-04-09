
function cleanWhitespace(element)
{
    // Если element не предоставлен, работать со всем HTML-документом
//    element = element || document;
    element = element ? element : document;
//    //console.log(element.nodeName);
    // В качестве отправной точки использовать первый дочерний узел
    var cur = element.firstChild;
//    //console.log(cur.nodeName);
    // Действовать, пока не закончатся дочерние узлы
    while( cur != null)
    {
        // Если узел текстовый, и не содержит ничего, кроме пустого
        // пространства
//        //console.log(cur.nodeName);
        if( cur.nodeType == 3 && !/\S/.test(cur.nodeValue))
        {
//            //console.log(element.nodeName);
            // Удалить текстовый узел
            element.removeChild(cur);
        }
        // А если это элемент
        else if(cur.nodeType == 1)
        {
            // осуществить рекурсивный вызов вниз по документу
            cleanWhitespace(cur);
        }

        cur = cur.nextSibling; // перемещение через дочерние узлы
//        //console.log(cur.nodeName);
    }
}
