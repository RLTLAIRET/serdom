
<?php
include('../db/db.php');
// $resultado['mensaje']="Entrando al Login: ";
// echo json_encode($resultado); 
switch($_SERVER['REQUEST_METHOD']){
    case 'POST':
       $_POST=json_decode(file_get_contents('php://input'),true);
       $nombre     =$_POST['nombre'];
       $descripcion=$_POST['descripcion'];
       $imagen     =$_POST['imagen'];
       if(($nombre!="")&&($descripcion!="")){
         /////  verificar si el nombre de catalogo existe
         $query="SELECT * FROM catalogo WHERE nombre='$nombre'";
         $sql = mysqli_query($conexiondb, $query);
         $result = mysqli_fetch_assoc($sql);
         if ($result > 0){
            $resultado['data']="";
            $resultado['mensaje']='Ya Existe un Catalogo con ese nombre';
            $resultado['status']=false;
            echo json_encode($resultado);
            exit();
         }
         ///// consultar si existe el usuario
         $query = "INSERT INTO catalogo (nombre,descripcion,imagen)  VALUES ('$nombre','$descripcion','$imagen')";
         $result = mysqli_query($conexiondb, $query);
         if ($result > 0) {
            $resultado['data']="";
            $resultado['mensaje']='Hemos agregado el catalogo';
            $resultado['status']=true;
            echo json_encode($resultado);
            exit();
         } else {
            $resultado['data']="";
            $resultado['mensaje']='Error: Agregando Catalogo' . $query . '<br>' . mysqli_error($conexiondb);
            $resultado['status']=false;
            echo json_encode($resultado);
            exit();

        }
       }
    break;
    case 'GET':
          if (isset($_GET["id"])){
            $query="SELECT * FROM catalogo WHERE id=".$_GET["id"];
            $sql = mysqli_query($conexiondb,$query);

            if(mysqli_num_rows($sql) > 0){
                $catalogo = mysqli_fetch_all($sql,MYSQLI_ASSOC);
                $resultado['data']=$catalogo;
                $resultado['mensaje']='Obteniendo el catalogo';
                $resultado['status']=true;
                echo json_encode($resultado);
            } else{  
                $resultado['data']="";
                $resultado["mensaje"]="No logramos encontrar catalogo";
                $resultado['status']=false;
                echo json_encode($resultado);
            }
        } else {  // consultar todo
               $sql = mysqli_query($conexiondb,"SELECT * FROM catalogo");
               if(mysqli_num_rows($sql) > 0){
                  $catalogos = mysqli_fetch_all($sql,MYSQLI_ASSOC);
                  $resultado['data']=$catalogos;
                  $resultado['mensaje']='Obteniendo todos los catalogo';
                  $resultado['status']=true;
                  echo json_encode($resultado);
               }  else{
                  $resultado['data']='';
                  $resultado["mensaje"]="No logramos leer los catalogos";
                  $resultado['status']=true;
                  echo json_encode($resultado);
               }
         }    
    break;
    case 'PUT':
        if (isset($_GET['id'])){ 
            $_PUT=json_decode(file_get_contents('php://input'),true);
            /// obtener  variables
            $nombre     =$_PUT['nombre'];
            $descripcion=$_PUT['descripcion'];
            $imagen     =$_PUT['imagen'];
            $tipoimg    =$_PUT['type'];
            $sizeimg    =$_PUT['size'];
            $resultado['mensaje']='Actualizar cATALOGO con id: '.$_GET['id']. ', Informnacion a Actualizar'.json_encode($_put);      
            $query="UPDATE  catalogo (nombre,descripcion,imagen, size_img, type_img)  VALUES ('$nombre','$descripcion','$imagen','$sizeimg','$tipoimg') WHERE id=". $_GET['id'];
            $sqlusuario = mysqli_query($conexiondb,$query);
            $resultado['mensaje']='Catalogo Actualizado ';
            echo json_encode($resultado);
            
        }
    break;
    case 'DELETE':
         if (isset($_GET['id'])){
            $query="DELETE FROM catalogo WHERE id=".$_GET["id"];
            $sqlusuario = mysqli_query($conexiondb,$query);
            if($sqlusuario){
                $resultado['data']='';
                $resultado['mensaje']='Catalogo Eliminado';
                $resultado['status']=true;
                echo json_encode($resultado);
                

            } else{  
                $resultado['data']='';
                $resultado['mensaje']='No logramos eliminar el catalogo';
                $resultado['status']=false;
                echo json_encode($resultado);
            }
        }
    break;
    }

?>

