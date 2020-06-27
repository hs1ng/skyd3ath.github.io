<?php

$destinatario = "mldevswebsite@gmail.com";

$nome = $_REQUEST['txtNome'];
$email = $_REQUEST['txtEmail'];
$mensagem = $_REQUEST['txtMensagem'];
$assunto = $_REQUEST['txtAssunto'];

 // monta o e-mail na variavel $body

$body = "===================================" . "\n";
$body = $body . "FALE CONOSCO - ML DEVS" . "\n";
$body = $body . "===================================" . "\n\n";
$body = $body . "Nome: " . $nome . "\n";
$body = $body . "Email: " . $email . "\n";
$body = $body . "Assunto: " . $assunto . "\n\n";
$body = $body . "Mensagem: " . $mensagem . "\n\n";
$body = $body . "===================================" . "\n";

// envia o email
mail($destinatario, $assunto , $body, "De: $email\r\n");

// redireciona para a página de obrigado
header("location:index.html");


?>