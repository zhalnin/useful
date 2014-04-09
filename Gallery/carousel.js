/**
 * Created with JetBrains PhpStorm.
 * User: zhalnin
 * Date: 02/02/14
 * Time: 21:11
 * To change this template use File | Settings | File Templates.
 */

/**
*  За счет overflow: hidden выполняем прокрутку.
*  Добавляем текущий элемент в конец галереи (appendChild),
*  а первый исчезает
*/
addEvent(window, "load", function() {
    try{
        var gal = tag("ul"),
            next_arrow = id('next_arrow'),
            prev_arrow = id('prev_arrow'),
            galleryUl = id('galleryUl'),
            position = 0,// начальная позиция в ленте
            count = 2,// количество изображений, на которое сдвигаем ленту
            width = 140,// ширина изображения в ленте
            countIm = 7,// количество изображений, которые помещаются в ленте
            galList = tag('li',galleryUl),// коллекция элементов LI в элементе UL
            countImg = galList.length;// количество элементов LI


        /**
         * Способ 1
         */
//        addEvent(prev_arrow, 'click', function() {
//            if(position >= 0) {
//                return false;
//            }
//            position = Math.min(position + width * count,0);
//            galleryUl.style.marginLeft = position+"px";
//            return false;
//        });
//
//        addEvent(next_arrow, 'click', function(){
//
//            var ostatok = ( countIm - count ) * width;
//
//
//           if(position <= -(width*(countImg-count)) ) {
//               return false;
//           }
//            position = Math.max( position - width * count, -width*(countImg-count)+ostatok );
////            position = position - width * count;
//            galleryUl.style.marginLeft = position + "px";
//            return false;
//        });


        /**
         * Способ 2
         */
    addEvent(next_arrow, 'click', function() {
        if( first( gal[0] ) ) {
        var curF = first( gal[0] );
        remove(curF);
        var curFT = curF.cloneNode(true);
        append(gal[0],curFT);
        }
    });

    addEvent(prev_arrow, 'click', function() {
        if( last( gal[0] ) ) {
        var curL = last( gal[0] );
        remove(curL);
        var curLT = curL.cloneNode(true);
        before(gal[0], first(gal[0]),curLT);

        }
    });

    } catch( e ){
        console.log(e.message);
    }


});
