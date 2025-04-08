<?php
require_once("../cors.php") ;
require_once("./checkToken.php") ;
$headers = getallheaders() ;
$token = checkToken($headers) ;
if($token == "Invalid token"){
    echo json_encode(["status" => "error" , "message" => $token]);
    die() ;
}else{
    echo json_encode(["status" => "success" , "user" => $token]);
}