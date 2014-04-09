/**
 * Created by JetBrains PhpStorm.
 * User: zhalnin
 * Date: 01.04.12
 * Time: 20:32
 * To change this template use File | Settings | File Templates.
 */
// Функция, которая скрывает targetId при наведении на sourceId
// и показывает опять при убирании курсора с sourceId
        function addHideHandler(sourceId, targetId)
        {
            var sourceNode = document.getElementById(sourceId)
            var handler = function()
            {
                var targetNode = document.getElementById(targetId)
                targetNode.style.display = 'none'
            }
            sourceNode.onmouseover = handler

            var handler2 = function()
            {
                var targetNode = document.getElementById(targetId)
                targetNode.style.display = 'block'
            }
            sourceNode.onmouseout = handler2

        }

        addHideHandler('clickToHide','info');

