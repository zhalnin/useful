/**
 * Created by JetBrains PhpStorm.
 * User: zhalnin
 * Date: 02.04.12
 * Time: 13:22
 * To change this template use File | Settings | File Templates.
 */

// Строгая проверка списка типов переменных по списку аргументов
function strict(types, args)
{
    // Проверка совпадений количества типов и аргументов
    if(types.length != args.length)
    {
        // Если количество не совпадает, выдача полезного исключения
        throw "Неверное количество аргументов. Ожидалось " + types.length +
            ", а вместо этого получено " + args.length + ".";
    }

    // Перебор всех аргументов и проверка и типов
    for(var i = 0; i < args.length; i++)
    {
        if(args[i].constructor != types[i])
        {
            throw "Неверный тип аргумента. Ожидался " + types[i].name +
                ", а получен " + args[i].constructor.name + ".";
        }
    }
}

// Простая функция, предназначенная для распечатки списка пользователей
function userList(prefix, num, users)
{
    // Проверка, что prefix - строка, num - число,
    // а users - массив
    strict([String, Number, Array], arguments);

    // Выполнение итерации до 'num' пользователей
    for(var i = 0; i < num; i++)
    {
        // Отображение сообщения о каждом пользователе
        print(prefix + ":" + users[i]);
    }
}