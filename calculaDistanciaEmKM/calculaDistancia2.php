<?php 

function distancia2($lat1, $lon1, $lat2, $lon2) {

$lat1 = deg2rad($lat1);
$lat2 = deg2rad($lat2);
$lon1 = deg2rad($lon1);
$lon2 = deg2rad($lon2);

$latD = $lat2 - $lat1;
$lonD = $lon2 - $lon1;

$dist1 = 2 * asin(sqrt(pow(sin($latD / 2), 2) +
cos($lat1) * cos($lat2) * pow(sin($lonD / 2), 2)));
$dist1 = $dist1 * 6371;
return number_format($dist1, 2, '.', '');
}

echo distancia2(-12.9813346,-38.4653612, -12.9741491,-38.4696483) . " Km<br />";




?>