/**
 * Created by JetBrains PhpStorm.
 * User: zhalnin
 * Date: 11.05.12
 * Time: 10:41
 * To change this template use File | Settings | File Templates.
 */
domReady(function(){
    // Скрываем всплывающий результат
    hide(id("results"));

    // Отслеживаем уже введенных имен пользователей
    var doneUsers = {};

    // Отслеживание выбранного на данный момент пользователя
    var curPos;

//    // Создание изображения индикации загрузки
//    var img = document.createElement("img");
//    img.src = "icons/indicator.gif";
//    img.id = "qloading";
//    // и добавление его к документу сразу за полем ввода
//    id("q").parentNode.insertBefore(img, id("q"));
//    // Создание области отображения результатов
//    var div = document.createElement("div");
//    div.id = "results";
//    div.innerHTML = "<div class='suggest'>Suggestions:</div><ul></ul>";
//    // И добавление ее за полем ввода
//    id("q").parentNode.appendChild(div);

    // Отслеживание ввода в поле
    id("q").onkeypress = function(e){
        // Получение всех пользователей из набора результатов
         var li = id("results").getElementsByTagName("li");
        // Если нажата клавиша [TAB] или [Enter]
        if(e.keyCode == 9 || e.keyCode == 13){
            // Перезапуск списка текущих пользователей
            loadDone();
            // Если текущий выбранный пользователь отсутствует в списке
            // выбранных, добавление его к полю ввода
            if(!doneUsers[curPos.id])
                addUser(curPos);
            // Отключение обычной реакции на нажатие клавиши
            e.preventDefault();
            return false;
        // Если нажата клавиша вниз
        } else if(e.keyCode == 40)
            // Выбор следующего пользователя, или первого пользователя
            // если мы находимся в конце списка
            return updatePos(curPos.nextSibling || li[0]);
        else if(e.keyCode == 38)
            // выбор предыдущего пользователя, или последнего пользователя
            // если мы находимся в начале списка
            return updatePos(curPos.previousSibling || li[li.length - 1]);
    };

    // Инициализация задержки проверки ввода в поле
    delayedInput({
        // Прикрепление к полю текстового ввода
        elem: id("q"),

        // Мы намереваемся приступить к поиску только после ввода
        // одного символа
        chars: 1,

        // Когда текстовое поле теряет фокус, закрыть всплывающие результаты
        focus: true,

        // Обработка момента открытия всплывающего результата
        open: function(q, open){
            // Извлечение последнего слова из списка слов, разделенных
            // запятыми
            var w = trim(q.substr(q.lastIndexOf(',')+1, q.length));

            // Обеспечение того, что мы работаем как минимум со словом
            if( w ){
                // Отображение анимации, свидетельствующей о загрузке
                show(id("qloading"));

                // Убеждаемся, что пользователь не выбран
                curPos = null;

                // Получаем элемент UL, который содержит результаты
                var results = id("results").lastChild;

                // и его очистка
                results.innerHTML = "";
                
                // Посылаем запрос новых данных
                ajax({
                    // Создание простого GET-запроса к
                    // CGI-сценарию, возвращаемому
                    // HTML-блок с LI-элементами
                    type: "GET",

//                    url: "auto.cgi?q="+w,
                    url: "auto.php?q="+w,

                    // Отслеживание поступления HTML
                    onSuccess: function(html){
                        // Его вставка в UL резултатов
                        results.innerHTML = html;

                        // И сокрытие загрузочной анимации
                        hide(id("qloading"));

                        // Повторная инициализация списка получаемых
                        // имен пользователей
//                        loadDone();

                        // Последовательный перебор каждого
                        // возвращенного имени пользователя
                        var li = results.getElementsByTagName("li");
                        for(var i = 0; i < li.length; i++){
                            // Если мы уже добавили пользователя
                            // удаление связанного с ним элемента LI
                            if(doneUsers[li[i].id])
                                results.removeChild(li[i--]);
                            // Иначе привязка события к LI с именем
                            // пользователя
                            else{
                                    // Как только указатель мыши
                                    // пользователя проходит над LI,
                                    // установка связанного с ним имени
                                    // текущим именем пользователя
                                    li[i].onmouseover = function(){
                                        updatePos(this);
                                    };
                                    // При щелчке на имени пользователя
                                    li[i].onclick = function(){

                                        // Добавление имени в поле ввода
                                        addUser(this);
                                        // и возврат фокуса на поле ввода
                                        id("q").focus();
                                    };
                            }
                        }
                        // Проход по списку имен пользователей
                        li = results.getElementsByTagName("li");
                        // Если имен не осталось (они все уже добавлены)
                        if(li.length == 0)
                            // скрытие результатов
                            hide(id("results"));
                        else{
                            // Добавление к каждому оставшемуся
                            // элементу имен пользователей классов
                            // 'odd', чтобы придать списку
                            // "полосатый" вид
                            for(var i = 1; i < li.length; i += 2)
                                addClass( "odd",li[i]);
                            // Установка текущего выбранного имени
                            // пользователя на первый элемент списка
                            updatePos(li[0]);
                            // И отображение результатов
                            show(id("results"));
                        }
                    }
                });
            }
        },
        // Теперь должны быть закрыть всплывающие результаты
        close: function(){
            // Скрытие подборки результатов
            hide(id("results"));
        }
    });

    function trim(s){
        return s.replace(/^\s+/,"").replace(/\s+$/,"");
    }

    // Изменение подсветки текущего выбранного имени пользователя
    function updatePos(elem){
        // Обновление позиции текущего выбранного элемента
        curPos = elem;

        // Получение всех LI-элементов с именами пользователей
        var li = id("results").getElementsByTagName("li");

        // Удаление класса 'cur' из текущего выбранного элемента
        for(var i = 0; i < li.length; i++)
            removeClass("cur", li[i]);
//            removeClass("cur",li[i]);

        // И добавление подсветки на текущий элемент имени
        // пользователя
        addClass("cur",curPos);

        return false;
    }

    // Повторная инициализация списка имен пользователей, который уже
    // добавлен пользователем в поле ввода
    function loadDone(){
        doneUsers = {};

        // Проход по списку имен пользователей (разделенных запятыми)
        var users = id("q").value.split(',');

        for(var i = 0; i < users.length; i++){
            // Сохранение имени пользователя (в качестве ключа) в
            // хэш-объекте
            doneUsers[trim(users[i].toLowerCase())] = true;
        }
    }

    // Добавление имени пользователя к полю ввода текста
    function addUser( elem ){
        alert("3");
        // Текстовое значение из поля ввода текста
        var v = id("q").value;

        // Добавление имени пользователя в конец содержимого поля ввода,
        // обеспечение его отделения знаком запятой
        id("q").value = (v.indexOf(',') >= 0 ? v.substr(0, v.lastIndexOf(',') + 2) : '') + elem.id + ", ";
        // Добавление имени пользователя к основному списку
        // (избавляющего от необходимости полной перезагрузки списка)
        doneUsers[elem.id] = true;
        // Удаление li-элемента с именем пользователя
        elem.parentNode.removeChild(elem);
        // и сокрытие списка результатов
        hide(id("results"));
    }
});