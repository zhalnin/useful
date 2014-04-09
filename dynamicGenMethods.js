// Создание нового объекта user, принимающего объект свойств (properties)
function User(properties)
        {
            // Последовательный перебор свойств объекта, и обеспечение
            // для них нужной области видимости
            for(var i in properties)
            {
                (function(i)
                {
                    // Создание для свойства нового получателя
                    this[ "get" + i] = function()
                    {
                        return properties[i];
                    };

                    // Создание для свойства нового установщика
                    this[ "set" + i] = function(val)
                    {
                        properties[i] = val;
                    };
                }).call(this,i);
            }
        }

        // Создание нового экземпляра объекта user и передача в него объекта,
        // наполняющего его свойства
        var user = new User(
            {
                    name: "Bob",
                    age: 35
            });

        // Свойства name не существует
//        alert(user.name == null);
        alert(user.getname());
        alert(user.getage());
        user.setage(22);
        alert(user.getage());/**
 * Created by JetBrains PhpStorm.
 * User: zhalnin
 * Date: 02.04.12
 * Time: 20:11
 * To change this template use File | Settings | File Templates.
 */
