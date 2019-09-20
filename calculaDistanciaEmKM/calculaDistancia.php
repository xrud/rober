<?php

// Fórmula https://pt.wikipedia.org/wiki/F%C3%B3rmula_de_Haversine

// No stack https://pt.stackoverflow.com/questions/23533/calcular-distancias-entre-duas-coordenadas


function distancia($recebeCasaLat, $recebeCasaLon, $lat1, $lon1, $lat2, $lon2, $lat3, $lon3 ) {

$recebeCasaLat = deg2rad($recebeCasaLat);
$recebeCasaLon = deg2rad($recebeCasaLon);

$lat1 = deg2rad($lat1);
$lon1 = deg2rad($lon1);

$dist1 = (6371 * acos( cos( $recebeCasaLat ) * cos( $lat1 ) * cos( $lon1 - $recebeCasaLon ) + sin( $recebeCasaLat ) * sin($lat1) ) );
$dist1 = number_format($dist1, 2, '.', '');

$dist2 = (6371 * acos( cos( $recebeCasaLat ) * cos( $lat2 ) * cos( $lon2 - $recebeCasaLon ) + sin( $recebeCasaLat ) * sin($lat2) ) );
$dist2 = number_format($dist2, 2, '.', '');

$dist3 = (6371 * acos( cos( $recebeCasaLat ) * cos( $lat3 ) * cos( $lon3 - $recebeCasaLon ) + sin( $recebeCasaLat ) * sin($lat3) ) );
$dist3 = number_format($dist3, 2, '.', '');


echo "A distância do GPS é " . $dist1 . " Km<hr>";
echo "A distância do GPS é " . $dist2 . " Km<hr>";
echo "A distância do GPS é " . $dist3 . " Km<hr>";

echo "A menor distância é " . min($dist1, $dist2, $dist3);
}

$casaLat = -12.9813346;
$casaLon = -38.4653612;

$pdvLat1 = -12.9741491;
$pdvLon1 = -38.4696483;

// Pdv2 -12.988055, -38.467101

$pdvLat2 = -12.988055;
$pdvLon2 = -38.467101;

// Pdv 3 -12.989946, -38.466739

$pdvLat3 =  -12.989946;
$pdvLon3 =  -38.466739;



distancia($casaLat, $casaLon, $pdvLat1, $pdvLon1,$pdvLat2, $pdvLon2,$pdvLat3, $pdvLon3);




?>


