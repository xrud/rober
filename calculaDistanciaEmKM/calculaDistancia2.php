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

$l1 = '-12.981334';
$l2 = '-38.4653612';
$l3 = '-12.9741491';
$l4 = '-38.4696483';

echo "A distância entre ($l1, $l2) e ($l3, $l4) é de <b>".distancia2($l1, $l2, $l3, $l4) . " Km<b/>";




?>