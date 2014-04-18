/**
 * Created with JetBrains PhpStorm.
 * User: zhalnin
 * Date: 13/04/14
 * Time: 16:09
 * To change this template use File | Settings | File Templates.
 */

function doStyle( tag ) {
    var obj = AM.DOM.$('text_editor');
    var start = '['+tag+']';
    var end = '[/'+tag+']';
    AM.DOM.tagInsert( obj, start, end );
}

function selectStmt(str,str_cl) {
//    editor_bb.dump={};
    var dump = {};
    str = str || '';
    str_cl = str_cl || '';
//    var obj=$$(editor_bb.editor_id);
    var obj = AM.DOM.$('text_editor');
//    if($$().selection) {
    if(document.selection) {
        obj.focus();
//        var s = $$().selection.createRange();
        var s = document.selection.createRange();
        if(str=='') {
            return {start_d:'',end_d:'',s_d:s};
        }
        if(s.text) {
            if(str_cl!='') {
                var x=s.text;
                x = x.replace(/\n/gm, "\n[*]");
                s.text = str + x + str_cl;
            }
            else {
                s.text = '['+str+']' + s.text + '[/'+str+']';
            }
        }
        else {
            if(str_cl!='') {
                obj.value = obj.value + str + str_cl;
            }
            else {
                obj.value = obj.value + '['+str+']' + '[/'+str+']';
            }
        }
    }
    else if(typeof(obj.selectionStart) == "number") {
        obj.focus();
        if(obj.selectionStart != obj.selectionEnd) {
            var start = obj.selectionStart;
            var end = obj.selectionEnd;
            s = obj.value.substr(start,end-start);
            if(str=='') {
                return {start_d:start,end_d:end,s_d:s};
            }
            if(str_cl!='') {
                var x = s;
                x = x.replace(/\n/gm, "\n[*]");
                obj.value = obj.value.substr(0, start) + str + x + str_cl + obj.value.substr(end);
            }
            else {
                obj.value = obj.value.substr(0, start) + '['+str+']' + s + '[/'+str+']' + obj.value.substr(end);
            }
        }
        else {
            if(str=='') {
                return {start_d:'',end_d:'',s_d:''};
            }
            if(str_cl!='') {
                obj.value = obj.value + str + str_cl;
            }
            else {
                obj.value = obj.value + '['+str+']' + '[/'+str+']';
            }
        }
    }
}