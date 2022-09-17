<?php

echo "Dados enviados:<br>";
echo"<pre>";
var_dump($_GET);
echo"</pre>";



if ($_SERVER["REQUEST_METHOD"] == "GET") {
    if (empty($_GET["nome"])) {
      echo "<p style='color: #f00;' >O nome deve ser preenchido</p>";
    } else {
        $nome = test_input($_POST["nome"]);
    }

    if (empty($_GET["sobrenome"])) {
        echo "<p style='color: #f00;' >O sobrenome deve ser preenchido</p>";
      } else {
        $sobrenome = test_input($_POST["sobrenome"]);
      }
    
    if (empty($_GET["telefone"])) {
        echo "<p style='color: #f00;' >O telefone deve ser preenchido</p>";
      } else {
        $telefone = test_input($_GET["telefone"]);
      }
    
    if (empty($_GET["email"])) {
        echo "<p style='color: #f00;' >O email é obrigatório</p>";
    } else {
      $email = test_input($_GET["email"]);
    }
    if (empty($_POST["dataNasc"])) {
        echo "<p style='color: #f00;' >A data de nascimento deve ser preenchida</p>";
      } else {
        $dataNasc = test_input($_GET["dataNasc"]);
      }
  
  }

$nome = $_GET["nome"];
$sobrenome = $_GET["sobrenome"];
$telefone = $_GET["telefone"];
$email = $_GET["email"];
$dataNasc = $_GET["dataNasc"]; 


$contatos ="{ Nome: ".$nome. " , Sobrenome: ".$sobrenome. " ,Telefone: ".$telefone. " ,Email: ".$email. " , dataNasc: ".$dataNasc." }\n";

$registros = fopen('cadastros.txt','a+','<br>');
$escreve = fwrite($registros, $contatos);

?>