<?php
session_start() ;
require_once("../cors.php") ;
if(isset($_SESSION["user"])){
    session_destroy() ;
    echo json_encode(["status" => "success" ]);
}else{
    echo json_encode(["status" => "error"]) ;
}