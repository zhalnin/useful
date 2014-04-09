/**
 * Created by JetBrains PhpStorm.
 * User: zhalnin
 * Date: 17.05.12
 * Time: 10:35
 * To change this template use File | Settings | File Templates.
 */
// Эта переменная требует обновления
// URL, по которому находится сценарий на стороне сервера
var apiURL = "api/php/index2.php";
//var apiURL = "api/perl/index.cgi";

// Некоторые заданные по умолчанию глобальные переменные
var sqlLoaded = function(){};

// Обработка больших SQL-отправлений
// Эта функция способна отправлять большие объемы данных
// (например, большие вставки - INSERT), но она может
// отправлять данные только на тот же сервер, с которым работает клиент

function sqlExec(q, p, callback){
    // Загрузка всех параметров в структурированный массив
    for(var i = 0; i < p.length; i++){
        switch (i){
            case 0:
                p[i] = { name: "title", value: p[i]};
                break;
            case 1:
                p[i] = { name: "author", value: p[i]};
                break;
            case 2:
                p[i] = { name: "content", value: p[i]};
                break;
            case 3:
                p[i] = { name: "date", value: p[i]};
                break;
            default:
                alert("Excuse me!");
        }

    }
    p.push({name: "callback", value: callback});

    
    // Включение имени базы данных
    p.push({name: "db", value: db});

    // и названия SQL-запроса, который нужно выполнить
    p.push({name: "sql", value: q});

    // Отправка запроса на сервер
    $.ajax({
        // POST к API URL
        type: "POST",
        url: apiURL,

        // Сериализация массива данных
        data: $.param(p),

        // Ожидается возвращение данных в формате JSON
        dataType: "html",

        // Ожидание успешного завершения запроса
        // Если пользователь определил функцию обратного вызова,
        // отправить ей данные
//        success: callback
        success: callback
    });

}