<?php
require_once("../cors.php");

// get json data
$rawData = file_get_contents("php://input");

// transform json to array
$data = json_decode($rawData , true) ;

$id = htmlspecialchars(trim($data["id"] ?? "")) ;
$code = htmlspecialchars(trim($data["code"] ?? "")) ;
$name = htmlspecialchars(trim($data["name"] ?? "")) ;
$address = htmlspecialchars(trim($data["address"] ?? "")) ;
$currency = strtoupper(htmlspecialchars(trim($data["main_currency"] ?? ""))) ;
$mobile = htmlspecialchars(trim($data["mobile"] ?? "")) ;


// Validation Input
require("../validation/validation.php") ;
require("../Database/queries.php");
$errors = validateAddAccount($code , $name , $address , $currency , $mobile) ;
$chekID = checkID("accounts" , $id) ;

if(!empty($errors)){
    echo json_encode(["status" => "error" , "errors" => $errors]);
    exit();
}if($chekID){
    // require("../Database/queries.php");
    $querie = updateAccount($code , $name , $currency , $address , $mobile , $id) ;
    // echo json_encode($querie) ;die() ;
    if($querie) {
        echo json_encode(["status" => "success" , "message" => "Edit Successfuly" ]);
        exit();
    }else{
        echo json_encode(["status" => "error", "message" => "Error: " . $querie]);
    }
}