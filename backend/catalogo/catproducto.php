
<?php
include('../db/db.php');

if (isset($_GET["id"])){
   $sql = mysqli_query($conexiondb,"SELECT * FROM producto WHERE id_categoria=".$_GET["id"]);
   if(mysqli_num_rows($sql) > 0){
        $producto = mysqli_fetch_all($sql,MYSQLI_ASSOC);
        $resultado['data']=$producto;
        $resultado['mensaje']="Obteniendo el producto con id-categoria=". $_GET["id"];
        $resultado['status']=true;
        echo json_encode($resultado);
        exit();
}  else {  
        $resultado['data']='';
        $resultado['mensaje']="No logramos encontramos el producto";
        $resultado['status']=false;
        echo json_encode($resultado);
        exit();
    }
} else {
    $sql = mysqli_query($conexiondb,"SELECT * FROM producto");
    if(mysqli_num_rows($sql) > 0){
        $producto = mysqli_fetch_all($sql,MYSQLI_ASSOC);
        $resultado['data']=$producto;
        $resultado['mensaje']="Obteniendo todos lo productos";
        $resultado['status']=true;
        echo json_encode($resultado);
    }
}
?>