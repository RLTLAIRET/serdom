<?php


if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    echo json_encode(array('status' => false));
    exit;
}
$path = 'backend/catalogo/upload/';
if (isset($_GET["archivo"])){
    $aborrar=$_GET["archivo"];


if (!is_writable($path)) {
        echo json_encode(array(
            'status' => false,
            'msg'    => 'No existe el archivo a eliminar o la ruta esta equivocada'
        ));
        exit;
}
unlink($path . $aborrar);
echo json_encode(array(
        'status' => true,
        'msg'    => 'Hemos eliminado el atrchivo desde el servidor'
));
}
?>
