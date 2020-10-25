<?php
$addresses = [
	'https://horusamuletvn.com',
	'https://vn3.horusamuletvn.com',
];

$size = count($addresses);
$randomIndex = rand(0, $size - 1);
$randomUrl = $addresses[$randomIndex];

header('Location: ' . $randomUrl, true, 303);