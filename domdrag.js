/**
 * Created by JetBrains PhpStorm.
 * User: zhalnin
 * Date: 23.04.12
 * Time: 14:13
 * To change this template use File | Settings | File Templates.
 */
// Полностью документированная библиотека Dom-Drag
var Drag =
{
    // текущий перетаскиваемый элемент
    obj: null,

    // функция инициализации для перетаскиваемого объекта
    // o - элемент, действующий в качестве описателя перетаскивания
    // oRoot - перетаскиваемый эелемент, если не определено другое,
    // описатель будет перетаскиваемым элементом.
    // minX, maxX, minY, maxY - минимальные и максимальные координаты,
    // разрешенные для элемента
    // bSwapHorzRef - переключатель горизонтальной системы координат
    // bSwapVertRef - переключатель вертикальной системы координат
    // fxMapper, fyMapper - функции для преобразования координат x и y
    // в другие координаты

    init: function(o, oRoot, minX, maxX, minY,
                   maxY, bSwapHorzRef, bSwapVertRef, fXMapper, fYMapper)
    {
        //console.log('init');
        // Отслеживание начала перетаскивания
        o.onmousedown = Drag.start;

        // Определение используемой системы координат
        o.hmode = bSwapHorzRef ? false : true;
        //console.log("o.hmode- "+ o.hmode);
        o.vmode = bSwapVertRef ? false : true;
        //console.log("o.vmode- "+ o.vmode);

        // Определение элемента, который служит описателем претаскивания
        o.root = oRoot && oRoot != null ? oRoot : o;
        //console.log("o.root- "+ o.root.nodeName);

        // Инициализация указанной системы координат
        if(o.hmode && isNaN(parseInt(o.root.style.left)))
            o.root.style.left = "0px";
        if(o.vmode && isNaN(parseInt(o.root.style.top)))
            o.root.style.top = "0px";
        if(o.hmode && isNaN(parseInt(o.root.style.right)))
            o.root.style.right = "0px";
        if(o.vmode && isNaN(parseInt(o.root.style.bottom)))
            o.root.style.bottom = "0px";

        // Проверка предоставления пользователем минимальных и
        // максимальных значений координат x и y
        o.minX = typeof minX != 'undefined' ? minX : null;
        //console.log("o.minX- "+o.minX);
        o.minY = typeof minY != 'undefined' ? minY : null;
        //console.log("o.minY- "+o.minY);
        o.maxX = typeof maxX != 'undefined' ? maxX : null;
        //console.log("o.maxX- "+o.maxX);
        o.maxY = typeof maxY != 'undefined' ? maxY : null;
        //console.log("o.maxY- "+o.maxY);

        // Проверка на существование любых заданных преобразователей
        // x и  y координат
        o.xMapper = fXMapper ? fXMapper : null;
        //console.log("o.xMapper- "+ o.xMapper);
        o.yMapper = fYMapper ? fYMapper : null;
        //console.log("o.yMapper- "+ o.yMapper);

        // Добавление оболочки для всех функций, определяемых пользователем
        o.root.onDragStart = new Function();
        //console.log('o.root.onDragStart- '+ o.root.onDragStart);
        o.root.onDragEnd = new Function();
        //console.log('o.root.onDragEnd- '+ o.root.onDragEnd);
        o.root.onDrag = new Function();
        //console.log('o.root.onDrag- ' + o.root.onDrag);
    },

    start: function(e)
    {
        //console.log("start");
        // Определение перетаскиваемого объекта
        var o = Drag.obj = this;
        //console.log("o- "+ o.nodeName);

        // Нормализация объекта события
        e = Drag.fixE(e);

        // Получение текущих координат x и y
        var y = parseInt(o.vmode ? o.root.style.top : o.root.style.bottom);
        //console.log("y- "+ y);
        var x = parseInt(o.hmode ? o.root.style.left : o.root.style.right);
        //console.log("x- "+ x)

        // Вызов функции пользователя с текущими координатами x и y
        o.root.onDragStart(x, y);

        // Запоминание начальной позиции указателя мыши
        o.lastMouseX = e.clientX;
        ////console.log("o.lastMouseX- "+ o.lastMouseX);
        o.lastMouseY = e.clientY;
        //console.log("o.lastMouseY- "+ o.lastMouseY);

        // Если используется система координат CSS
        if(o.hmode)
        {
            //console.log("o.hmode- "+o.hmode);
            // Установка min и max координат там, где они применяются
            if(o.minX != null) o.minMouseX = e.clientX - x + o.minX;
            //console.log("o.minX- " + o.minX);
            if(o.maxX != null) o.maxMouseX = o.minMouseX + o.maxX - o.minX;
            //console.log("o.maxX- " + o.maxX);
        // В противном случае применение  обычной математической системы
        // координат
        }
        else
        {
            if(o.minX != null) o.maxMouseX = - o.minX + e.clientX + x;
            //console.log("o.minX- "+o.minX);
            //console.log("o.maxMouseX- "+ o.maxMouseX);
            if(o.maxX != null) o.minMouseX = - o.maxX + e.clientX + x;
            //console.log("o.maxX- "+o.maxX);
            //console.log("o.minMouseX- "+o.minMouseX);
        }

        // Если используется система координат CSS
        if(o.vmode)
        {
            // Установка min и max координат тем, где они применяются
            if(o.minY != null) o.minMouseY = e.clientY - y + o.minY;
            //console.log('o.minY- '+ o.minY);
            //console.log("o.minMouseY- "+o.minMouseY);
            if(o.maxY != null) o.maxMouseY = o.minMouseY + o.maxY - o.minY;
            //console.log('o.maxY- '+ o.maxY);
            //console.log('o.maxMouseY- '+o.maxMouseY);
        // В противном случае применение обычной математической системы
        // координат
        }
        else
        {
            if(o.minY != null) o.maxMouseY = - o.minY + e.clientY + y;
            //console.log("o.minY- "+o.minY);
            //console.log("o.maxMouseY- "+o.maxMouseY);
            if(o.maxY != null) o.minMouseY = - o.maxY + e.clientY + y;
            //console.log("o.maxY- "+o.maxY);
            //console.log("o.minMouseY- "+o.minMouseY);
        }

        // отслеживание событий перетаскивания и завершения
        // перетаскивания
        document.onmousemove = Drag.drag;
        document.onmouseup = Drag.end;

        return false;
    },

    // Функция, предназначенная для отслеживания всех перемещений
    // указателя мыши в ходе события перетаскивания
    drag: function(e)
    {
        //console.log("drag");
        // Нормализация объекта события
        e = Drag.fixE(e);

        // получение нашей ссылки на перетаскиваемый элемент
        var o = Drag.obj;
        //console.log("o- "+ Drag.obj.nodeName);

        // получение позиции указателя мыши в пределах окна
        var ey = e.clientY;
        //console.log("ey- "+ey);
        var ex = e.clientX;
        //console.log("ex- "+ ex);

        // Получение текущих координат x и y
        var y = parseInt(o.vmode ? o.root.style.top: o.root.style.bottom);
        //console.log("y- "+y);
        var x = parseInt(o.hmode ? o.root.style.left : o.root.style.right);
        //console.log("x- "+x);
        var nx, ny;

        // Если была установлена минимальная позиция X, убедиться в том,
        // что она не пройдена
        if(o.minX != null) ex = o.hmode ?
            Math.max(ex, o.minMouseX) : Math.min(ex, o.maxMouseX);
        //console.log("MIN ex- "+ex);

        // Если была установлена максимальная позиция X, убедиться в том,
        // что она не пройдена
        if(o.maxX != null) ex = o.hmode ?
            Math.min(ex, o.maxMouseX) : Math.max(ex, o.minMouseX);
        //console.log("MAX ex- "+ex);

        // Если была установлена минимальная позиция Y, убедиться в том,
        // что она не пройдена
        if(o.minY != null) ey = o.vmode ?
            Math.max(ey, o.minMouseY) : Math.min(ey, o.maxMouseY);
        //console.log("MIN ey- "+ey);

        // Если была установлена максимальная позиция Y, убедиться в том,
        // что она не пройдена
        if(o.maxY != null) ey = o.vmode ?
            Math.min(ey, o.maxMouseY) : Math.max(ey, o.minMouseY);
        //console.log("MAX ey- "+ey);

        // Вычисление координат x и y последнего перемещения
        nx = x + ((ex - o.lastMouseX) * (o.hmode ? 1 : -1));
        //console.log("nx- "+nx);
        ny = y + ((ey - o.lastMouseY) * (o.vmode ? 1 : -1));
        //console.log("ny- "+ny);

        // и преобразование из с помощью x или y функции преобразования
        // координат (если таковая предоставлена)
        if(o.xMapper)
        {
            nx = o.xMapper(y);
            //console.log('o.xMapper- '+o.xMapper);
            //console.log('nx- '+ nx);
        }

        else if(o.yMapper)
        {
            ny = o.yMapper(x);
            //console.log('o.yMapper- '+ o.yMapper);
            //console.log('ny- '+ny);
        }

        // Установка для элемента новых x и y координат
        Drag.obj.root.style[o.hmode ? "left" : "right"] = nx + "px";
        //console.log("Drag.obj.root.style- " + nx +"px");
        Drag.obj.root.style[o.vmode ? "top" : "bottom"] = ny + "px";
        //console.log("Drag.obj.root.style- "+ ny+"px");

        // и запоминание последней позиции указателя мыши
        Drag.obj.lastMouseX = ex;
        //console.log("Drag.obj.lastMouseX- "+ ex);
        Drag.obj.lastMouseY = ey;
        //console.log("Drag.obj.lastMouseY- "+ ey);

        // Вызов пользовательской функции onDrag с текущими координатами
        // x и y
        Drag.obj.root.onDrag(nx, ny);

        return false;
    },

    // Функция, обрабатывающая завершение события перетаскивания
    end: function()
    {
        //console.log('end');
        // События мыши больше не отслеживать (поскольку перетаскивание
        // уже произошло)
        document.onmousemove =  null;
        document.onmouseup = null;

        // В конце перетаскивания вызов нашей специальной функции
        // onDragEnd с координатами элемента x и y
        Drag.obj.root.onDragEnd(
            parseInt(Drag.obj.root.style[Drag.obj.hmode ? "left" : "right"]),
            parseInt(Drag.obj.root.style[Drag.obj.vmode ? "top" : "bottom"])
        );
        // Больше не следим за объектом при перетаскивании
        Drag.obj = null;
    },

    // Функция, предназначенная для нормализации объекта события
    fixE: function(e)
    {
        //console.log("fixE")
        // Если объекта события не существует, значит это IE, и нужно
        // предоставить объект события IE
        if(typeof e == 'undefined') e = window.event;
        //console.log("e- "+ e);

        // Если свойство layer не установлено, получение
        // значений из эквивалентного свойства offset
        if(typeof e.layerX == 'undefined') e.layerX = e.offsetX;
        //console.log("e.layerX- "+ e.layerX);
        //console.log("e.offsetX- "+ e.offsetX);
        if(typeof e.layerY == 'undefined') e.layerY = e.offsetY;
        //console.log("e.layerY- "+ e.layerY);
        //console.log("e.offsetY- "+ e.offsetY);

        return e;
    }
};