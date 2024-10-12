<?php
// header('Access-Control-Allow-Origin: *');
// header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
// header('Access-Control-Allow-Methods: GET,POST, PUT, UPDATE, DELETED');
// header('content-type: application/json; charset=utf-8');
// $host='serdom.cl';
// $user='ldomene_serdom';
// $pass='r7991951';
// $base='ldomene_serdomdb';
$host='localhost';
$user='root';
$pass='';
$base='serdomdb';

$conexiondb=mysqli_connect($host,$user,$pass,$base);
if (isset($conexiondb)){
    // $resultado["mensaje"]="Conectado a la BD Mysql : ".$base;
    // echo json_encode($resultado);
} else {
    $resultado["mensaje"]="NO logre conectar a la BD: ".$base;
    echo json_encode($resultado);
}
?>
