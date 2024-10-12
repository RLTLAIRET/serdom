
<?php

include('../db/db.php');
// $resultado['mensaje']="Entrando al Login: ";
// echo json_encode($resultado); 
switch($_SERVER['REQUEST_METHOD']){
    case 'POST':
       $_POST=json_decode(file_get_contents('php://input'),true);
    
       $imagen     =$_POST['imagen'];
  
   
       if($imagen!=""){
                 ///// consultar si existe el usuario
         $query = "INSERT INTO carrusel (imagen)  VALUES ('$imagen')";
         $result = mysqli_query($conexiondb, $query);
         if ($result > 0) {
            $resultado['data']='';
            $resultado['mensaje']="Hemos agregado Imagen al Carrusel";
            $resultado['status']=true;
            echo json_encode($resultado);
         } else {
            $resultado['data']='';
            $resultado['mensaje']="No logramos agregar la imagen al Carrusel ";
            $resultado['status']=false;
            echo json_encode($resultado);

         }
       }
    break;
    case 'GET':
      
        if (isset($_GET["id"])){
            $query="SELECT * FROM carrusel WHERE id_catalogo=".$_GET["id"];
            $sql = mysqli_query($conexiondb,$query);

            if(mysqli_num_rows($sql) > 0){
                $catalogo = mysqli_fetch_all($sql,MYSQLI_ASSOC);
                $resultado['data']=$catalogo;
                $resultado['mensaje']="Obteniendo la imagen del carrusel".$_GET["id"];
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
            $query="SELECT * FROM carrusel";
            $sql = mysqli_query($conexiondb,$query);
            $consulta=mysqli_num_rows($sql);
            if($consulta > 0){
                $categoria = mysqli_fetch_all($sql,MYSQLI_ASSOC);
                $resultado['data']=$categoria;
                $resultado['mensaje']="Obteniedo las imagenes del carrusel";
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
             $imagen     =$_PUT['imagen'];
             $resultado['mensaje']='Actualizar Categoria con id: '.$_GET['id']. ', Informnacion a Actualizar'.json_encode($_put);      
            $query="UPDATE  carrusel (imagen)  VALUES ('$imagen') WHERE id=". $_GET['id'];
            $sqlusuario = mysqli_query($conexiondb,$query);

            $resultado['mensaje']='Carrusel Actualizado ';
            echo json_encode($resultado);
            
        }
    break;
     case 'DELETE':
         if (isset($_GET['id'])){
            $query="DELETE FROM carrusel WHERE id=".$_GET["id"];
            $sql = mysqli_query($conexiondb,$query);
           
            if($sql){
                $resultado['mensaje']='Eliminar imagen del Carrusel con el id:' .$_GET['id'];
                $resultado['mensaje']='Imagen Eliminada';
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