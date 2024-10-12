
<?php

include('../db/db.php');
// $resultado["mensaje"]="Entrando al Login: ";
// echo json_encode($resultado); 

switch($_SERVER['REQUEST_METHOD']){
    case 'POST':
       $_POST=json_decode(file_get_contents('php://input'),true);
       $usuario=$_POST['usuario'];
       $pass1=$_POST['password1'];
       $pass2=$_POST['password2'];
       $nombre=$_POST['nombre'];
       $correo=$_POST['correo'];
       if(($pass1!="")&&($usuario!="")&& ($pass1=$pass2)){
         ///// consultar si existe el usuario
         $query="SELECT * FROM usuarios WHERE usuario='$usuario'";
         $sqlusuario = mysqli_query($conexiondb,$query);
         $consulta = mysqli_fetch_array($sqlusuario);
         //// verificando se el usuario existe
         if ($consulta > 0) {
            $resultado['data']='';
            $resultado['mensaje']='El usuario ya esta registrado en la BD';
            $resultado['status']=false;
            echo json_encode($resultado);
            exit();
    
         } else {
            //// INSERTANDO NUEVO USUARIO
            $query="INSERT INTO usuarios (usuario, clave, nombre, correo) VALUES ('$usuario','$pass1','$nombre','$correo')";
            // $sqlusuario= mysqli_query($conexiondb, $query);
            // $consulta = mysqli_fetch_array($sqlusuario);
            if (mysqli_query($conexiondb, $query)) {
                $resultado['data']='';
                $resultado['mensaje']='Hemos agregado el registro' ;
                $resultado['status']=true;
                echo json_encode($resultado);
            } else {
                $resultado['data']='';
                $resultado['mensaje']='Error-Login :'. $query . mysqli_error($conexiondb);
                $resultado['status']=false;
                echo json_encode($resultado);
               
            }
     
           
 
            exit();
                      
         }
         
        }
    break;
    case 'GET':
        // $id=$_GET['id'];
        if (isset($_GET['id'])){
            $query="SELECT * FROM usuarios  WHERE id='$id'";
            $sqlusuario = mysqli_query($conexionBD,$query);
            $resultado["mensaje"]="Regresar Usuario con id: ".$_GET['id'];
            echo json_encode($resultado);
           
        } else {
           
            $query="SELECT * FROM usuarios";
            $sqlusuario = mysqli_query($conexiondb,$query);
            $resultado["mensaje"]="Regresar todos los Usuarios ";
            echo json_encode($sqlusuario);
            
        }    
    break;
    case 'PUT':
        $id=$_GET['id'];
        if (isset($_GET['id'])){ 
            $_PUT=json_decode(file_get_contents('php://imput'),true);
             /// obtener  variables
            $usuario=$_PUT['usuario'];
            $pass1=$_PUT['clave1'];
            $pass2=$_PUT['clave2'];
            $resultado["mensaje"]="Actualizar Usuario con id: ".$_GET['id']. ", Informnacion a Actualizar".json_encode($_put);      
            $query="UPDATE empleados SET nombre='$nombre',correo='$correo' WHERE id='$id'";
            $sqlusuario = mysqli_query($conexiondb,$query);

            $resultado["mensaje"]=" Usuario Actualizado ";
            echo json_encode($resultado);
            
        }
    break;
     case 'DELETE':
        $id=$_GET['id'];
        if (isset($_GET['id'])){
          
            $query="DELETE FROM empleados WHERE id='$id'";
            $sqlusuario = mysqli_query($conexionBD,$query);
           
            if($sqlusuario){
                $resultado["mensaje"]="Eliminar un usuario con el id:" .$_GET['id'];
                echo json_encode(["success"=>1]);
               
            }
            else{  echo json_encode(["success"=>0]); 
            }

        }
    break;
}
?>