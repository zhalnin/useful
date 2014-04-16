<?php
//scriptjava.net
//nagon.net
//bablogon.net
if(isset($_FILES['e_upload_file']) && $_FILES['e_upload_file']['size']!=0) {
	
	//тут нужно написать код загрузки файла
	
	//не забывайте что в одну папку нельзя загружать более 15000 файлов или папок, это не я придумал
	//для сохранения большого обьема данных сохраняйте файлы по подпапкам
	//после загрузки нужно заюзать функции написанные ниже
	
	function domain() {
		$domain = $_SERVER['SERVER_NAME'];
		if(stripos($domain,'www.')===0) {
			$domain=substr_replace($domain,'',0,4);
		}
		return $domain;
	}
	
	//функция выводит в редактор путь к загруженному файлу
	function buffer_html($file_name) {
		echo '<!DOCTYPE html>
				<html lang="ru">
				<head>
				<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
				<title>Load</title>
				</head>
				<body>
				<script type="text/javascript">
					parent.editor_bb.from_dump_file_load("http://'.domain().$file_name.'");
				</script>
				</body>
				</html>
		';
		exit();
	}
	
	//функция сообщает в редактор об ошибке загрузки
	function buffer_error($err) {
		echo '<!DOCTYPE html>
				<html lang="ru">
				<head>
				<meta http-equiv="Content-Type" content="text/html; charset=windows-1251" />
				<title>Load</title>
				</head>
				<body>
				<script type="text/javascript">
					parent.call_error_dialog("'.$err.'");
				</script>
				</body>
				</html>
		';
		exit();
	}
	
	
	//эмуляция выполнения для примера
	
	if($_FILES['e_upload_file']['size']<=1024*1024*3) {
		if($_FILES['e_upload_file']['error']==0) {
			//тут пишем свой код который должен вернуть имя загруженного файла и папку в которой он лежит
			//дальше нужно передать функции путь к загруженному файлу на сервере
			
			//для примера показываю
			buffer_html('/upload_file.zip');
			
		}
		else {
			buffer_error('Ошибка при загрузке файла');
		}
	}
	else {
		buffer_error('Запрещено загружать файл превышающий размер 3 мегабайт');
	}
	
}
?>
