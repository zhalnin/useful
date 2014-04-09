// Функция, которая перед выделенным значением элемента textarea и после него
// вставляет теги [i][/i], [b][/b], [url],[/url]
function bbCode(str1, str2)
{
    var obj = document.getElementsByTagName('textarea')[0];
    if(document.selection)
    {
        var aim = document.selection.createRange();

        aim.text = str1+aim.text+str2;
    }
    else if(document.getSelection)
    {
//    obj.focus();
        var start = obj.value.substring(0, obj.selectionStart);
        var aim = obj.value.substring(obj.selectionStart, obj.selectionEnd);
        var end = obj.value.substring(obj.selectionEnd);
        var res = start+str1+aim+str2+end;
        obj.value = res;
    }
    else
    {
        alert('no');
    }
}/**
 * Created by JetBrains PhpStorm.
 * User: zhalnin
 * Date: 26.04.12
 * Time: 16:37
 * To change this template use File | Settings | File Templates.
 */
