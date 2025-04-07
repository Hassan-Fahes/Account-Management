<?php
require_once("../cors.php");
require_once("../Database/queries.php") ;
$accounts = getAccounts() ;
if($accounts[0]){
    echo json_encode(["status" => "success" , "accounts" => $accounts[1]]);
}else{  
    echo json_encode(["status" => "error" , "error" => $accounts[1]]);
}