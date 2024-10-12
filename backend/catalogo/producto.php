
<?php

include('../db/db.php');
switch($_SERVER['REQUEST_METHOD']){
    case 'POST':
       $_POST=json_decode(file_get_contents('php://input'),true);
       $id_categoria=$_POST['categoria'];
       $nombre      =$_POST['nombre'];
       $descripcion =$_POST['descripcion'];
       $imagen      =$_POST['imagen'];
       $manual      =$_POST['manual'];
       $precio      =$_POST['precio'];
       $stock       =$_POST['stock'];
     
       if(($nombre!="")&&($descripcion!="")){
         /////  verificar si el nombre de producto existe
         $query="SELECT * FROM producto WHERE nombre='$nombre'";
         $sql = mysqli_query($conexiondb, $query);
         $result = mysqli_fetch_assoc($sql);
         if ($result > 0){
            $resultado['data']='';
            $resultado['mensaje']='Ya Existe un producto con ese nombre';
            $resultado['status']=true;
            echo json_encode($resultado);
            exit();
         }

         ///// consultar si existe el usuario
         $query = "INSERT INTO producto (nombre,descripcion,imagen, id_categoria, manualpdf, precio, stock ) 
                               VALUES ('$nombre','$descripcion','$imagen','$id_categoria','$manual','$precio','$stock')";
         $sql = mysqli_query($conexiondb, $query);
         if ($sql > 0) {
            $resultado['data']='';
            $resultado['mensaje']='Hemos agregado el registro' ;
            $resultado['status']=true;
            echo json_encode($resultado);
         } else {
            $resultado['data']='';
            $resultado['mensaje']="No logramos agregar el nuevo producto". $query . '<br>' . mysqli_error($conexiondb);
            $resultado['status']=false;
            echo json_encode($resultado);
          

         }
         exit();
       }
    break;
    case 'GET':
       
        if (isset($_GET["id"])){
            $sql = mysqli_query($conexiondb,"SELECT * FROM producto WHERE id_producto=".$_GET["id"]);
            if(mysqli_num_rows($sql) > 0){
                $producto = mysqli_fetch_all($sql,MYSQLI_ASSOC);
                $resultado['data']=$producto;
                $resultado['mensaje']="Obteniendo el producto con id-producto=". $_GET["id"];
                $resultado['status']=true;
                echo json_encode($resultado);
                exit();
            } 
        }  else {
             // consultar todo
                $query="SELECT * FROM producto ";
                $sql = mysqli_query($conexiondb, $query);
                if(mysqli_num_rows($sql) > 0){
                    $productos = mysqli_fetch_all($sql,MYSQLI_ASSOC);
                    $resultado['data']=$productos;
                    $resultado['mensaje']="Obteniendo todos los producto";
                    $resultado['status']=true;
                    echo json_encode($resultado);
                } else{
                    $resultado['data']='';
                    $resultado["mensaje"]="No logramos leer los productos". $query . '<br>' . mysqli_error($conexiondb);
                    $resultado['status']=false;
                    echo json_encode($resultado);
                }
        } 
           
    break;
    case 'PUT':
        if (isset($_GET['id'])){ 
             $_PUT=json_decode(file_get_contents('php://input'),true);
             /// obtener  variables
             $id_categoria=$_POST['id_categoria'];
             $nombre      =$_POST['nombre'];
             $descripcion=$_POST['descripcion'];
             $imagen     =$_POST['imagen'];
             $manual     =$_POST['manual'];
             $precio     =$_POST['precio'];
             $stock      =$_POST['stock'];
            $resultado['mensaje']='Actualizar producto con id: '.$_GET['id']. ', Informnacion a Actualizar'.json_encode($_put);      
            $query="UPDATE  producto (nombre,descripcion,imagen, id_categoria, manualpdf, precio, stock ) 
            VALUES ('$nombre','$descripcion','$imagen','$id_categoria','$manual','$precio','$stock') WHERE id=". $_GET['id'];
            $sqlusuario = mysqli_query($conexiondb,$query);

            $resultado['mensaje']='producto Actualizado ';
            echo json_encode($resultado);
            
        }
    break;
     case 'DELETE':
         if (isset($_GET['id'])){ 
            $query="DELETE FROM producto WHERE id_producto=".$_GET["id"];
            $sqlusuario = mysqli_query($conexiondb,$query);
            if($sqlusuario){
                $resultado['data']="";
                $resultado['mensaje']="El Prodcuto ha sido eliminado";
                $resultado['status']=true;
                echo json_encode($resultado);
                exit();
            }
            else{  
                $resultado['data']="";
                $resultado['mensaje']="No logramos eliminar el Producto". $query . '<br>' . mysqli_error($conexiondb);
                $resultado['status']=true;
                exit();
            }

        }

    break;
}
?>