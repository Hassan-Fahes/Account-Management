<?php
require_once("../cors.php");
require_once("./checkToken.php") ;
$headers = getallheaders() ;
$token = checkToken($headers) ;
if($token == "Invalid token"){
    echo json_encode(["status" => "error_token" , "message" => $token]);
    die() ;
}
// get json data
$rawData = file_get_contents("php://input");

// transform json to array
$data = json_decode($rawData , true) ;

$code = htmlspecialchars(trim(string: $data["code"] ?? "")) ;
$name = htmlspecialchars(trim($data["name"] ?? "")) ;
$address = htmlspecialchars(trim($data["address"] ?? "")) ;
$currency = strtoupper(htmlspecialchars(trim($data["currency"] ?? ""))) ;
$mobile = htmlspecialchars(trim($data["mobile"] ?? "")) ;


// Validation Input
require("../validation/validation.php") ;
$errors = validateAddAccount($code , $name , $address , $currency , $mobile) ;
if(!empty($errors)){
    echo json_encode(["status" => "error" , "errors" => $errors]);
    exit();
}

// Insert To Database 
require_once("../Database/queries.php");
$querie = insertAccount($code , $name , $currency , $mobile , $address) ;

if(is_numeric($querie) ){
    echo json_encode(["status" => "success" , "message" => "Adding Successfuly" , "id" => $querie]);
    exit();
}else{
    echo json_encode(["status" => "error", "message" => "Error: " . $querie]);
}