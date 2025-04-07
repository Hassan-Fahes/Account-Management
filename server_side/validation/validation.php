<?php
function validateAddAccount($code , $name , $address , $currency , $mobile){
    // Error
    $errors = [] ;
    // Validation Code
    if(!is_numeric($code) || strlen($code) !== 8){
        $errors["code"] = "Enter a valid Code" ;
    }

    if(strlen($name) <= 3 || strlen($name) >= 155 || !ctype_alpha($name)){
        $errors["name"] = "Enter a valid Name (only letters, no numbers or special characters)" ;
    }

    if(strlen($address) <= 3 || strlen($address) >= 150){
        $errors["address"] = "Enter a valid Address" ;
    }

    if($currency !== "USD" && $currency !== "LBP"){
        $errors["currency"] = "Enter a valid Currency" ;
    }

    if(strlen($mobile) < 8 || !is_numeric($mobile)){
        $errors["mobile"] = "Enter a valid Mobile" ;
    }

    return $errors ;
}

function validateDeleteAccount($account_id){
    require_once("../Database/queries.php");
    $account = checkID("accounts" , $account_id) ;
    if($account[0]){
        if($account[1]){
            return $account[1] ;
        }else{
            return "empty" ;
        }
    }else{
        return $account[1] ;
    }
    
}