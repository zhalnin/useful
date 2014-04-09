/**
 * Created by JetBrains PhpStorm.
 * User: zhalnin
 * Date: 29.04.12
 * Time: 8:21
 * To change this template use File | Settings | File Templates.
 */

// Набор правил и описательных ообщений об ошибках для построения основного механизма проверки
var errMsg =
{
    // Проверка обязательности определенного поля
    required:
    {
        msg: "Это обязательное поле.",
        test: function(obj, load)
        {
            // Обеспечение отстутствия в поле введенного текста
            // и задержки начала работы на загружаемой странице
            // (демонстрация сообщения 'Это обязательное поле' при загрузке
            // страницы будет только раздражать пользователя)
            return obj.value.length > 0 || load || obj.value == obj.defaultValue
        }
    },

//    login:
//    {
//        msg: "Поле логин должно быть заполнено.",
//        test: function(obj, load)
//        {
//            return obj.value == 'undefined' ||
//                /^[A-Za-z0-9]{3,}$/.test(obj.value);
//        }
//    },
//
//    password:
//    {
//        msg: "Пароль должен начинаться с заглавной буквы и иметь длину не менее 6-ти символов.",
//        test: function(obj, load)
//        {
//            return obj.value == 'undefined' ||
//                /^[A-Z]{1}[a-z0-9_+-]{5,}$/.test(obj.value);
//        }
//    },

    // Определение наличия в поле приемлемого адреса электронной почты
    email:
    {

        msg: "Введенный адрес неприемлем.",
        test: function(obj)
        {
            // Определение, что в поле что-то введено, и что введенное
            // значение похоже на адрес электронной почты
            return !obj.value ||
                /^[a-z0-9_+.-]+\@([a-z0-9-]+\.)+[a-z0-9]{2,4}$/i.test(obj.value);
        }
    },

    // Определение, что поле содержит телефонный номер, и
    // его автоформатирование в случае положительного результата
    phone:
    {
        msg: "Введенный номер неприемлем.",
        test: function(obj)
        {
            // Определение, что введенное значение похоже
            // на приемлемый телефонный номер
            var m = /(\d+}).*(\d{3}).*(\d{3}).*(\d{2}).*(\d{2})/.exec(obj.value);

            // Если похоже на то, что, номер приемлем, приведение
            // его к определенному желаемому формату: 8(921)123-45-67
            if(m) obj.value = m[1]+"("+m[2]+")"+m[3]+"-"+m[4]+"-"+m[5];
            return !obj.value || m;
        }
    },

    // Определение, что поле содержит премлемую дату
    // формата ММ/ДД//ГГГГ
    date:
    {
        msg: "Дата неприемлема.",
        test: function(obj)
        {
            // Определение, что в поле введено и что введенное
            // значение похоже на приемлемую дату формата ММ/ДД/ГГГГ
            return !obj.value || /^\d{2}\/\d{2}\/\d{2,4}$/.test(obj.value);
        }
    },

    // Определение, что поле содержит премлемый URL
    url:
    {
        msg: "URL неприемлем.",
        test: function(obj)
        {
            // Определение, что в поле введен какой-нибудь текст, и он
            // отличается  от уже введенного по умолчанию текста
            // http://
            return !obj.value || obj.value == 'http://' ||
                // Определение, что введенное значение похоже на
                // приемлемый URL
                /^https?:\/\/([a-z0-9-]+\.)+[a-z0-9]{2,4}.*$/.test(obj.value);
        }
    }
};


// Функция проверки всех полей внутри формы.
// Аргумент form должен быть ссылкой на элемент формы
// Аргумент load должен быть булевой ссылкой на то, что функция проверки
// запускается не в динамическом режиме, а после загрузки страницы
function validateForm( form, load )
{
    var valid = true;
    // Последовательный перебор всех имеющихся в форме элементов полей
    // form.elements - массив всех имеющихся в форме полей
    for(var i = 0; i < form.elements.length; i++)
    {
        // Сокрытие любых сообщений об ошибках, если они были показаны
        hideErrors( form.elements[i] );
        // Проверка содержимого поля на приемлемость
        if(!validateField( form.elements[i], load ))
        {
            valid = false;
        }
    }
    // Возвращение false, если содержимое поля неприемлемо,
    // и true, елси значение всех полей премлемо
    return valid;
}


// Проверка премлемости содержимого отдельного поля
function validateField( elem, load )
{
    var errors = [];
    // Последовательный перебор всех имеющихся тенологий проверки
    // приемлемости
    for(var name in errMsg)
    {
        // Определение, имеет ли поле класс, определенный типом ошибки
        var re = new RegExp("(^|\\s)"+name+"(\\s|$)");
        // Определение, имеет ли элемент класс, и передан ли тесту
        // на приемлемость данных
        if(re.test(elem.className) && !errMsg[name].test(elem, load))
            // Если проверка не удалась, добавление сообщения об ошибке к
            // списку
            errors.push(errMsg[name].msg);
    }
    // Отображение сообщений об ошибке, если таковые имеются
    if(errors.length)
        showErrors(elem, errors);
    // Возвращение false, если поле не прошло какую-нибудь процедуру
    // проверки
    return errors.length > 0;
}


// Сокрытие любых отображаемых на данный момент сообщений об ошибках,
// обнаруженных во время проверки
function hideErrors(elem)
{
    // Обнаружение следующего за текущим полем элемента
    var next = elem.nextSibling;
    // Если следующий элемент ul и имеет класс errors
    if(next && next.nodeName == 'UL' && next.className == "errors")
        // его следует удалить(в нашем смысле - 'скрыть')
        elem.parentNode.removeChild(next);
}

// Отображение набора сообщений об ошибках для определенного поля
// внутри формы
function showErrors(elem, errors)
{
    // Обнаружение следующего за полем элемента
    var next = elem.nextSibling;
    var prev = elem.parentNode;
    // Если поле не является одним из наших специальных контейнеров
    // для сообщений об ошибке
    if(next && (next.nodeName != 'UL' || next.className != "errors" ))
    {
        // То такое поле нужно создать
        next = document.createElement("ul");
//        next.setAttribute('class','errors');
        next.className = "errors";

        // а затем вставить его в нужное место в DOM-структуре
        elem.parentNode.insertBefore(next, elem.nextSibling);
    }
//    else
//    {
//        next = document.createElement("ul");
//        next.className = "errors";
//        next.setAttribute("style",'display: block');
//        prev.appendChild(next);
//    }

    // Теперь, имея ссылку на контейнер сообщений об ошибках - UL
    // осуществляем последовательный перебор всех сообщений
    for(var i = 0; i < errors.length; i++)
    {
        // создаем новый контейнер li для каждого из них
        var li = document.createElement("li");
        li.innerHTML = errors[i];
        // и вставляем его в DOM
        next.appendChild(li);
    }
}

