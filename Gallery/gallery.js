/**
 * Created by JetBrains PhpStorm.
 * User: zhalnin
 * Date: 05.05.12
 * Time: 11:47
 * To change this template use File | Settings | File Templates.
 */

// Отслеживаем изображение, которое мы просматриваем
var curImage =  null,
    slideTimeout = [],               // Таймаут для запуска слайдшоу
    slideTimeout2 = [];

// Пятая часть
// Перепозиционирование галереи по центру видимой части страницы
// даже после ее прокрутки
function adjust() {
    // Обнаружение галереи
    var obj = id("gallery");
    // Определение существования галереи
    if(!obj) return;

    var w = getWidth(obj),      // Определение ее текущей ширины
        h = getHeight(obj),     // Определение ее текущей высоты
        t,                      // Вертикальное позиционирование
        l;                      // Горизонтальное позиционирование

    // Вертикальное позиционирование контейнера по середине окна
    t = scrollY() + ( windowHeight() / 2 ) - ( h / 2 );
    // Но не выше верхней части страницы
    if(t < 0) t = 0;
    // Горизонтальное позиционирование контейнера по середине окна
    l = scrollX() + ( windowWidth() / 2 ) - ( w / 2 );
    // Но не левее, чем левый край страницы
    if(l < 0) l = 0;
    // Установка выверенной позиции элемента
    setY(obj, t);
    setX(obj, l);
}


// Перепозиционирование затемнения на весь экран
function adjustOverlay() {
    if( id("overlay") != undefined ) {
        // Обнаружение затемнения
        var overl = id("overlay");
        // Установка его размеров по высоте и ширине текущей страницы
        // (что будет полезным при использовании прокрутки)
        overl.style.height = scrollY() + windowHeight()+ "px";
        overl.style.width = scrollX() + windowWidth()+"px";
    }
}


//Восьмая часть
// Запуск демонстрации всех изображений, находящихся в конкретной галерее
function startShow(obj) {
    var elem = tag("li",obj),       // Определение местонахождения всех отдельных изображений галереи
        gallery = id("gallery"),    // Определение местонахождения всей демонстрируемой галереи
        overlay = id("overlay"),    // Определение местонахождения затемнения
        i,                          // Итератор для изображений в галерее
        len,                        // Длина массива элементов
        j,                          // Итератор для интервалов
        lenj;                       // Длина всех интервалов

    // Последовательный перебор всех, принадлежащих галереи изображений
    for( i = 0, len = elem.length; i < len; i++ ) {
        result = function( num ) {
            // Запоминание, на какой текущий элемент была ссылка
            var cur = elem[num];
            // Мы собираемся показывать новое изображение каждые 5 сек
            slideTimeout[num] = setTimeout(function() {
                // Отображение отдельного изображения
                showImage(cur);
//                console.log(cur);
                // И начала его растворения после 3,5 секунд
                // (со временем растворения в 1 секунду)
                slideTimeout2[num] = setTimeout(function() {
                    fadeOut(gallery, 0, 10);
                }, 3500);
            }, i * 5000);






            // Добавляем события для удаления счетчиков
            addEvent(overlay, 'click', function(){
                for(j = 0,lenj = slideTimeout.length; j < lenj; j++) {
                    clearTimeout(slideTimeout[j]);
                    clearTimeout(slideTimeout2[j]);
                }
            });
        }(i);
    }

    // А затем скрытие затемнения, когда все закончится
    setTimeout( function() {
        hideOverlay();
    }, 5000 * elem.length);
    // Но появление затемнения при запуске демонстрации
    showOverlay();
}


// Третья часть
// Скрытие затемнения и текущей галереи
function hideOverlay() {
    // Обеспечение перезапуска значения и галереи
    curImage = null;
    // и скрытия затемнения и галереи
    hide(id("overlay"));
    hide(id("gallery"));
}


// Проявление затемнения
function showOverlay() {
    // Обнаружение затемнения
    var over = id("overlay");
    // Установка его размеров по высоте и ширине текущей страницы
    // (что будет полезным при использовании прокрутки)
    over.style.height = windowHeight()+ "px";
    over.style.width = windowWidth()+"px";
    // и проявление
    fadeIn(over, 50, 10);
}


// Шестая часть
// Обнаружение и отображение предыдущего изображения
function prevImage() {
    // Определение местоположения и демонстрация предыдущего изображения
    // галереи
    showImage(prev(curImage));
    // Блокировка обычных действий ссылки
    return false;
}
// Обнаружение и отображение следующего изображения
function nextImage() {
    // Определение местоположения и демонстрация следующего изображения
    // галереи
    showImage(next(curImage));
    // Блокировка обычных действий ссылки
    return false;
}



