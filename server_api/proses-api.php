<?php

  header('Access-Control-Allow-Origin: *');
  header("Access-Control-Allow-Credentials: true");
  header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
  header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
  header("Content-Type: application/json; charset=utf-8");

  include "config/config.php";
  
  $postjson = json_decode(file_get_contents('php://input'), true);
  $today    = date('Y-m-d');


  if($postjson['aksi']=='register'){

  	$query = mysqli_query($mysqli, "INSERT INTO usuariosapli SET
  		rut = '$postjson[rut]',
  		nombre = '$postjson[nombre]',
      apellido = '$postjson[apellido]',
      direccion = '$postjson[direccion]',
      celular = '$postjson[celular]',
      email = '$postjson[email]',
      password = '$postjson[password]',
      estatus = 'y',
  		fechaCreacion	  = '$today' 
  	");


  	if($query) $result = json_encode(array('success'=>true));
  	else $result = json_encode(array('success'=>false, 'msg'=>'error, por favor pruebe otra vez'));

  	echo $result;

  }

  ?>