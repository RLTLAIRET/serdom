
<?php

include('../db/db.php');
switch($_SERVER['REQUEST_METHOD']){
    case 'POST':
        if (isset($_GET['id'])){ 
            $_PUT=json_decode(file_get_contents('php://input'),true);
            /// obtener  variables
            $nombre     =$_PUT['nombre'];
            $descripcion=$_PUT['descripcion'];
            $imagen     =$_PUT['imagen'];
      
           $query="UPDATE  catalogo  SET  nombre='$nombre', descripcion='$descripcion', imagen='$imagen' WHERE id=". $_GET['id'];
           $sql = mysqli_query($conexiondb, $query);
           if ($sql > 0) {
               $resultado['mensaje']='Catalogo Actualizado ';
               $resultado['success']=true;
                echo json_encode($resultado);
           } else {
           
           }
           
       }
    break;
}
?>