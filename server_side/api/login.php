<?php
// session_start() ;
require_once("../cors.php");
require_once("../../vendor/autoload.php") ;
use Firebase\JWT\JWT;
use Firebase\JWT\Key;

// get json data
$rawData = file_get_contents("php://input");

// transform json to array
$data = json_decode($rawData , true) ;

$username = htmlspecialchars(trim($data["username"] ?? "")) ;
$password = htmlspecialchars(trim($data["password"] ?? ""));
// echo json_encode(password_hash($password, PASSWORD_BCRYPT)) ;die() ;
require_once("../validation/validation.php") ;
$errors = validateLogin($username , $password) ;
if(!empty($errors)){
    echo json_encode(["status" => "error" , "errors" => $errors]);
    exit();
}

require_once("../Database/queries.php");
$user = loginn($username , $password) ;
if($user){
    unset($user["password"]);
    $key = "fc4d26ab12f47a6e29b02d7e34922f8d0b9df39f4ef89a0ac27c3640281bc127"; 
    $payload = [
        "iss" => "http://localhost", 
        "aud" => "http://localhost", 
        "iat" => time(),             
        "exp" => time() + (3600*30),      
        "user" => $user
    ];

    $jwt = JWT::encode($payload, $key, 'HS256');
    echo json_encode(["status" => "success" , "message" => $user , "token" => $jwt]);
}else{
    echo json_encode(["status" => "success" , "message" => "Incorrect email or password"]);
}
    