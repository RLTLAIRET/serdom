
<?php
include('../db/db.php');
$_POST=json_decode(file_get_contents('php://input'),true);
// obtener  variables
$pass1=$_POST['password'];
$usuario=$_POST['usuario'];
///// consultar si existe el usuario
$query="SELECT * FROM usuarios WHERE usuario='$usuario' and clave='$pass1'";
$sqlusuario = mysqli_query($conexiondb,$query);
$consulta = mysqli_fetch_array($sqlusuario);
if ($consulta > 0) {
    $resultado['data']='';
    $resultado['mensaje']='Ingresando a la configuración ';
    $resultado['status']=true;
    echo json_encode($resultado);
} else {
    $resultado['data']='';
    $resultado['mensaje']='Error!! Usuario o Clave';
    $resultado['status']=false;
    echo json_encode($resultado);
}
exit()
?>
