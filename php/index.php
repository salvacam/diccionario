<?php
/*
 * Colocamos los header necesario para habilitar peticiones GET y POST
 * y también le decimos que el tipo de contenido es JSON.
 *
 */
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');  
header('Content-Type: application/json');
/*
 * Importamos la clase 
 * https://github.com/statickidz/Google-Translator-Free-PHP
 */
require_once('GoogleTranslate.class.php');
 
/*
 * Para instanciarla la llamamos con dos valores
 * source: lenguaje de origen
 * target: lenguaje de destino
 * Seguidamente usamos el método translate($string) para traducir 
 */
$translator = new GoogleTranslate($_GET['source'],$_GET['target']);
$translation = $translator->translate($_GET['q']);
 
$response = new stdClass();
if($translation != '') {
  $response->status = true;
    $response->translation = $translation;
} else {
    $response->status = false;
}
 
echo json_encode($response);
