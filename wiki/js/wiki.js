/**
 * Created by JetBrains PhpStorm.
 * User: zhalnin
 * Date: 17.05.12
 * Time: 9:34
 * To change this template use File | Settings | File Templates.
 */
// Получение имени теущей страницы
var $s = window.location.search;
$s = $s.substr(1,$s.length);

// Определение, предоставлен ли номер правки, и если
// предоставлен, то запомнить его ID
var $r = false;

// Правки предоставляются в формате
// ?Title&RevisionID
var tmp = $s.split("&");
if(tmp.length > 1){
    $s = tmp[0];
    $r = tmp[1];
}

// Если страница не предоставлена, переход на начальную страницу
if(!$s) window.location = "?HomePage";

// Установка имени базы данных
var db = "wiki";

// Нужно дождаться окончания загрузки DOM
$(document).ready(function(){
    var test = [];
    // Установка заголовка страницы
    document.title = $s;
    $("h1").html($s);
    test.push($s);
    // Загрузка всех wiki-правок
    reload();

    // Если есть клик по ссылке 'edit page'
    $("#edit").click(showForm);

    // Когда пользователь отправляет новую ревизию
    $("#post form").submit(function(){
        // Получаем имя автора
        var author = $("#author").val();
        test.push(author);
        // Получаем текст
        var text = $("#text").val();

        // Рендерим содержимое
        $("#content").html(textile(text));
       var content = $("#content").html(textile(text));
        test.push(content);
        // Инициализируем текущую ревизию временем
        // (для подсветки)
        $r = (new Date()).getTime();
        test.push($r);
        // Вставляем ревизию в базу данных
        sqlExec("INSERT INTO", [$s,author,text,$r], reload);
        
        return false;
    });

    // Если пользователь кликнул на 'cancel'
    // внутри поля редактирования
    $("#cancel").click(showContent);

});

// Отображение текущей версии правки
function showContent(){
    // Отображение ссылки на редактирование
    $("#edit,#cancel").css("display","inline");

    // Скрыть область редактирования
    $("#post").hide();

    // Отображение содержимого
    $("#content").show();
    return false;
}

// Отображение формы редактирования текущего варианта правки
function showForm(){
    // Скрытие ссылки на редактирование
    $("#edit").hide();

    // Отображение области редактирования
    $("#post").show();

    // Скрытие содержимого
    $("#content").hide();
    return false;
}


// Загрузка всех правок из базы данных
function reload(t){
    // Запрос всех правок
    sqlExec("SELECT * FROM", [$s], function(data){
        var mysql = JSON.parse(data);
        // Если для этой wiki-страницы существуют правки
        if( mysql.length > 0){
            if(!$r) $r = mysql[0].date;

            // Отображение wiki-страницы
            showContent();

            // Отображение всех правок
            $("#side ul").html('');

            // Проход по всем правкам
            for(var i = 0;i < mysql.length; i++){

                // Если эта правка является текущей отображаемой правкой
                if(mysql[i].date == $r){

                    // Отображение правки
                    $("#content").html(textile(mysql[i].content));

                    // Включение возможности редактирования
                    // содержимого правки
                    $("textarea").val(mysql[i].content);
                }

                // Получение реального объекта данных
                var d = new Date(parseInt(mysql[i].date));

                // Определение, была ли правка сделана в течение
                // последних суток, или нет
                if(d.getTime() > (new Date()).getTime() - (3600 * 24000)){
                    // Если да, формирование приемлемого отображения
                    // времени создания в формате am/pm
                    d = d.getHours() >= 12 ?
                        (d.getHours() != 12 ? d.getHours() - 12 : 12 )
                        + " pm" :
                        d.getHours() + " am";

                // В противном случае отображение месяца и дня
                // правки
                }
                else{
                    var a = d.toUTCString().split(" ");
                    d = a[2] + " " + d.getDate();
                }

                // Добавление правки в список правок
                $("#side ul").append("<li class='" + ( $r == mysql[i].date ? "cur" : "")
                    + "'><a href='?" + $s + ( i > 0 ? "&" + mysql[i].date : "" )
                            + "'>" + d + "</a> by " + mysql[i].author + "</li>");
            }
        // В противном случае эта страница правке никогда не подвергалась
        }
        else{
            // Отображение этого обстоятельства на панели правки
            $("#rev").html("<li>No Revisions.</li>");

            // Скрытие элементов управления редактированием
            $("#edit, #cancel").hide();

            // Отображение исходной формы редактирования
            showForm();
        }
    });
}