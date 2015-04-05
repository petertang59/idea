<?php
$rss4 = new DOMDocument();
$rss4->load('https://www.pinterest.com/sarahklo/graphic-design.rss');  //Enter your pinterest username
 
$feed4 = array();
$pins = $rss4->getElementsByTagName('item');
foreach ($pins as $pin) {
	$description = $pin->getElementsByTagName('description')->item(0)->nodeValue;
	$start = strpos($description,"<img src") + 10;
    $length = strpos($description,"></a>") - 1 - $start;
    $image = substr($description,$start,$length);

    $item = array (
        'title' => $pin->getElementsByTagName('title')->item(0)->nodeValue,
        "image" => $image, 
        "name" => $pin->getElementsByTagName('link')->item(0)->nodeValue
        // 'date' => $pin->getElementsByTagName('pubDate')->item(0)->nodeValue,
        // 'description' => $pin->getElementsByTagName('description')->item(0)->nodeValue
    );
    array_push($feed4, $item);
}
echo json_encode($feed4);
 
?>