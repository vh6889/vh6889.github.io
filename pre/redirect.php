<?php
	$link = [
		'the-gioi-tam-linh',
		'trung-viettlot',
		'luat-hap-dan',
	];
	$host  = $_SERVER['HTTP_HOST'];
	$uri   = rtrim(dirname($_SERVER['PHP_SELF']), '/\\');
	$extra = $link[array_rand($link)];
	header("Location: http://$host$uri/$extra");
	exit;
?>