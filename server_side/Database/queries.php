<?php
function insertAccount($code , $name , $currency , $mobile , $address){
    
    require_once("connection.php");

    try {
        $sql = "INSERT INTO accounts (code, name, main_currency, mobile, address) 
                VALUES (:code, :name, :currency, :mobile, :address)";
        
        $stmt = $pdo->prepare($sql);
        
        $stmt->bindParam(":code", $code);
        $stmt->bindParam(":name", $name);
        $stmt->bindParam(":currency", $currency);
        $stmt->bindParam(":mobile", $mobile);
        $stmt->bindParam(":address", $address);
        
        $stmt->execute();
    
        // echo json_encode(["status" => "success", "message" => "Account created successfully"]);
        return $pdo->lastInsertId() ;
    } catch (PDOException $e) {
        // echo json_encode(["status" => "error", "message" => "Error: " . $e->getMessage()]);
        return $e->getMessage() ;
    }
}

function getAccounts(){

    require_once("connection.php") ;

    try{
        $sql = "SELECT * FROM accounts" ;
        $stmt = $pdo->prepare($sql) ;
        $stmt->execute();
        $accounts = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return [true , $accounts] ;

    }catch(PDOException $e){
        return [false , $e->getMessage()] ;
    }
    
}

function checkID($table , $id){
    require("../Database/connection.php") ;

    try{
        $sql = "SELECT id FROM $table WHERE id=:id" ;
        $stmt = $pdo->prepare($sql) ;
        $stmt->bindParam(":id" , $id) ;
        $stmt->execute() ;
        $account = $stmt->fetch(PDO::FETCH_ASSOC) ;
        return [true , $account] ;
    }catch(PDOException $e){
        return [false , $e->getMessage()];
    }
}

function deleteAccount($account){
    require("../Database/connection.php") ;

    try{
        $sql = "DELETE FROM accounts WHERE id=:id" ;
        $stmt = $pdo->prepare($sql) ;
        $stmt->bindParam(":id" , $account["id"]) ;
        $stmt->execute() ;
        return true;
    }catch(PDOException $e){
        return false ;
    }
}

function updateAccount($code , $name , $currency , $address , $mobile , $id){
    require("connection.php") ;

    try{
        $sql = "UPDATE accounts SET code=:code , name=:name , main_currency=:currency , mobile=:mobile , address=:address WHERE id=:id" ;
        $stmt = $pdo->prepare($sql) ;
        $stmt->bindParam(":id" , $id) ;
        $stmt->bindParam(":code", $code);
        $stmt->bindParam(":name", $name);
        $stmt->bindParam(":currency", $currency);
        $stmt->bindParam(":mobile", $mobile);
        $stmt->bindParam(":address", $address);
        $stmt->execute() ;
        return true;
    }catch(PDOException $e){
        return false ;
    }
}

function loginn($username, $password){
    require("connection.php");

    try {
        $sql = "SELECT * FROM users WHERE username = :username";
        $stmt = $pdo->prepare($sql);
        $stmt->bindParam(":username", $username);
        $stmt->execute();
        $user = $stmt->fetch(PDO::FETCH_ASSOC);

        if ($user && password_verify($password, $user['password'])) {
            return $user;
        } else {
            return false;
        }

    } catch (PDOException $e) {
        return $e;
    }
}