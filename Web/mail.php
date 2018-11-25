<?php
$fecha=date("d-m-y");
$hora=date("H:i:s");
$destino= "mail@dominio.com";
$asunto="Contacto - Web";
$desde='from: ' .$_POST[contact-name];
$comentario="
\n

Nombre : $_POST[contact-name]\n

Email: $_POST[contact-email]\n

Mensaje:\n $_POST[contact-message]\n

\n
Enviado: $fecha a las $hora\n

\n
";
mail($destino, $asunto, $comentario, $desde);
header('Location: index.html');
?>