// Четвертая часть
// Отображение текущей галереи изображений
function showImage(cur) {
    // Запоминание текущего рабочего изображения
    curImage = cur;

    var gallery = id("gallery"),        // Обнаружение основной галереи
        img = id("gallery_image");      // Обнаружение изображения галереи
    // Удаление изображения, если таковое уже было отображено
    if(img.firstChild)
        img.removeChild(img.firstChild);
    // И добавление вместо него нового изображения
    img.appendChild(cur.firstChild.cloneNode(true));
    // установка надписи изображения галереи в качестве содержимого
    // аргумента 'alt' обычного изображения
    id("gallery_title").innerHTML = first(first(cur)).alt;
        // Скрытие ссылки Следующее, если мы дошли до конца показа
    if(!next(cur)) {
        hide(id("gallery_next"));
        hide(id("gallery_right"));
//        hide(id("next_arrow"));
    }
    // Если нет, обеспечение ее показа
    else {
        show(id("gallery_next"));
        show(id("gallery_right"));
//        show(id("next_arrow"));
    }
    // Скрытие ссылки Предыдущее, если мы дошли до начала показа
    if(!prev(cur)) {
        hide(id("gallery_prev"));
        hide(id("gallery_left"));
//        hide(id("prev_arrow"));
    }
    // Если нет, обеспечение ее показа
    else {
        show(id("gallery_prev"));
        show(id("gallery_left"));
//        show(id("prev_arrow"));
    }

    // Установка правильного класса (чтобы был получен правильный размер)
    gallery.className = cur.className;


    // Постепенное проявление
    fadeIn(gallery,100,10);
    // Обеспечение позиционирования галереи в правильном месте
    // экрана
    adjust();
}



// Ожидаем окончания загрузки документа перед внесение изменений
// в DOM
addEvent(window, 'load', function() {


    /* создание следующей DOM-структуры:
    <div id="overlay"></div>
    <div id="gallery">
        <div id="gallery_image"></div>
        <div id="gallery_prev"><a href="">&laquo; Предыдущее</a></div>
        <div id="gallery_next"><a href="">Следующее &raquo;</a></div>
        <div id="gallery_title"></div>
    </div> */


    var fragment = document.createDocumentFragment();

    // Вторая часть
    // Создание полупрозрачного затемнения
    var overlay = document.createElement("div");
    overlay.id = "overlay";
    //    overlay.setAttribute('id','overlay');
    // Обеспечение скрытия фона и галереи по щелчку на сером фоне
//    overlay.onclick = hideOverlay;
    addEvent(overlay,'click', function() {
        hideOverlay();
    });

    // Добавляем overlay к фрагменту
    fragment.appendChild(overlay);

    // Создание контейнера для всей галереи
    var gallery = document.createElement("div");
    gallery.id = "gallery";
    // И добавление в него всех управляющих контейнеров div
    gallery.innerHTML =
        '<div id="gallery_image"></div>'+
        '<div id="gallery_left"><a href="#"></a></div>'+
        '<div id="gallery_right"><a href="#"></a></div>'+
        '<div id="gallery_prev"><a href="">&laquo;&nbsp;Предыдущее</a></div>'+
        '<div id="gallery_next"><a href="">Следущее&nbsp;&raquo;</a></div>'+
        '<div id="gallery_title"></div>';

    // Добавляем gallery к фрагменту
    fragment.appendChild(gallery);

    // Добавляем фрагмент со всеми созданными элементами к документу
    document.body.appendChild(fragment);

    // Поддержка обработки каждой ссылки Следующее и Предыдущее
    // на которых был щелчок в пределах галереи
    id("gallery_next").onclick = nextImage;
    id("gallery_right").onclick = nextImage;
    id("gallery_prev").onclick = prevImage;
    id("gallery_left").onclick = prevImage;


    var g = hasClass("gallery","ul"),   // Обнаружение всех галерей на странице
        i,                              // итератор
        len,                            // длина массива найденных элементов
        j,                              // итератор
        lenj;                           // длина массива найденных элементов
    // Последовательный перебор всех галерей
    for(i = 0, len = g.length; i < len; i++)
    {
        // и обнаружение всех ссылок на демонстрируемые изображения
        var link = tag("a",g[i]);
        // Последовательный перебор ссылок на изображения
        for(j = 0, lenj = link.length; j < lenj; j++)
        {
            // Обеспечение, чтобы по щелчку на ссылке вместо перехода
            // к изображению осуществлялась демонстрация галереи
            // изображений
            link[j].onclick = function()
            {
                // Отображение серого фона
                showOverlay();
                // Отображение  изображения в галерее
                showImage(this.parentNode);
                // Блокировка обычных действий браузера по переходу на
                // изображение
                return false;
            };
        }
        // Добавление к галерее средств перехода в режиме демонстрации
        // изображений
        addSlideShow(g[i]);
    }

//    console.log();

});



// Седьмая часть
// Дополнительный навигационный элемент для запуска демонстрации
// изображений
function addSlideShow(elem) {
    // Мы собираемся создать некоторую дополнительную контекстную
    // информацию, сопровождающую демонстрацию

    // создание заголовка демонстрации и его контейнера
    var div = document.createElement("div");
    div.className = "slideshow";
    // Отображение  имени демонстрации на основе названия галереи
    var span = document.createElement("span");
    span.innerHTML = elem.title;
    div.appendChild(span);
    // Создание ссылки, позволяющей увидеть демонстрацию всех
    // изображений галереи
    var a = document.createElement("a");
    a.href = "";
    a.innerHTML = "&raquo; Просмотреть демонстрацию изображений";
    // Обеспечение запуска демонстрации по щелчку на ссылке
    a.onclick = function() {
        startShow(this.parentNode.nextSibling);
        return false;
    };
    // Добавление нового управляющего элемента и заголовка к странице
    div.appendChild(a);
    elem.parentNode.insertBefore(div, elem);
}



// Корректировка позиции галереи и подложки после каждого применения прокрутки страницы
// или изменения размеров окна браузера
addEvent(window,"resize", function() {
    adjust();
    adjustOverlay();
});
addEvent(window,"scroll", function() {
    adjust();
    adjustOverlay();
});
