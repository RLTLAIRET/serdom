
<?php

include('../db/db.php');
// $resultado["mensaje"]="Entrando al Login: ";
// echo json_encode($resultado); 
// Consulta datos y recepciona una clave para consultar dichos datos con dicha clave
if (isset($_GET["consultar"])){
    $sql = mysqli_query($conexiondb,"SELECT * FROM catologo WHERE id=".$_GET["consultar"]);
    if(mysqli_num_rows($sql) > 0){
        $catalogo = mysqli_fetch_all($sql,MYSQLI_ASSOC);
        echo json_encode($catalogo);
        exit();
    }
    else{  
        $resultado["mensaje"]="No logramos encontrar catalogo";
        $resultado["success"]=false;
        echo json_encode($resultado);
    }
}
//borrar pero se le debe de enviar una clave ( para borrado )
if (isset($_GET["borrar"])){
    $sql = mysqli_query($conexiondb,"DELETE FROM catalogo WHERE id=".$_GET["borrar"]);
    if($sql){
        $resultado["mensaje"]="Hemos borrado el catalogo";
        $resultado["success"]=true;
        echo json_encode($resultado);
        exit();
    }
    else{
        $resultado["mensaje"]="No logramos borrar el catalogo";
        $resultado["success"]=false;
        echo json_encode($resultado);
    }
}
//Inserta un nuevo registro y recepciona en método post los datos de nombre y correo
if(isset($_GET["insertar"])){
    $_POST=json_decode(file_get_contents('php://input'),true);
    $nombre     =$_POST['nombre'];
    $descripcion=$_POST['descripcion'];
    $imagen     =$_POST['imagen'];
    $tipoimg    =$_POST['type'];
    $sizeimg    =$_POST['size'];
    if(($nombre!="")&&($descripcion!="")){
        ////  validar que no este repetido el catalogo     
        $query="SELECT * FROM catalogo WHERE nombre='$nombre'";
        $sql = mysqli_query($conexiondb, $query);
        $result = mysqli_fetch_assoc($sql);
        if ($result > 0){
           $resultado["mensaje"]="Ya Existe un Catalogo con ese nombre";
           $resultado["success"]=false;
           echo json_encode($resultado);
           exit();
        }
        ///// consultar si existe el usuario
        $query = "INSERT INTO catalogo (nombre,descripcion,imagen, size_img, type_img)  VALUES ('$nombre','$descripcion','$imagen','$sizeimg','$tipoimg')";
        $result = mysqli_query($conexiondb, $query);
        if ($result > 0) {
           $resultado["mensaje"]="Hemos Agregado un nuevo catalogo";
           $resultado["success"]=true;
           echo json_encode($resultado);
           exit();
        } else {
           $resultado["mensaje"]="No logramos agregar el nuevo catalogo";
           $resultado["succes"]=false;
           echo json_encode($resultado);
        }
    }
}
// Actualiza datos pero recepciona datos de nombre, correo y una clave para realizar la actualización
if(isset($_GET["actualizar"])){
    $data = json_decode(file_get_contents("php://input"));
    $id=(isset($data->id))?$data->id:$_GET["actualizar"];
    $nombre     =$data['nombre'];
    $descripcion=$data['descripcion'];
    $imagen     =$data['imagen'];
    $tipoimg    =$data['type'];
    $sizeimg    =$data['size'];
    $query = "UPDATE catalogo (nombre,descripcion,imagen, size_img, type_img)  VALUES ('$nombre','$descripcion','$imagen','$sizeimg','$tipoimg') WHERE id='$id'";
    $sql = mysqli_query($conexiondb,$query);
    if ($result > 0) {
        $resultado["mensaje"]="Hemos Hemos Actualizado catalogo";
        $resultado["success"]=true;
        echo json_encode($resultado);
     } else {
        $resultado["mensaje"]="No logramos Actualizar el catalogo";
        $resultado["succes"]=false;
        echo json_encode($resultado);
     }

}
// Consulta todos los registros de la tabla empleados
$sql = mysqli_query($conexiondb,"SELECT * FROM catalogo ");
if(mysqli_num_rows($sql) > 0){
    $catalogos = mysqli_fetch_all($sql,MYSQLI_ASSOC);
    echo json_encode($catalogos);
}
else{
    $resultado["mensaje"]="No logramos leer los catalogos";
    $resultado["succes"]=false;
    echo json_encode($resultado);
}


?>
