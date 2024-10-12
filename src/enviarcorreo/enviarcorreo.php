<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
header('content-type: application/json; charset=utf-8');

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require_once 'PHPMailer/Exception.php';
require_once 'PHPMailer/PHPMailer.php';
require_once 'PHPMailer/SMTP.php';

// recibiendo varaiables

$json = file_get_contents('php://input');
$obj = json_decode($json);

$nombre=$obj->nombre;
$correo=$obj->correo;
$telefono=$obj->telefono;
$mensaje=$obj->mensaje;



$mail = new PHPMailer(true);

try {
    // $mail->SMTPOptions = array(
    //     'ssl' => array(
    //     'verify_peer' => false,
    //     'verify_peer_name' => false,
    //     'allow_self_signed' => true
    //     )
    //     );
    //Server settings
    $mail->SMTPDebug = 0;                      //Enable verbose debug output
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host       = 'mail.serdom.cl';                     //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = 'contacto@serdom.cl';                     //SMTP username
    $mail->Password   = 'm/#Jo95;,noT';                               //SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
    $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

    //Recipients
    $mail->setFrom('contacto@serdom.cl', 'Contacto');
    $mail->addAddress('serdom@serdom.cl', 'SERDOM');     //Add a recipient
    // $mail->addAddress('ellen@example.com');               //Name is optional
    // $mail->addReplyTo('info@example.com', 'Information');
    // $mail->addCC('cc@example.com');
    // $mail->addBCC('bcc@example.com');

    //Attachments
    // $mail->addAttachment('/var/tmp/file.tar.gz');         //Add attachments
    // $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    //Optional name

    //Content
    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = 'Contacto WEB :'. $nombre; 
    $mail->Body    = $mensaje."<br><br> Nombre: $nombre <br>Correo : $correo <br>Telefono : $telefono";
    $mail->AltBody = "";

    $mail->send();
    echo 'El Mensaje ha sido Enviado';
    exit();
} catch (Exception $e) {
    echo "Hubo un error no pudimos emviar el mensaje: {$mail->ErrorInfo}";
    exit();
}