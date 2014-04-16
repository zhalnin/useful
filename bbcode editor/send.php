<?php
//scriptjava.net
//nagon.net
//bablogon.net
if(isset($_POST['new_post'])) {
	
	//проверяем введенные данные
	
	//можем сохранять в базу в виде ббкода
	
	//при прочтении из базы и перед выводом на страницу текст нужно передать функции ниже
	function domain() {
		$domain = $_SERVER['SERVER_NAME'];
		if(stripos($domain,'www.')===0) {
			$domain=substr_replace($domain,'',0,4);
		}
		return $domain;
	}
	
	//вот вам написал функцию преобразования, чтоб не парились
	function bbcode($str) {
		$bbc = array(
						'/\[hr\]/is' => '<hr />',
						'/\[b\](.*?)\[\/b\]/is' => '<strong>$1</strong>',
						'/\[i\](.*?)\[\/i\]/is' => '<em>$1</em>',
						'/\[u\](.*?)\[\/u\]/is' => '<u>$1</u>',
						'/\[t\](.*?)\[\/t\]/is' => '<del>$1</del>',
						'/\[url\=(.*?)\](.*?)\[\/url\]/is' => '<a target="_blank" href="$1" rel="nofollow">$2</a>',
						'/\[url\](.*?)\[\/url\]/is' => '<a target="_blank" href="$1" rel="nofollow">$1</a>',
						'/\[list\=1\](.*?)\[\*\]/is' => '[list=1][*]',
						'/\[list\](.*?)\[\*\]/is' => '[list][*]',
						'/\[\*\](.*?)(\n|\r\n|\[?)(?=(\[\*\]|\[\/list\]?))/is' => '<li>$1</li>',
						'/\[list\](.*?)\[\/list\]/is' => '<ul>$1</ul>',
						'/\[list\=1\](.*?)\[\/list\]/is' => '<ol>$1</ol>',
						'/\[left\](.*?)\[\/left\]/is' => '<p align="left">$1</p>',
						'/\[center\](.*?)\[\/center\]/is' => '<p align="center">$1</p>',
						'/\[right\](.*?)\[\/right\]/is' => '<p align="right">$1</p>',
						'/\[img\=([^\]]*?)\]\[\/img\]/is' => '<img src="$1" />',
						'/\[img\=(.*?)\](.*?)\[\/img\]/is' => '<img src="$1" alt="$2" />',
						'/\[youtube\]http:\/\/www\.youtube\.com\/watch\?v\=/is' => '[youtube]http://www.youtube.com/embed/',
						'/\[youtube\](.*?)\[\/youtube\]/is' => '<iframe width="640" height="480" src="$1" frameborder="0" allowfullscreen></iframe>',
						'/\[file\=([^\]]*?)\]\[\/file\]/is' => '<a href="http://'.domain().'/download.php?file=$1" target="_blank" rel="nofollow">$1</a>',
						'/\[file\=(.*?)\](.*?)\[\/file\]/is' => '<a href="http://'.domain().'/download.php?file=$1" target="_blank" rel="nofollow">$2</a>',
						'/\[size\=(.*?)\](.*?)\[\/size\]/is' => '<span style="font-size:$1px;">$2</span>',
						'/\[font\=(.*?)\](.*?)\[\/font\]/is' => '<span style="font-family:\'$1\';">$2</span>',
						'/\[color\=(.*?)\](.*?)\[\/color\]/is' => '<span style="color:#$1;">$2</span>',
						'/\[bcolor\=(.*?)\](.*?)\[\/bcolor\]/is' => '<span style="background-color:#$1;">$2</span>',
						'/\[smiley\=(.*?)_(.*?)\]/is' => '<img src="http://'.domain().'/smiley/smiley$1/$2.gif" />',
						'/\[quote\](.*?)\[\/quote\]/is' => '<blockquote>$1</blockquote>',
						'/\[code\](.*?)\[\/code\]/is' => '<code style="white-space:pre;">$1</code>',
						'/\[lfloat\](.*?)\[\/lfloat\]/is' => '<div style="float:left;">$1</div>',
						'/\[rfloat\](.*?)\[\/rfloat\]/is' => '<div style="float:right;">$1</div>'
					);
		$str = preg_replace(array_keys($bbc), array_values($bbc), $str);
		
		$str = $str.'<br style="clear:both;" />';
		
		return $str;
	}
	
	
	//эмуляция выполнения
	//вывожу преобразованный bbcode в html код
	//не забудте экранировать символы
	echo bbcode($_POST['new_text']);
}
?>
