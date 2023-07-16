<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token, Authorization');

$response = file_get_contents('https://api.spacexdata.com/v4/rockets');
if ($response === false) {
    $responseData = [
        'success' => false,
        'message' => 'Failed to fetch data from SpaceX API',
        'data' => null,
    ];
} else {
    $responseData = [
        'success' => true,
        'message' => 'Data received successfully',
        'data' => json_decode($response),
    ];
}

header('Content-Type: application/json');
echo json_encode($responseData);
?>
