var IdeaApp = angular.module('IdeaApp', ['ngAnimate','ngRoute'])

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
      templateUrl: 'views/inspiration.php',
    })

    .otherwise( {
    	templateUrl: 'views/main.html',
    	controller: 'IdeaController'
    });
}]);

 // angular.module('IdeaApp', ['xc.indexedDB'])
 //  .config(function ($indexedDBProvider) {
 //    $indexedDBProvider
 //      .connection('myIndexedDB')
 //      var objStore = db.createObjectStore('title', {keyPath: 'ssn'});
 //        objStore.createIndex('title_idx', 'title', {unique: false});
 //        objStore.createIndex('detail_idx', 'detail', {unique: false});
 //      });

IdeaApp.Ideas = [
  {'title':'This is a pretty cool idea!', 'detail':'Extremely awesome!'},
  {'title':'This is another really cool Idea!', 'detail':'But it involves beer'}
];