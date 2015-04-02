<link rel="stylesheet" type="text/css" href="inspiration.css"/>

<div class="container" ng-class="{'container-wide':toggle.state2}">
    <div class="button" ng-click="toggle.state2 = !toggle.state2">Change View</div>
<?php
$rss4 = new DOMDocument();
// $rss4->load('http://pinterest.com/janew/delicious.rss');  //Enter your pinterest username
// $rss4->load('http://www.pinterest.com/search/pins/?q=design/rss');  //Enter your pinterest username
$rss4->load('https://www.pinterest.com/annakaa/designspiration/rss');  //Enter your pinterest username
 
$feed4 = array();
$pins = $rss4->getElementsByTagName('item');
foreach ($pins as $pin) {
    $item = array ( 
        'title' => $pin->getElementsByTagName('title')->item(0)->nodeValue,
        'image' => $pin->getElementsByTagName('image')->item(0)->nodeValue,
        'link' => $pin->getElementsByTagName('link')->item(0)->nodeValue,
        'date' => $pin->getElementsByTagName('pubDate')->item(0)->nodeValue,
        'description' => $pin->getElementsByTagName('description')->item(0)->nodeValue,
    );
    array_push($feed4, $item);
}
 
for($x=0;$x<20;$x++) {  //Displays first three pins (can be changed)
    $title = str_replace(' & ', ' &amp; ', $feed4[$x]['title']);
    $link = $feed4[$x]['link'];
    $start = strpos($feed4[$x]['description'],"<img src") + 10;  //Find position of source image url from description
    $length = strpos($feed4[$x]['description'],"></a>") - 1 - $start;  //Find length of source image url from description
    $image = substr($feed4[$x]['description'],$start,$length);  //Extract source image url from description
    $date = date('l F d, Y', strtotime($feed4[$x]['date']));  //Date format can be changed
    // echo "<a href='".$link."' style='text-decoration:none; color:black' title='".$title."'>".$title."</a>";
    // echo "<a href='".$link."' style='text-decoration:none; color:black' title='".$title."'>".$title."</a>";
    // echo "<em>Pinned on ".$date."</em><br />";
    // echo 
    // echo"<div class='pin-box'><a class='pin-name' href='".$link."' style='text-decoration:none; title='".$title."'><div class='pin'><img src='".$image."' border=0 alt='".$title."'></a>
    // </div>";
    // // echo "<a class='pin-name' href='".$link."' style='text-decoration:none; title='".$title."'>".$title."</a></div>";

    // echo "<a href='".$link."'><img src='".$image."' border=0 alt='".$title."'></a>";
}
?>
<ul ng-repeat="element in pinterestFeed">
  <li class="pin-box">
    <a class="pin-name" href="{{element.link}}">{{element.title}}</a> 
    <div class="pin">
    <img src="{{element.image}}">
</div>
    <button ng-click="storeImage(element)">Save</button></li>
</ul>
</div>