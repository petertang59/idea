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

