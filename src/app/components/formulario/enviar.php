<?php

$destino="rltlairet@gmail.com";
$nombre=$_POST["nombre"];
$correo=$_POST["email"];
$telefono=$_POST["telefono"];
$mensaje=$_POST['mensaje'];
$contenido="Nombre: " .$nombre . "\nCorreo: " . $correo . "\nTelefono:" .$telefono . "\nMensaje: " . $mensaje;
mail($destino, "contacto web", $contenido);
header("location:gracias.html");



?>