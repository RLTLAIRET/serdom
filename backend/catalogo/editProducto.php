
<?php

include('../db/db.php');
switch($_SERVER['REQUEST_METHOD']){
    case 'POST':
        if (isset($_GET['id'])){ 
            $_POST=json_decode(file_get_contents('php://input'),true);
            $id_categoria=$_POST['categoria'];
            $nombre      =$_POST['nombre'];
            $descripcion =$_POST['descripcion'];
            $imagen      =$_POST['imagen'];
            $manual      =$_POST['manual'];
            $precio      =$_POST['precio'];
            $stock       =$_POST['stock'];
      
           $query="UPDATE  producto SET  descripcion='$descripcion',
                                         imagen='$imagen',
                                         manualpdf='$manual',
                                         precio='$precio',
                                         stock='$stock'                                 
                    WHERE id_producto=". $_GET['id'];
           $sql = mysqli_query($conexiondb, $query);
           if ($sql > 0) {
               $resultado['mensaje']='Producto Actualizado ';
               $resultado['data']='';
               $resultado['status']=true;
               echo json_encode($resultado);
               exit();
           } else {
               $resultado['mensaje']='Producto No Actualizado ';
               $resultado['data']='';
               $resultado['status']=false;
               echo json_encode($resultado);
               exit();
           }
           
       }
    break;
}
?>