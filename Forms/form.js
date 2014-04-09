/**
 * Created by JetBrains PhpStorm.
 * User: zhalnin
 * Date: 28.04.12
 * Time: 20:47
 * To change this template use File | Settings | File Templates.
 */

/*
Проверка обязательных полей
checkRequired( elem )

Проверка переключения флажков и переключчателей
getInputsByName( name )

Проверка поля Email
checkEmail( elem )

Проверка поля URL
checkURL( elem )

Проверка телефонного номера
checkPhone( elem )

Проверка даты
checkDate( elem )



*/



// Универсальная функция проверки элемента ввода на наличие введенной
// информацией
function checkRequired( elem )
{
    if( elem.type == "checkbox" || elem.type == "radio" )
    {
        //alert(getInputsByName( elem.name ).numChecked);
        return getInputsByName( elem.name ).numChecked;
    }

    else
        return elem.value.length > 0 && elem.value != elem.defaultValue;
}

// Обнаружение всех элементов ввода с определенным именем ( для обнаружения
// и работы с флажками и переключателями)
function getInputsByName( name )
{
    // Массив для подходящих входных элементов
    var results = [];
    // Отслеживание, сколько из них было установлено
    results.numChecked = 0;

    // Обнаружение всех элементов ввода в документе
    var input = document.getElementsByTagName("input");
    for(var i = 0; i < input.length; i++)
    {
        // Обнаружение всех полей с определенным именем
        if(input[i].name == name)
        {
            // Сохранение результатов, чтобы впоследствии их можно было
            // вернуть
            results.push(input[i]);
            // Запоминание количества полей, подвергавшихся
            // установке
            if(input[i].checked)
                results.numChecked++;
        }
    }
    // Возвращение набора подходящих полей
    return results;
}

// Функция для проверки, похоже ли содержимое элемента ввода
// на адрес электронной почты
function checkEmail( elem )
{
    // Определение, что в поле что-то введено, и что введенное значение
    // похоже на приемлемый адрес электронной почты
    return elem.value == '' ||
        /^[a-z0-9_+.-]+\@([a-z0-9]+\.)+[a-z0-9]{2,4}$/i.test(elem.value);
}

// Функция для проверки наличия URL в
// элементе ввода
function checkURL( elem )
{
    // Определение, что в поле что-то введено, и что введенное значение
    // не является уже введенным по умолчанию текстом http://
    return elem.value == '' || !elem.value == 'http://' ||
        /^https?:\/\/([a-z0-9-]+\.)+[a-z0-9]{2,4}.*$/.test(elem.value);
}

// Функция для проверки телефонного
// номера в элементе ввода
//function checkPhone( elem )
//{
//    // Проверка на наличие чего-либо похожего на приемлемый телефонный
//    // номер
//    var m = /(\d{3}).*(\d{3}).*(\d{4})/.exec(elem.value);
//    // Если похоже, что номер премлем, приведем его к
//    // определенному желаемому формату: (123) 456-7890
//    if(m !== null)
//        elem.value = "("+ m[1] + ")" + m[2] + "-" + m[3];
//    return elem.value == '' || m !== null;
//}
function checkPhone( elem )
{
    // Проверка на наличие чего-либо похожего на приемлемый телефонный
    // номер
    var m = /(\d+).*(\d{3}).*(\d{3}).*(\d{2}).*(\d{2})/.exec(elem.value);
    // Если похоже, что номер премлем, приведем его к
    // определенному желаемому формату: (123) 456-7890
    if(m !== null)
        elem.value = m[1]+"("+ m[2] + ")" + m[3] + "-" + m[4] + "-" + m[5];
    return elem.value == '' || m !== null;
}

// Функция для проверки наличия даты в
// элементе ввода
function checkDate( elem )
{
    // Определение, что в поле что-то введено, и что введенное значение
    // похоже на приемлемую дату в формате ММ/ДД/ГГГГ
    return !elem.value || /^\d{2}\/\d{2}\/\d{2,4}$/.test(elem.value);
}





function init()
{
    // Получение проверяемого элемента ввода
    var elem1 = document.getElementById("age");
    // Определение установки флажка в поле age
    if(!checkRequired( elem1 ))
    {
        // Отображение сообщения об ошибке и предотвращение отправки
        // данных формы
        alert("Обязательное поле не отмечено - для использования сайта Вам должно быть свыше 13 лет.");
        return false;
    }

    // Получение проверяемого элемента ввода
    var elem2 = document.getElementById("name");
    // Определение ввода в поле name какого-нибудь текста
    if(!checkRequired( elem2 ))
    {
        // Если текст не введен, отображение сообщения об ошибке и
        // предотвращение отправки данных формы
        alert("Обязательное поле не заполнено - пожалуйста, введите Ваше имя." );
        return false;
    }

    // Получение проверяемого элемента ввода
    var elem3 = document.getElementById("email");
    // Проверка приемлемости содержимого поля
    if(!checkEmail(elem3))
    {
        alert("Поле не содержит адреса электронной почты.");
    }

    // Получение проверяемого элемента ввода
    var elem4 = document.getElementById("url");
    // Проверка, содержит ли поле приемлемый URL
    if(!checkURL(elem4))
    {
        alert("Поле не содержит URL.");
    }

    // Получение проверяемого элемента ввода
    var elem5 = document.getElementById("phone");
    // Проверка наличия в поле приемлемого телефонного номера
    if(!checkPhone(elem5))
    {
        alert("Поле не содержит телефонного номера.");
    }

    // Получение проверяемого элемента ввода
    var elem = document.getElementById("date");
    // Проверка наличия в поле приемлемой даты
    if(!checkDate(elem))
    {
        alert("Поле не содержит даты.");
    }
    
}
