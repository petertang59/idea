<link rel="stylesheet" type="text/css" href="inspiration.css"/>
<a id="top"></a>
<div class="js-masonry container" ng-class="{'container-wide':toggle.state2}"
  data-masonry-options='{ 'columnWidth': 40%, 'itemSelector': '.pin-box' }'>
		    <div id="back-top">
		        <a>
		          <div id="top-arrow1"></div>
		          <div id="top-arrow2"></div>
		        <div id="back-top-bg"></div>
		        </a>
      		</div>
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

<script>
$(document).ready(function(){

  // hide #back-top first
  $("#back-top").hide();
  
  // fade in #back-top
  $(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $('#back-top').fadeIn();
      } else {
        $('#back-top').fadeOut();
      }
    });

    // scroll body to 0px on click
    $('#back-top').click(function () {
      $('body,html').animate({
        scrollTop: 0
      }, 700);
      return false;
    });
  });
});

</script>