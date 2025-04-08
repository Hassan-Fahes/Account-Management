<?php
require_once("../cors.php");
require_once("../Database/queries.php") ;
require_once("./checkToken.php") ;
$headers = getallheaders() ;
$token = checkToken($headers) ;
if($token == "Invalid token"){
    echo json_encode(["status" => "error_token" , "message" => $token]);
    die() ;
}
$accounts = getAccounts() ;
if($accounts[0]){
    echo json_encode(["status" => "success" , "accounts" => $accounts[1]]);
}else{  
    echo json_encode(["status" => "error" , "error" => $accounts[1]]);
}