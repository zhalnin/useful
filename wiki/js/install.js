/**
 * Created by JetBrains PhpStorm.
 * User: zhalnin
 * Date: 17.05.12
 * Time: 11:51
 * To change this template use File | Settings | File Templates.
 */
// Определяем имя базы данных
var db = "wiki";

// Ожидаем загрузки DOM
$(document).ready(function(){
    // Пробуем создать новую таблицу блога( если уже существует,
    // выдаст ошибку)
    sqlExec("CREATE TABLE wiki (title varchar(50), "+
            "author varchar(50), content text, date TIMESTAMP);", [], init);
});

// Обрабатываем инициализацию сайта после ответа на CREATE TABLE
function init(json){
    // Если таблица была создана, то это первый визит пользователя
    if(!json.error){
        // Проходим по id sample в блоге posts
        var total = $("#sample li").size();
        var cur = 0;
        $("#sample li").each(function(){
            // Получаем каждое название и текст
            var title = $("h2",this).text();
            var text = $("p",this).text();

            try
            {
                // и сохраняем каждый из них в базе данных
                sqlExec("INSERT INTO",
                    [title,"Anonymous",text,(new Date()).getTime()],
                    function(b){
                        // Не показываем их до тех пор, пока новый пост
                        // не будет загружен (избегаем мерцания)
                        if(++cur == total)
                            done();
                    });
            } catch (e )
            {
                alert("ERROR!");
            }
        });

    // Иначе пользователь уже заходил прежде
    // поэтому загружаем пост из базы данных
    } else{
        alert("already!!");
        done();
    }

}

// Done!
function done() {
    $("body").html("<h1>Installation Complete</h1>" +
        "<a href='./?HomePage'>Visit Your Wiki</a> ");
}