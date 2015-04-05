// var myElement = document.getElementById('myElement');
// var hammer = new Hammer.Manager(myElement);
// var swipe = new Hammer.Swipe();

// hammer.add(swipe);

// hammer.on('swipeleft', function (){
// 	console.log('Hello');
// });

var container = document.querySelector('.container');
var msnry = new Masonry( container, {
  // options
  columnWidth: 50%,
  itemSelector: '.pin-box'
});

// $(document).ready(function(){

//   // hide #back-top first
//   $("#back-top").hide();
  
//   // fade in #back-top
//   $(function () {
//     $(window).scroll(function () {
//       if ($(this).scrollTop() > 100) {
//         $('#back-top').fadeIn();
//       } else {
//         $('#back-top').fadeOut();
//       }
//     });

//     // scroll body to 0px on click
//     $('#back-top a').click(function () {
//       $('body,html').animate({
//         scrollTop: 0
//       }, 700);
//       return false;
//     });
//   });
// });