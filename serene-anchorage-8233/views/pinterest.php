<link rel="stylesheet" type="text/css" href="inspiration.css"/>

<div class="container" ng-class="{'container-wide':toggle.state2}">
    <div class="button" ng-click="toggle.state2 = !toggle.state2">Change View</div>
<ul ng-repeat="element in pinterestFeed">
  <li class="pin-box">
    <a class="pin-name" href="{{element.name}}">{{element.title}}</a> 
    <div class="pin">
    <img src="{{element.image}}">
</div>
    <button ng-click="storeImage(element)">Save</button></li>
</ul>
</div>