/**
 * Created by JetBrains PhpStorm.
 * User: zhalnin
 * Date: 17.05.12
 * Time: 14:56
 * To change this template use File | Settings | File Templates.
 */
/*
        Script: JSONT
        Website: legocode - [http://code.google.com/p/legocode/wiki/Snippets#JSONT]
        License: MIT - [http://www.opensource.org/licenses/mit-license.php]
        Author: MindstormsKid - [mindstormskd@gmail.com]
        File: [http://code.google.com/p/legocode/source/browse/trunk/snippets/jsont.js]
        JSLint: Perfect
        About: Functions for encoding and decoding JSONT (JSON Tables), a compressed form of JSON.
*/
var JSONT = {
        /*
                Method: JSONT.decode
                Params:
                        * (Array) k - The ordered keys to use.
                        * (Array) v - The array to decode.
                Returns: Array of objects.
                Example: `JSONT.decode(["a", "b"], ["1", "2", "3", "4"]); // Returns [{ a: 1, b: 2 }, { a: 3, b: 4 }]`
        */
        decode: function(k, v){
                var arr = [], vlen = v.length, klen = k.length, start = 0, stop = klen;
                while (stop <= vlen) {
                        var a = v.slice(start, stop), o = {};
                        for (var i = 0; i < klen; i++) { o[k[i]] = a[i]; }
                        arr.push(o);
                        start = stop; stop += klen;
                }
                return arr;
        },

        /*
                Method: JSONT.encode
                Params:
                        * (Array) k - The ordered keys to use.
                        * (Array) d - The array of objects to encode.
                Returns: Array.
                Example: `JSONT.encode(["a", "b"], [{ a: 1, b: 2 }, { a: 3, b: 4 }]); // Returns ["1", "2", "3", "4"]`
        */
        encode: function(k, d){
                var arr = [];
                for (var i = 0, len = d.length; i < len; i++) {
                        for (var i2 = 0, len2 = k.length; i2 < len2; i2++) {
                                arr.push(d[i][k[i2]]);
                        }
                }
                return arr;
        }
};