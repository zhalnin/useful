/**
 * Created with JetBrains PhpStorm.
 * User: zhalnin
 * Date: 21.11.13
 * Time: 16:58
 * To change this template use File | Settings | File Templates.
 */
var values = ['a','c','d','j','e','k','m','l','o','s'];

function process(val){
    console.log(val);
}

var iterations = Math.ceil(values.length / 8);  // 2
var startAt = values.length % 8;                // 2
var i = 0;                                      // 0

do {
    switch(startAt){
        case 0: {
            process(values[i++]);
        }
        case 7: {
            process(values[i++]);
        }
        case 6: {
            process(values[i++]);
        }
        case 5: {
            process(values[i++]);
        }
        case 4: {
            process(values[i++]);
        }
        case 3: {
            process(values[i++]);
        }
        case 2: {
            process(values[i++]);
        }
        case 1: {
            process(values[i++]);
        }
    }
    startAt = 0;
} while (--iterations > 0);

