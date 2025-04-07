<?php 
require_once("../cors.php") ;

$rowData = file_get_contents("php://input");
$data = json_decode($rowData , true) ;

$account_id = htmlspecialchars(trim($data["account_id"])) ;
require_once("../validation/validation.php");
// echo json_encode($account_id) ;die();
$account = validateDeleteAccount($account_id) ;
// echo json_encode($account["id"]) ;die();
if($account != "empty" && $account != "error"){
    require_once("../Database/queries.php");
    $delete = deleteAccount($account) ;
// echo json_encode($delete) ;die();
    if($delete){
        echo json_encode(["status" => "success" , "message" => "Delete Successfuly"]);
        die();
    }
    echo json_encode(["status" => "error" , "message" => "Error Server"]);
}
