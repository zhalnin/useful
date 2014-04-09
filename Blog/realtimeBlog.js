/**
 * Created by JetBrains PhpStorm.
 * User: zhalnin
 * Date: 08.05.12
 * Time: 16:10
 * To change this template use File | Settings | File Templates.
 */
// Функция для обновления на лету из RSS-потока, основанного на формате XML

// Совершаем повторные попытки загрузить новое содержимое
// страницы через определенный интервал времени
setInterval(function(){
    // Загрузка публикации с использованием доступной нам функции ajax()
    ajax({
        // Мы запрашиваем простую веб-страницу, поэтому используем GET
        type: "GET",
        // Ожидается RSS-поток, представленный XML-файлом
        data: "xml",
        // Получение текущего RSS-потока (содержащего самые свежие
        // публикации)
//        url: "./?feed=rss&paged=1",
        url: "./rss.xml?feed=rss&paged=1",
        // Отслеживание успешного завершения извлечения RSS-потока
        onSuccess: function( rss ){
            // Загрузка новых публикаций в <div>,
            // у которого ID имеет значение "content"
            var content = document.getElementById("content");
            // Получение URL самой последней публикации (чтобы убедиться,
            // что мы не работаем с дубликатами публикаций)
            var recentURL = content.getElementsByTagName("h2")[0].firstChild.href;
            // Мы собираемся осуществить последовательный перебор
            // всех публикаций, имеющихся в RSS-потоке
            var items = rss.getElementsByTagName("item");
            // Собираемся поместить все новые публикации
            // в отдельный массив
            var newItems = [];
            // Проход по всем элементам
            for(var i = 0; i < items.length; i++){
                // Принудительное прекращение цикла при
                // "старой" публикации
                var newLink = getData(items[i]).link;
                if(newLink == recentURL){
                    break;
                }
                // Добавление нового элемента к временному массиву
                newItems.push(items[i]);
            }
            // Последовательный перебор всех новых публикаций
            // в обратном порядке, чтобы обеспечить правильный порядок
            // их размещения на веб-сайте
            for(var i = newItems.length-1; i >= 0 ;i--)
            {
                // Помещение в документ новой публикации
                content.insertBefore(makePost(newItems[i]),
                                    content.firstChild);
            }
        }
    });
    // Загрузка нового содержимого страницы раз в минуту
}, 5000);

//// Функция, предназначенная для создания полной DOM-структуры отдельной
//// публикации
//function makePost( elem )
//{
//// Извлечение ссылки, заголовка и описательных данных из каждого
//    // элемента потока, относящегося к публикации
//    var data = getData(elem);
//
//    // Создание нового <div>-контейнера для хранения публикации
//    var div = document.createElement("div");
//    div.className = "post";
//
//    // Создание заголовка публикации
//    var h2 = document.createElement("h2");
//
//    // Здесь содержится заголовок элемента потока и имеется ссылка,
//    // указывающая на публикацию
//    h2.innerHTML = "<a href='" + data.link + "'>" + data.title + "</a>";
//
//    // Добавление этого содержимого элемента потока и имеется ссылка,
//    // указывающая на публикацию
//    div.appendChild(h2);
//
//    // Теперь создадим <div>, в котором будет содержаться публикация
//    var entry = document.createElement("div");
//    entry.className = "entry";
//
//    // Добавим в <div> содержимое публикации
//    entry.innerHTML = data.desc;
//    div.appendChild(entry);
//
//    // В завершение добавим нижнюю часть, содержащую ссылку возврата
//    var meta = document.createElement("p");
//    meta.className = "postmetadata";
//
//    var a = document.createElement("a");
//    a.href = data.link + "#comments";
//    a.innerHTML = "Комментарий";
//    meta.appendChild(a);
//
//    div.appendChild(meta);
//
//    return div;
//}
//
//// Функция для извлечения данных из DOM-элемента
//function getData( elem )
//{
//    // Мы собираемся вернуть данные в виде четко отформатированного объекта
//    return {
//        // Извлечение из элемента <items> RSS-потока заголовка, описания и
//        // ссылки
//        title: elem.getElementsByTagName("title")[0].firstChild.nodeValue,
//        desc: elem.getElementsByTagName("description")[0].firstChild.nodeValue,
//        link: elem.getElementsByTagName("link")[0].firstChild.nodeValue
//    };
//}