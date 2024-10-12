
<?php

include('../db/db.php');
// $resultado['mensaje']="Entrando al Login: ";
// echo json_encode($resultado); 
switch($_SERVER['REQUEST_METHOD']){
    case 'POST':
       $_POST=json_decode(file_get_contents('php://input'),true);
       $nombre     =$_POST['nombre'];
       $imagen     =$_POST['imagen'];
       $id         =$_POST['catalogo'];
   
       if(($nombre!="")&&($imagen!="")){
         /////  verificar si el nombre de catalogo existe
         $query="SELECT * FROM categoria WHERE nombre='$nombre'";
         $sql = mysqli_query($conexiondb, $query);
         $result = mysqli_fetch_assoc($sql);

         if ($result > 0){
            $resultado['mensaje']='Ya Existe una Categoria con ese nombre';
            $resultado['success']=false;
            echo json_encode($resultado);
            exit();
         }

         ///// consultar si existe el usuario
         $query = "INSERT INTO categoria (id_catalogo, nombre, imagen)  VALUES ('$id','$nombre','$imagen')";
         $result = mysqli_query($conexiondb, $query);
         if ($result > 0) {
            $resultado['data']='';
            $resultado['mensaje']="Hemos agregado la categoria";
            $resultado['status']=true;
            echo json_encode($resultado);
         } else {
            $resultado['data']='';
            $resultado['mensaje']="No logramos agregar la categoria";
            $resultado['status']=false;
            echo json_encode($resultado);

         }
       }
    break;
    case 'GET':
      
        if (isset($_GET["id"])){
            $query="SELECT * FROM categoria WHERE id_catalogo=".$_GET["id"];
            $sql = mysqli_query($conexiondb,$query);

            if(mysqli_num_rows($sql) > 0){
                $catalogo = mysqli_fetch_all($sql,MYSQLI_ASSOC);
                $resultado['data']=$catalogo;
                $resultado['mensaje']="Obteniendo la categoria".$_GET["id"];
                $resultado['status']=true;
                echo json_encode($resultado);
                exit();
            }
            else{  
                $resultado['data']='';
                $resultado['mensaje']='Error: ' . $query . '<br>' . mysqli_error($conexiondb);
                $resultado['status']=false;
                echo json_encode($resultado);
                exit();
            }
        } else {  // consultar todo
            $query="SELECT * FROM categoria";
            $sql = mysqli_query($conexiondb,$query);
            $consulta=mysqli_num_rows($sql);
            if($consulta > 0){
                $categoria = mysqli_fetch_all($sql,MYSQLI_ASSOC);
                $resultado['data']=$categoria;
                $resultado['mensaje']="Obteniedo las categorias";
                $resultado['status']=true;
                echo json_encode($resultado);
            }
            else{
                $resultado['data']="";
                $resultado['mensaje']='Error: ' . $query . '<br>' . mysqli_error($conexiondb);
                $resultado['status']=false;
                echo json_encode($resultado);
            }
        }    
    break;
    case 'PUT':
        if (isset($_GET['id'])){ 
             $_PUT=json_decode(file_get_contents('php://input'),true);
             /// obtener  variables
             $nombre     =$_PUT['nombre'];
             $imagen     =$_PUT['imagen'];
             $resultado['mensaje']='Actualizar Categoria con id: '.$_GET['id']. ', Informnacion a Actualizar'.json_encode($_put);      
            $query="UPDATE  categoria (nombre,imagen)  VALUES ('$nombre','$imagen') WHERE id=". $_GET['id'];
            $sqlusuario = mysqli_query($conexiondb,$query);

            $resultado['mensaje']='Categoria Actualizada ';
            echo json_encode($resultado);
            
        }
    break;
     case 'DELETE':
         if (isset($_GET['id'])){
            $query="DELETE FROM categoria WHERE id_categoria=".$_GET["id"];
            $sql = mysqli_query($conexiondb,$query);
           
            if($sql){
                $resultado['mensaje']='Eliminar un Categoria con el id:' .$_GET['id'];
                $resultado['mensaje']='Categoria Eliminada';
                $resultado['status']=false;
                echo json_encode($resultado);
               
            }
            else{  
                $resultado['data']='';
                $resultado['mensaje']='Error: ' . $query . '<br>' . mysqli_error($conexiondb);
                $resultado['status']=false;
                echo json_encode($resultado); 
            }

        }
    break;
}
?>