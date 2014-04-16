//scriptjava.net
//nagon.net
//bablogon.net
var editor_bb = {
	editor_id:'text_editor',
	b:function(event) {
		editor_bb.add('b');
	},
	i:function(event) {
		editor_bb.add('i');
	},
	u:function(event) {
		editor_bb.add('u');
	},
	t:function(event) {
		editor_bb.add('t');
	},
	pb:function(event) {
		editor_bb.add('[list][*]','[/list]');
	},
	lb:function(event) {
		editor_bb.add('[list=1][*]','[/list]');
	},
	tl:function(event) {
		editor_bb.add('left');
	},
	tc:function(event) {
		editor_bb.add('center');
	},
	tr:function(event) {
		editor_bb.add('right');
	},
	a:function(event) {
		editor_bb.dump=editor_bb.add();
		var ins_html = '<div class="ed_inp_div_url_0">Добавить URL</div><div class="ed_inp_div_url">URL: <input class="ed_inp_div_url_i1" id="editor_user_url" type="text" value="http://" /><input class="ed_inp_div_url_i2" type="button" value="Добавить" onclick="editor_bb.from_dump_url(\'[url\',\'[/url]\');" /></div>';
		show_preview_dialog(ins_html);
	},
	im:function(event) {
		editor_bb.dump=editor_bb.add();
		var ins_html = '<div class="ed_inp_div_img_0">Изображение</div><div class="ed_inp_div_img">URL картинки: <input class="ed_inp_div_img_i1" id="editor_user_img" type="text" value="http://" /><br />Описание: <input class="ed_inp_div_img_i1" id="editor_user_img_alt" type="text" value="" /><br /><input class="ed_inp_div_img_i2" type="button" value="Добавить" onclick="editor_bb.from_dump_img();" /><br /><br />или воспульзуйтесь <span class="ed_inp_span_img" onclick="editor_bb.from_dump_startload();">загрузкой</span></div>';
		show_preview_dialog(ins_html);
	},
	v:function(event) {
		editor_bb.dump=editor_bb.add();
		var ins_html = '<div class="ed_inp_div_yt_0">Добавить видео YouTube</div><div class="ed_inp_div_yt">URL: <input class="ed_inp_div_yt_i1" id="editor_user_yt" type="text" value="http://" /><input class="ed_inp_div_yt_i2" type="button" value="Добавить" onclick="editor_bb.from_dump_yt();" /></div>';
		show_preview_dialog(ins_html);
	},
	f:function(event) {
		editor_bb.dump=editor_bb.add();
		var ins_html = '<div class="ed_inp_div_file_0">Добавить файл</div><div class="ed_inp_div_file"><form id="editor_upload_file" onsubmit="" enctype="multipart/form-data" method="post"><input class="ed_inp_div_file_i1" type="file" id="editor_user_file" name="e_upload_file" /></form><br />Заголовок: <input class="ed_inp_div_file_i1" id="editor_user_file_alt" type="text" value="" /><br /><div id="e_file_but"><input class="ed_inp_div_file_i2" type="button" value="Добавить" onclick="editor_bb.from_dump_file();" /></div></div>';
		show_preview_dialog(ins_html);
	},
	f_x1:function(event) {
		var ins_html = '<div class="ed_inp_div_file_0">Добавить файл</div><div class="ed_inp_div_file"><form id="editor_upload_file" onsubmit="" enctype="multipart/form-data" method="post"><input class="ed_inp_div_file_i1" type="file" id="editor_user_file" name="e_upload_file"></form><br />Заголовок: <input class="ed_inp_div_file_i1" id="editor_user_file_alt" type="text" value="" /><br /><div id="e_file_but"><input class="ed_inp_div_file_i2" type="button" value="Добавить" onclick="editor_bb.from_dump_file();" /></div></div>';
		show_preview_dialog(ins_html);
	},
	ff:function(event) {
		editor_bb.dump=editor_bb.add();
		var ins_html = '<div class="ed_inp_div_ff_0">Оформление шрифта</div><div class="ed_inp_div_ff"><div class="ed_inp_div_ff_1" onclick="editor_bb.from_dump_font(\'36\');">Текст 36px</div><div class="ed_inp_div_ff_2" onclick="editor_bb.from_dump_font(\'24\');">Текст 24px</div><div class="ed_inp_div_ff_3" onclick="editor_bb.from_dump_font(\'18\');">Текст 18px</div><div class="ed_inp_div_ff_4" onclick="editor_bb.from_dump_font(\'16\');">Текст 16px</div><div class="ed_inp_div_ff_5" onclick="editor_bb.from_dump_font(\'14\');">Текст 14px</div><div class="ed_inp_div_ff_6" onclick="editor_bb.from_dump_font(\'12\');">Текст 12px</div><div class="ed_inp_div_ff_7" onclick="editor_bb.from_dump_font(\'10\');">Текст 10px</div><div class="ed_inp_div_ff_8" onclick="editor_bb.from_dump_font(\'9\');">Текст 9px</div><h1 onclick="editor_bb.from_dump_font(\'h1\');">Заголовок 1</h1><h2 onclick="editor_bb.from_dump_font(\'h2\');">Заголовок 2</h2><h3 onclick="editor_bb.from_dump_font(\'h3\');">Заголовок 3</h3><h4 onclick="editor_bb.from_dump_font(\'h4\');">Заголовок 4</h4><h5 onclick="editor_bb.from_dump_font(\'h5\');">Заголовок 5</h5><h6 onclick="editor_bb.from_dump_font(\'h6\');">Заголовок 6</h6></div>';
		show_preview_dialog(ins_html);
	},
	ft:function(event) {
		editor_bb.dump=editor_bb.add();
		var ins_html = '<div class="ed_inp_div_ft_0">Оформление шрифта</div><div class="ed_inp_div_ft"><div onclick="editor_bb.from_dump_font_t(\'Arial\');" style="font-family:\'Arial\';">Arial</div><div onclick="editor_bb.from_dump_font_t(\'Tahoma\');" style="font-family:\'Tahoma\';">Tahoma</div><div onclick="editor_bb.from_dump_font_t(\'Verdana\');" style="font-family:\'Verdana\';">Verdana</div><div onclick="editor_bb.from_dump_font_t(\'Times New Roman\');" style="font-family:\'Times New Roman\';">Times New Roman</div><div onclick="editor_bb.from_dump_font_t(\'Lucida Console\');" style="font-family:\'Lucida Console\';">Lucida Console</div><div onclick="editor_bb.from_dump_font_t(\'Arial Black\');" style="font-family:\'Arial Black\';">Arial Black</div><div onclick="editor_bb.from_dump_font_t(\'Arial Narrow\');" style="font-family:\'Arial Narrow\';">Arial Narrow</div><div onclick="editor_bb.from_dump_font_t(\'Book Antiqua\');" style="font-family:\'Book Antiqua\';">Book Antiqua</div><div onclick="editor_bb.from_dump_font_t(\'Century Gothic\');" style="font-family:\'Century Gothic\';">Century Gothic</div><div onclick="editor_bb.from_dump_font_t(\'Comic Sans MS\');" style="font-family:\'Comic Sans MS\';">Comic Sans MS</div><div onclick="editor_bb.from_dump_font_t(\'Courier New\');" style="font-family:\'Courier New\';">Courier New</div><div onclick="editor_bb.from_dump_font_t(\'Fixedsys\');" style="font-family:\'Fixedsys\';">Fixedsys</div><div onclick="editor_bb.from_dump_font_t(\'Franklin Gothic Medium\');" style="font-family:\'Franklin Gothic Medium\';">Franklin Gothic Medium</div><div onclick="editor_bb.from_dump_font_t(\'Garamond\');" style="font-family:\'Garamond\';">Garamond</div><div onclick="editor_bb.from_dump_font_t(\'Georgia\');" style="font-family:\'Georgia\';">Georgia</div><div onclick="editor_bb.from_dump_font_t(\'Impact\');" style="font-family:\'Impact\';">Impact</div><div onclick="editor_bb.from_dump_font_t(\'Lucida Sans Unicode\');" style="font-family:\'Lucida Sans Unicode\';">Lucida Sans Unicode</div><div onclick="editor_bb.from_dump_font_t(\'Microsoft Sans Serif\');" style="font-family:\'Microsoft Sans Serif\';">Microsoft Sans Serif</div><div onclick="editor_bb.from_dump_font_t(\'Palatino Linotype\');" style="font-family:\'Palatino Linotype\';">Palatino Linotype</div><div onclick="editor_bb.from_dump_font_t(\'System\');" style="font-family:\'System\';">System</div><div onclick="editor_bb.from_dump_font_t(\'Trebuchet MS\');" style="font-family:\'Trebuchet MS\';">Trebuchet MS</div></div>';
		show_preview_dialog(ins_html);
	},
	fc:function(event) {
		editor_bb.dump=editor_bb.add();
		var ins_html = '<div class="ed_inp_div_fc_0">Цвет шрифта</div><div class="ed_inp_div_fc"><div onclick="editor_bb.from_dump_font_c(\'000000\');" style="background-color: #000000;"></div><div onclick="editor_bb.from_dump_font_c(\'a0522d\');" style="background-color: #a0522d;"></div><div onclick="editor_bb.from_dump_font_c(\'556b2f\');" style="background-color: #556b2f;"></div><div onclick="editor_bb.from_dump_font_c(\'006400\');" style="background-color: #006400;"></div><div onclick="editor_bb.from_dump_font_c(\'483d8b\');" style="background-color: #483d8b;"></div><div onclick="editor_bb.from_dump_font_c(\'000080\');" style="background-color: #000080;"></div><div onclick="editor_bb.from_dump_font_c(\'4b0082\');" style="background-color: #4b0082;"></div><div onclick="editor_bb.from_dump_font_c(\'2f4f4f\');" style="background-color: #2f4f4f;"></div><div onclick="editor_bb.from_dump_font_c(\'8b0000\');" style="background-color: #8b0000;"></div><div onclick="editor_bb.from_dump_font_c(\'ff8c00\');" style="background-color: #ff8c00;"></div><div onclick="editor_bb.from_dump_font_c(\'808000\');" style="background-color: #808000;"></div><div onclick="editor_bb.from_dump_font_c(\'008000\');" style="background-color: #008000;"></div><div onclick="editor_bb.from_dump_font_c(\'008080\');" style="background-color: #008080;"></div><div onclick="editor_bb.from_dump_font_c(\'0000ff\');" style="background-color: #0000ff;"></div><div onclick="editor_bb.from_dump_font_c(\'708090\');" style="background-color: #708090;"></div><div onclick="editor_bb.from_dump_font_c(\'696969\');" style="background-color: #696969;"></div><div onclick="editor_bb.from_dump_font_c(\'ff0000\');" style="background-color: #ff0000;"></div><div onclick="editor_bb.from_dump_font_c(\'f4a460\');" style="background-color: #f4a460;"></div><div onclick="editor_bb.from_dump_font_c(\'9acd32\');" style="background-color: #9acd32;"></div><div onclick="editor_bb.from_dump_font_c(\'2e8b57\');" style="background-color: #2e8b57;"></div><div onclick="editor_bb.from_dump_font_c(\'48d1cc\');" style="background-color: #48d1cc;"></div><div onclick="editor_bb.from_dump_font_c(\'4169e1\');" style="background-color: #4169e1;"></div><div onclick="editor_bb.from_dump_font_c(\'800080\');" style="background-color: #800080;"></div><div onclick="editor_bb.from_dump_font_c(\'808080\');" style="background-color: #808080;"></div><div onclick="editor_bb.from_dump_font_c(\'ff00ff\');" style="background-color: #ff00ff;"></div><div onclick="editor_bb.from_dump_font_c(\'ffa500\');" style="background-color: #ffa500;"></div><div onclick="editor_bb.from_dump_font_c(\'ffff00\');" style="background-color: #ffff00;"></div><div onclick="editor_bb.from_dump_font_c(\'00ff00\');" style="background-color: #00ff00;"></div><div onclick="editor_bb.from_dump_font_c(\'00ffff\');" style="background-color: #00ffff;"></div><div onclick="editor_bb.from_dump_font_c(\'00bfff\');" style="background-color: #00bfff;"></div><div onclick="editor_bb.from_dump_font_c(\'9932cc\');" style="background-color: #9932cc;"></div><div onclick="editor_bb.from_dump_font_c(\'c0c0c0\');" style="background-color: #c0c0c0;"></div<div onclick="editor_bb.from_dump_font_c(\'ffc0cb\');" style="background-color: #ffc0cb;"></div><div onclick="editor_bb.from_dump_font_c(\'f5deb3\');" style="background-color: #f5deb3;"></div><div onclick="editor_bb.from_dump_font_c(\'fffacd\');" style="background-color: #fffacd;"></div><div onclick="editor_bb.from_dump_font_c(\'98fb98\');" style="background-color: #98fb98;"></div><div onclick="editor_bb.from_dump_font_c(\'afeeee\');" style="background-color: #afeeee;"></div><div onclick="editor_bb.from_dump_font_c(\'add8e6\');" style="background-color: #add8e6;"></div><div onclick="editor_bb.from_dump_font_c(\'dda0dd\');" style="background-color: #dda0dd;"></div><div onclick="editor_bb.from_dump_font_c(\'ffffff\');" style="background-color: #ffffff;"></div><br style="clear: both;" /></div>';
		show_preview_dialog(ins_html);
	},
	fb:function(event) {
		editor_bb.dump=editor_bb.add();
		var ins_html = '<div class="ed_inp_div_fb_0">Цвет фона шрифта</div><div class="ed_inp_div_fb"><div onclick="editor_bb.from_dump_font_b(\'000000\');" style="background-color: #000000;"></div><div onclick="editor_bb.from_dump_font_b(\'a0522d\');" style="background-color: #a0522d;"></div><div onclick="editor_bb.from_dump_font_b(\'556b2f\');" style="background-color: #556b2f;"></div><div onclick="editor_bb.from_dump_font_b(\'006400\');" style="background-color: #006400;"></div><div onclick="editor_bb.from_dump_font_b(\'483d8b\');" style="background-color: #483d8b;"></div><div onclick="editor_bb.from_dump_font_b(\'000080\');" style="background-color: #000080;"></div><div onclick="editor_bb.from_dump_font_b(\'4b0082\');" style="background-color: #4b0082;"></div><div onclick="editor_bb.from_dump_font_b(\'2f4f4f\');" style="background-color: #2f4f4f;"></div><div onclick="editor_bb.from_dump_font_b(\'8b0000\');" style="background-color: #8b0000;"></div><div onclick="editor_bb.from_dump_font_b(\'ff8c00\');" style="background-color: #ff8c00;"></div><div onclick="editor_bb.from_dump_font_b(\'808000\');" style="background-color: #808000;"></div><div onclick="editor_bb.from_dump_font_b(\'008000\');" style="background-color: #008000;"></div><div onclick="editor_bb.from_dump_font_b(\'008080\');" style="background-color: #008080;"></div><div onclick="editor_bb.from_dump_font_b(\'0000ff\');" style="background-color: #0000ff;"></div><div onclick="editor_bb.from_dump_font_b(\'708090\');" style="background-color: #708090;"></div><div onclick="editor_bb.from_dump_font_b(\'696969\');" style="background-color: #696969;"></div><div onclick="editor_bb.from_dump_font_b(\'ff0000\');" style="background-color: #ff0000;"></div><div onclick="editor_bb.from_dump_font_b(\'f4a460\');" style="background-color: #f4a460;"></div><div onclick="editor_bb.from_dump_font_b(\'9acd32\');" style="background-color: #9acd32;"></div><div onclick="editor_bb.from_dump_font_b(\'2e8b57\');" style="background-color: #2e8b57;"></div><div onclick="editor_bb.from_dump_font_b(\'48d1cc\');" style="background-color: #48d1cc;"></div><div onclick="editor_bb.from_dump_font_b(\'4169e1\');" style="background-color: #4169e1;"></div><div onclick="editor_bb.from_dump_font_b(\'800080\');" style="background-color: #800080;"></div><div onclick="editor_bb.from_dump_font_b(\'808080\');" style="background-color: #808080;"></div><div onclick="editor_bb.from_dump_font_b(\'ff00ff\');" style="background-color: #ff00ff;"></div><div onclick="editor_bb.from_dump_font_b(\'ffa500\');" style="background-color: #ffa500;"></div><div onclick="editor_bb.from_dump_font_b(\'ffff00\');" style="background-color: #ffff00;"></div><div onclick="editor_bb.from_dump_font_b(\'00ff00\');" style="background-color: #00ff00;"></div><div onclick="editor_bb.from_dump_font_b(\'00ffff\');" style="background-color: #00ffff;"></div><div onclick="editor_bb.from_dump_font_b(\'00bfff\');" style="background-color: #00bfff;"></div><div onclick="editor_bb.from_dump_font_b(\'9932cc\');" style="background-color: #9932cc;"></div><div onclick="editor_bb.from_dump_font_b(\'c0c0c0\');" style="background-color: #c0c0c0;"></div<div onclick="editor_bb.from_dump_font_b(\'ffc0cb\');" style="background-color: #ffc0cb;"></div><div onclick="editor_bb.from_dump_font_b(\'f5deb3\');" style="background-color: #f5deb3;"></div><div onclick="editor_bb.from_dump_font_b(\'fffacd\');" style="background-color: #fffacd;"></div><div onclick="editor_bb.from_dump_font_b(\'98fb98\');" style="background-color: #98fb98;"></div><div onclick="editor_bb.from_dump_font_b(\'afeeee\');" style="background-color: #afeeee;"></div><div onclick="editor_bb.from_dump_font_b(\'add8e6\');" style="background-color: #add8e6;"></div><div onclick="editor_bb.from_dump_font_b(\'dda0dd\');" style="background-color: #dda0dd;"></div><div onclick="editor_bb.from_dump_font_b(\'ffffff\');" style="background-color: #ffffff;"></div><br style="clear: both;" /></div>';
		show_preview_dialog(ins_html);
	},
	ln:function(event) {
		editor_bb.add_tag('hr');
	},
	sm:function(event) {
		editor_bb.dump=editor_bb.add();
		var ins_html = '<div class="ed_inp_div_sm_0">Смайлы</div><div class="ed_inp_div_sm"><div id="smile_spoiler_1" onclick="editor_bb.smiley(1);"><span>+</span>Смайлы 1</div><div id="smile_spoiler_panel_1"><img src="smiley/smiley1/001.gif" onclick="editor_bb.add_sm(\'1\',\'001\');" /><img src="smiley/smiley1/002.gif" onclick="editor_bb.add_sm(\'1\',\'002\');" /><img src="smiley/smiley1/003.gif" onclick="editor_bb.add_sm(\'1\',\'003\');" /><img src="smiley/smiley1/004.gif" onclick="editor_bb.add_sm(\'1\',\'004\');" /><img src="smiley/smiley1/005.gif" onclick="editor_bb.add_sm(\'1\',\'005\');" /><img src="smiley/smiley1/006.gif" onclick="editor_bb.add_sm(\'1\',\'006\');" /><img src="smiley/smiley1/007.gif" onclick="editor_bb.add_sm(\'1\',\'007\');" /><img src="smiley/smiley1/008.gif" onclick="editor_bb.add_sm(\'1\',\'008\');" /><img src="smiley/smiley1/009.gif" onclick="editor_bb.add_sm(\'1\',\'009\');" /><img src="smiley/smiley1/010.gif" onclick="editor_bb.add_sm(\'1\',\'010\');" /><img src="smiley/smiley1/011.gif" onclick="editor_bb.add_sm(\'1\',\'011\');" /><img src="smiley/smiley1/012.gif" onclick="editor_bb.add_sm(\'1\',\'012\');" /><img src="smiley/smiley1/013.gif" onclick="editor_bb.add_sm(\'1\',\'013\');" /><img src="smiley/smiley1/014.gif" onclick="editor_bb.add_sm(\'1\',\'014\');" /><img src="smiley/smiley1/015.gif" onclick="editor_bb.add_sm(\'1\',\'015\');" /><img src="smiley/smiley1/016.gif" onclick="editor_bb.add_sm(\'1\',\'016\');" /><img src="smiley/smiley1/017.gif" onclick="editor_bb.add_sm(\'1\',\'017\');" /><img src="smiley/smiley1/018.gif" onclick="editor_bb.add_sm(\'1\',\'018\');" /><img src="smiley/smiley1/019.gif" onclick="editor_bb.add_sm(\'1\',\'019\');" /><img src="smiley/smiley1/020.gif" onclick="editor_bb.add_sm(\'1\',\'020\');" /><img src="smiley/smiley1/021.gif" onclick="editor_bb.add_sm(\'1\',\'021\');" /><img src="smiley/smiley1/022.gif" onclick="editor_bb.add_sm(\'1\',\'022\');" /><img src="smiley/smiley1/023.gif" onclick="editor_bb.add_sm(\'1\',\'023\');" /><img src="smiley/smiley1/024.gif" onclick="editor_bb.add_sm(\'1\',\'024\');" /><img src="smiley/smiley1/025.gif" onclick="editor_bb.add_sm(\'1\',\'025\');" /><img src="smiley/smiley1/026.gif" onclick="editor_bb.add_sm(\'1\',\'026\');" /><img src="smiley/smiley1/027.gif" onclick="editor_bb.add_sm(\'1\',\'027\');" /><img src="smiley/smiley1/028.gif" onclick="editor_bb.add_sm(\'1\',\'028\');" /><img src="smiley/smiley1/029.gif" onclick="editor_bb.add_sm(\'1\',\'029\');" /><img src="smiley/smiley1/030.gif" onclick="editor_bb.add_sm(\'1\',\'030\');" /><img src="smiley/smiley1/031.gif" onclick="editor_bb.add_sm(\'1\',\'031\');" /><img src="smiley/smiley1/032.gif" onclick="editor_bb.add_sm(\'1\',\'032\');" /><img src="smiley/smiley1/033.gif" onclick="editor_bb.add_sm(\'1\',\'033\');" /><img src="smiley/smiley1/034.gif" onclick="editor_bb.add_sm(\'1\',\'034\');" /><img src="smiley/smiley1/035.gif" onclick="editor_bb.add_sm(\'1\',\'035\');" /><img src="smiley/smiley1/036.gif" onclick="editor_bb.add_sm(\'1\',\'036\');" /><img src="smiley/smiley1/037.gif" onclick="editor_bb.add_sm(\'1\',\'037\');" /></div><div id="smile_spoiler_2" onclick="editor_bb.smiley(2);"><span>+</span>Смайлы 2</div><div id="smile_spoiler_panel_2"><img src="smiley/smiley2/001.gif" onclick="editor_bb.add_sm(\'2\',\'001\');" /><img src="smiley/smiley2/002.gif" onclick="editor_bb.add_sm(\'2\',\'002\');" /><img src="smiley/smiley2/003.gif" onclick="editor_bb.add_sm(\'2\',\'003\');" /><img src="smiley/smiley2/004.gif" onclick="editor_bb.add_sm(\'2\',\'004\');" /><img src="smiley/smiley2/005.gif" onclick="editor_bb.add_sm(\'2\',\'005\');" /><img src="smiley/smiley2/006.gif" onclick="editor_bb.add_sm(\'2\',\'006\');" /><img src="smiley/smiley2/007.gif" onclick="editor_bb.add_sm(\'2\',\'007\');" /><img src="smiley/smiley2/008.gif" onclick="editor_bb.add_sm(\'2\',\'008\');" /><img src="smiley/smiley2/009.gif" onclick="editor_bb.add_sm(\'2\',\'009\');" /><img src="smiley/smiley2/010.gif" onclick="editor_bb.add_sm(\'2\',\'010\');" /><img src="smiley/smiley2/011.gif" onclick="editor_bb.add_sm(\'2\',\'011\');" /><img src="smiley/smiley2/012.gif" onclick="editor_bb.add_sm(\'2\',\'012\');" /><img src="smiley/smiley2/013.gif" onclick="editor_bb.add_sm(\'2\',\'013\');" /><img src="smiley/smiley2/014.gif" onclick="editor_bb.add_sm(\'2\',\'014\');" /><img src="smiley/smiley2/015.gif" onclick="editor_bb.add_sm(\'2\',\'015\');" /><img src="smiley/smiley2/016.gif" onclick="editor_bb.add_sm(\'2\',\'016\');" /><img src="smiley/smiley2/017.gif" onclick="editor_bb.add_sm(\'2\',\'017\');" /><img src="smiley/smiley2/018.gif" onclick="editor_bb.add_sm(\'2\',\'018\');" /><img src="smiley/smiley2/019.gif" onclick="editor_bb.add_sm(\'2\',\'019\');" /><img src="smiley/smiley2/020.gif" onclick="editor_bb.add_sm(\'2\',\'020\');" /><img src="smiley/smiley2/021.gif" onclick="editor_bb.add_sm(\'2\',\'021\');" /><img src="smiley/smiley2/022.gif" onclick="editor_bb.add_sm(\'2\',\'022\');" /><img src="smiley/smiley2/023.gif" onclick="editor_bb.add_sm(\'2\',\'023\');" /><img src="smiley/smiley2/024.gif" onclick="editor_bb.add_sm(\'2\',\'024\');" /><img src="smiley/smiley2/025.gif" onclick="editor_bb.add_sm(\'2\',\'025\');" /></div><div id="smile_spoiler_3" onclick="editor_bb.smiley(3);"><span>+</span>Смайлы 3</div><div id="smile_spoiler_panel_3"><img src="smiley/smiley3/001.gif" onclick="editor_bb.add_sm(\'3\',\'001\');" /><img src="smiley/smiley3/002.gif" onclick="editor_bb.add_sm(\'3\',\'002\');" /><img src="smiley/smiley3/003.gif" onclick="editor_bb.add_sm(\'3\',\'003\');" /><img src="smiley/smiley3/004.gif" onclick="editor_bb.add_sm(\'3\',\'004\');" /><img src="smiley/smiley3/005.gif" onclick="editor_bb.add_sm(\'3\',\'005\');" /><img src="smiley/smiley3/006.gif" onclick="editor_bb.add_sm(\'3\',\'006\');" /><img src="smiley/smiley3/007.gif" onclick="editor_bb.add_sm(\'3\',\'007\');" /><img src="smiley/smiley3/008.gif" onclick="editor_bb.add_sm(\'3\',\'008\');" /><img src="smiley/smiley3/009.gif" onclick="editor_bb.add_sm(\'3\',\'009\');" /><img src="smiley/smiley3/010.gif" onclick="editor_bb.add_sm(\'3\',\'010\');" /><img src="smiley/smiley3/011.gif" onclick="editor_bb.add_sm(\'3\',\'011\');" /><img src="smiley/smiley3/012.gif" onclick="editor_bb.add_sm(\'3\',\'012\');" /><img src="smiley/smiley3/013.gif" onclick="editor_bb.add_sm(\'3\',\'013\');" /><img src="smiley/smiley3/014.gif" onclick="editor_bb.add_sm(\'3\',\'014\');" /><img src="smiley/smiley3/015.gif" onclick="editor_bb.add_sm(\'3\',\'015\');" /><img src="smiley/smiley3/016.gif" onclick="editor_bb.add_sm(\'3\',\'016\');" /><img src="smiley/smiley3/017.gif" onclick="editor_bb.add_sm(\'3\',\'017\');" /><img src="smiley/smiley3/018.gif" onclick="editor_bb.add_sm(\'3\',\'018\');" /></div></div>';
		show_preview_dialog(ins_html);
	},
	q:function(event) {
		editor_bb.add('quote');
	},
	k:function(event) {
		editor_bb.add('code');
	},
	fl:function(event) {
		editor_bb.add('lfloat');
	},
	fr:function(event) {
		editor_bb.add('rfloat');
	},
	dump:{},
	smiley_dump:[0,0,0],
	smiley:function (num) {
		if(editor_bb.smiley_dump[num-1]==0) {
			$$('smile_spoiler_'+num,'<span>-</span>Смайлы '+num);
			$$('smile_spoiler_panel_'+num,'display','block');
			editor_bb.smiley_dump[num-1]=1;
		}
		else {
			$$('smile_spoiler_'+num,'<span>+</span>Смайлы '+num);
			$$('smile_spoiler_panel_'+num,'display','none');
			editor_bb.smiley_dump[num-1]=0;
		}
	},
	add_sm:function(part,num) {
		var obj=$$(editor_bb.editor_id);
		if($$().selection) {
			obj.focus();
			var s = $$().selection.createRange();
			if(s.text) {
				s.text = s.text + '[smiley='+part+'_'+num+']';
			}
			else {
				obj.value = obj.value + '[smiley='+part+'_'+num+']';
			}
		}
		else if(typeof(obj.selectionStart) == "number") {
			obj.focus();
			if(obj.selectionStart != obj.selectionEnd) {
				var start = obj.selectionStart;
				var end = obj.selectionEnd;
				s = obj.value.substr(start,end-start);
				obj.value = obj.value.substr(0, start) + s + '[smiley='+part+'_'+num+']' + obj.value.substr(end);
			}
			else {
				obj.value = obj.value + '[smiley='+part+'_'+num+']';
			}
		}
		editor_bb.smiley_dump=[0,0,0];
		hide_preview_dialog();
	},
	add_tag:function (tag) {
		var obj=$$(editor_bb.editor_id);
		if($$().selection) {
			obj.focus();
			var s = $$().selection.createRange();
			if(s.text) {
				s.text = s.text + '['+tag+']';
			}
			else {
				obj.value = obj.value + '['+tag+']';
			}
		}
		else if(typeof(obj.selectionStart) == "number") {
			obj.focus();
			if(obj.selectionStart != obj.selectionEnd) {
				var start = obj.selectionStart;
				var end = obj.selectionEnd;
				s = obj.value.substr(start,end-start);
				obj.value = obj.value.substr(0, start) + s + '['+tag+']' + obj.value.substr(end);
			}
			else {
				obj.value = obj.value + '['+tag+']';
			}
		}
	},
	from_dump_font_b:function(font) {
		var obj=$$(editor_bb.editor_id);
		if(editor_bb.dump.start_d=='' && editor_bb.dump.end_d=='') {
			if(editor_bb.dump.s_d.text) {
				editor_bb.dump.s_d.text = '[bcolor='+font+']' + editor_bb.dump.s_d.text + '[/bcolor]';
			}
			else {
				obj.value = obj.value + '[bcolor='+font+']' + '[/bcolor]';
			}
		}
		else if(editor_bb.dump.s_d!='') {
			obj.value = obj.value.substr(0, editor_bb.dump.start_d) + '[bcolor='+font+']' + editor_bb.dump.s_d + '[/bcolor]' + obj.value.substr(editor_bb.dump.end_d);
		}
		else {
			obj.value = obj.value + '[bcolor='+font+']' + '[/bcolor]';
		}
		hide_preview_dialog();
	},
	from_dump_font_c:function(font) {
		var obj=$$(editor_bb.editor_id);
		if(editor_bb.dump.start_d=='' && editor_bb.dump.end_d=='') {
			if(editor_bb.dump.s_d.text) {
				editor_bb.dump.s_d.text = '[color='+font+']' + editor_bb.dump.s_d.text + '[/color]';
			}
			else {
				obj.value = obj.value + '[color='+font+']' + '[/color]';
			}
		}
		else if(editor_bb.dump.s_d!='') {
			obj.value = obj.value.substr(0, editor_bb.dump.start_d) + '[color='+font+']' + editor_bb.dump.s_d + '[/color]' + obj.value.substr(editor_bb.dump.end_d);
		}
		else {
			obj.value = obj.value + '[color='+font+']' + '[/color]';
		}
		hide_preview_dialog();
	},
	from_dump_font_t:function(font) {
		var obj=$$(editor_bb.editor_id);
		if(editor_bb.dump.start_d=='' && editor_bb.dump.end_d=='') {
			if(editor_bb.dump.s_d.text) {
				editor_bb.dump.s_d.text = '[font='+font+']' + editor_bb.dump.s_d.text + '[/font]';
			}
			else {
				obj.value = obj.value + '[font='+font+']' + '[/font]';
			}
		}
		else if(editor_bb.dump.s_d!='') {
			obj.value = obj.value.substr(0, editor_bb.dump.start_d) + '[font='+font+']' + editor_bb.dump.s_d + '[/font]' + obj.value.substr(editor_bb.dump.end_d);
		}
		else {
			obj.value = obj.value + '[font='+font+']' + '[/font]';
		}
		hide_preview_dialog();
	},
	from_dump_font:function(font) {
		var obj=$$(editor_bb.editor_id);
		var tag_n,tag_nc;
		if(font=='h1' || font=='h2' || font=='h3' || font=='h4' || font=='h5' || font=='h6') {
			tag_n=font;
			tag_nc=font;
		}
		else {
			tag_n='size='+font;
			tag_nc='size';
		}
		
		if(editor_bb.dump.start_d=='' && editor_bb.dump.end_d=='') {
			if(editor_bb.dump.s_d.text) {
				editor_bb.dump.s_d.text = '['+tag_n+']' + editor_bb.dump.s_d.text + '[/'+tag_nc+']';
			}
			else {
				obj.value = obj.value + '['+tag_n+']' + '[/'+tag_nc+']';
			}
		}
		else if(editor_bb.dump.s_d!='') {
			obj.value = obj.value.substr(0, editor_bb.dump.start_d) + '['+tag_n+']' + editor_bb.dump.s_d + '[/'+tag_nc+']' + obj.value.substr(editor_bb.dump.end_d);
		}
		else {
			obj.value = obj.value + '['+tag_n+']' + '[/'+tag_nc+']';
		}
		hide_preview_dialog();
	},
	from_dump_startload:function () {
		hide_preview_dialog();
		editor_bb.f_x1();
	},
	from_dump_file:function() {
		$$f({
			formid:'editor_upload_file',
			url:'add.php',
			onstart:function () {
				$$('e_file_but','Загружаю, ждите...<br /><img src="img/load_lite.gif" />');
			},
			onsend:function () {
				hide_preview_dialog();
			}
		});
	},
	from_dump_file_load:function(fname) {
		var obj=$$(editor_bb.editor_id);
		var eva=$$('editor_user_file_alt').value;
		if(editor_bb.dump.start_d=='' && editor_bb.dump.end_d=='') {
			if(editor_bb.dump.s_d.text) {
				editor_bb.dump.s_d.text = editor_bb.dump.s_d.text + '[file='+fname+']'+eva+'[/file]';
			}
			else {
				obj.value = obj.value + '[file='+fname+']'+eva+'[/file]';
			}
		}
		else if(editor_bb.dump.s_d!='') {
			obj.value = obj.value.substr(0, editor_bb.dump.start_d) + editor_bb.dump.s_d + '[file='+fname+']'+eva+'[/file]' + obj.value.substr(editor_bb.dump.end_d);
		}
		else {
			obj.value = obj.value + '[file='+fname+']'+eva+'[/file]';
		}
	},
	from_dump_yt:function() {
		var obj=$$(editor_bb.editor_id);
		var evl=$$('editor_user_yt').value;
		if(evl=='http://' || evl=='') {
			evl='';
		}
		if(editor_bb.dump.start_d=='' && editor_bb.dump.end_d=='') {
			if(editor_bb.dump.s_d.text) {
				editor_bb.dump.s_d.text = editor_bb.dump.s_d.text + '[youtube]'+evl+'[/youtube]';
			}
			else {
				obj.value = obj.value + '[youtube]'+evl+'[/youtube]';
			}
		}
		else if(editor_bb.dump.s_d!='') {
			obj.value = obj.value.substr(0, editor_bb.dump.start_d) + editor_bb.dump.s_d + '[youtube]'+evl+'[/youtube]' + obj.value.substr(editor_bb.dump.end_d);
		}
		else {
			obj.value = obj.value + '[youtube]'+evl+'[/youtube]';
		}
		hide_preview_dialog();
	},
	from_dump_img:function() {
		var obj=$$(editor_bb.editor_id);
		var evl=$$('editor_user_img').value;
		var eva=$$('editor_user_img_alt').value;
		if(evl=='http://' || evl=='') {
			evl='';
		}
		if(eva=='') {
			eva='';
		}
		if(editor_bb.dump.start_d=='' && editor_bb.dump.end_d=='') {
			if(editor_bb.dump.s_d.text) {
				editor_bb.dump.s_d.text = editor_bb.dump.s_d.text + '[img='+evl+']'+eva+'[/img]';
			}
			else {
				obj.value = obj.value + '[img='+evl+']'+eva+'[/img]';
			}
		}
		else if(editor_bb.dump.s_d!='') {
			obj.value = obj.value.substr(0, editor_bb.dump.start_d) + editor_bb.dump.s_d + '[img='+evl+']'+eva+'[/img]' + obj.value.substr(editor_bb.dump.end_d);
		}
		else {
			obj.value = obj.value + '[img='+evl+']'+eva+'[/img]';
		}
		hide_preview_dialog();
	},
	from_dump_url:function(str,str_cl) {
		var obj=$$(editor_bb.editor_id);
		var evl=$$('editor_user_url').value;
		if(evl=='http://' || evl=='') {
			evl='';
		}
		if(editor_bb.dump.start_d=='' && editor_bb.dump.end_d=='') {
			if(editor_bb.dump.s_d.text) {
				editor_bb.dump.s_d.text = str+'='+evl+']' + editor_bb.dump.s_d.text + str_cl;
			}
			else {
				if(evl=='') {
					obj.value = obj.value + str+'=]' + evl + str_cl;
				}
				else {
					obj.value = obj.value + str+']' + evl + str_cl;
				}
			}
		}
		else if(editor_bb.dump.s_d!='') {
			obj.value = obj.value.substr(0, editor_bb.dump.start_d) + str+'='+evl+']' + editor_bb.dump.s_d + str_cl + obj.value.substr(editor_bb.dump.end_d);
		}
		else {
			if(evl=='') {
				obj.value = obj.value + str+'=]' + evl + str_cl;
			}
			else {
				obj.value = obj.value + str+']' + evl + str_cl;
			}
		}
		hide_preview_dialog();
	},
	add:function(str,str_cl) {
		editor_bb.dump={};
		str = str || '';
		str_cl = str_cl || '';
		var obj=$$(editor_bb.editor_id);
		if($$().selection) {
			obj.focus();
			var s = $$().selection.createRange();
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
}

var div_bg_dialog;
var div_face_dialog;
var show_preview_dialog = function (ins_html) {
	div_bg_dialog=$$i({
		create:'div',
		attribute: {
			'style':'position:fixed; top:0; left:0; z-index:4999;'
		},
		insert:$$().body
	});
	div_face_dialog=$$i({
		create:'div',
		attribute: {
			'style':'position:fixed; top:0; left:0; z-index:5000; width:400px; height:300px; background:#ffffff; border:1px solid #555555;'
		},
		insert:$$().body
	});
	$$(div_bg_dialog,'width',$$s.clientsize().w+'px').$$('height',$$s.clientsize().h+'px');
	$$(div_face_dialog,'left',(($$s.clientsize().w-402)/2)+'px').$$('top',(($$s.clientsize().h-302)/2)+'px').$$(ins_html);
	$$e.add($$(div_bg_dialog),'click',hide_preview_dialog);
}

var hide_preview_dialog = function (event) {
	$$().body.removeChild($$(div_face_dialog));
	$$().body.removeChild($$(div_bg_dialog));
}

var div_err_dialog;
var div_err_key=false;
var show_error_dialog = function (ins_err) {
	if(!div_err_key) {
		div_err_key=true;
		div_err_dialog=$$i({
			create:'div',
			attribute: {
				'style':'position:fixed; top:50px; left:10px; z-index:5000; width:300px; height:100px; background:#dfdfdf; border:1px solid #ff0000; color:#ff0000; padding:5px 15px 5px 15px;'
			},
			insert:$$().body
		});
		$$(div_err_dialog,ins_err);
		setTimeout(function () { hide_error_dialog(); }, 5000);
	}
}

var hide_error_dialog = function () {
	$$().body.removeChild($$(div_err_dialog));
	div_err_key=false;
}

function call_error_dialog(ins_err) {
	show_error_dialog(ins_err);
}

$$r(function() {
	$$e.add($$('editor_b'),'mousedown',editor_bb.b);
	$$e.add($$('editor_i'),'mousedown',editor_bb.i);
	$$e.add($$('editor_u'),'mousedown',editor_bb.u);
	$$e.add($$('editor_t'),'mousedown',editor_bb.t);
	$$e.add($$('editor_pb'),'mousedown',editor_bb.pb);
	$$e.add($$('editor_lb'),'mousedown',editor_bb.lb);
	$$e.add($$('editor_tl'),'mousedown',editor_bb.tl);
	$$e.add($$('editor_tc'),'mousedown',editor_bb.tc);
	$$e.add($$('editor_tr'),'mousedown',editor_bb.tr);
	$$e.add($$('editor_a'),'mousedown',editor_bb.a);
	$$e.add($$('editor_im'),'mousedown',editor_bb.im);
	$$e.add($$('editor_v'),'mousedown',editor_bb.v);
	$$e.add($$('editor_f'),'mousedown',editor_bb.f);
	$$e.add($$('editor_ff'),'mousedown',editor_bb.ff);
	$$e.add($$('editor_ft'),'mousedown',editor_bb.ft);
	$$e.add($$('editor_fc'),'mousedown',editor_bb.fc);
	$$e.add($$('editor_fb'),'mousedown',editor_bb.fb);
	$$e.add($$('editor_ln'),'mousedown',editor_bb.ln);
	$$e.add($$('editor_sm'),'mousedown',editor_bb.sm);
	$$e.add($$('editor_q'),'mousedown',editor_bb.q);
	$$e.add($$('editor_k'),'mousedown',editor_bb.k);
	$$e.add($$('editor_fl'),'mousedown',editor_bb.fl);
	$$e.add($$('editor_fr'),'mousedown',editor_bb.fr);
	
});
