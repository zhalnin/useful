/**
 * Created with JetBrains PhpStorm.
 * User: zhalnin
 * Date: 07.05.13
 * Time: 17:12
 * To change this template use File | Settings | File Templates.
 */

var POS = {
  leftPos: function(){
      return (typeof window.screenLeft == "number") ?
          window.screenLeft : window.screenX;
  },
  topPos: function(){
      return (typeof window.screenTop == "number") ?
          window.screenTop : window.screenY;
  }

};