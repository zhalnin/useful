/**
 * Created with JetBrains PhpStorm.
 * User: zhalnin
 * Date: 21.11.13
 * Time: 16:54
 * To change this template use File | Settings | File Templates.
 */

var values = ['a','c','d','j','e','k','m','l','o','s'];

function process(val){
    console.log(val);
}


var iterations = Math.floor(values.length / 8); // 1
var leftover = values.length % 8;               // 2
var i = 0;

if(leftover > 0){
    do{
        process(values[i++]);
    }while (--leftover > 0);
}
do{
    process(values[i++]);
    process(values[i++]);
    process(values[i++]);
    process(values[i++]);
    process(values[i++]);
    process(values[i++]);
    process(values[i++]);
    process(values[i++]);
} while (--iterations > 0)


