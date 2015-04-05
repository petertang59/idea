var IdeaApp = angular.module('IdeaApp', ['ngAnimate','ngTouch','ngRoute'])

.config(['$routeProvider',
  function($routeProvider) {
  //set up routes
  $routeProvider
	.when('/add', {
      templateUrl: 'views/add.html',
      controller: 'IdeaController'
    })

    .when('/main', {
      templateUrl: 'views/main.html',
      controller: 'IdeaController'
    })

    .when('/inspiration', {
      templateUrl: 'views/pinterest.php',
      controller: 'InspirationController'
    })

    .when('/inspiration-type', {
      templateUrl: 'views/pinterest.php',
      controller: 'InspirationController-type'
    })

    .when('/inspiration-graphic', {
      templateUrl: 'views/pinterest.php',
      controller: 'InspirationController-graphic'
    })

    .when('/inspiration-web', {
      templateUrl: 'views/pinterest.php',
      controller: 'InspirationController-web'
    })

    .when('/inspiration-illustration', {
      templateUrl: 'views/pinterest.php',
      controller: 'InspirationController-illustration'
    })

      .when('/inspiration-film', {
      templateUrl: 'views/pinterest.php',
      controller: 'InspirationController-film'
    })

         .when('/inspiration-photography', {
      templateUrl: 'views/pinterest.php',
      controller: 'InspirationController-photography'
    })

    .when('/saved-inspiration', {
      templateUrl: 'views/saved-inspiration.html',
      controller: 'InspirationController'
    })

    .when('/archived', {
      templateUrl: 'views/archived.html',
    })

    .otherwise( {
    	templateUrl: 'views/main.html',
    	controller: 'IdeaController'
    });
}]);

