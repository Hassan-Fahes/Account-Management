<?php
use Firebase\JWT\JWT;
use Firebase\JWT\Key;

function checkToken($headers) {
    
    require '../../vendor/autoload.php';

    $authHeader = $headers["Authorization"] ?? "";

    if (!$authHeader || !str_starts_with($authHeader, "Bearer ")) {
        return "Token not provided";  
    }

    $jwt = str_replace("Bearer ", "", $authHeader);

    $key = "fc4d26ab12f47a6e29b02d7e34922f8d0b9df39f4ef89a0ac27c3640281bc127";

    try {
        $decoded = JWT::decode($jwt, new Key($key, 'HS256'));

        return $decoded->user;
    } catch (Exception $e) {
        return "Invalid token";
    }
}