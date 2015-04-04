var IMAGES_KEY = 'images';

function loadImages() {
	var images = localStorage.getItem(IMAGES_KEY);
  	try {
  		images = JSON.parse(images);
  		console.log(Object.prototype.toString.call(images));
  		if (Object.prototype.toString.call(images) !== '[object Array]') {
  			images = [];
  		}
  	} catch (e) {
  		images = [];
  	}
  	return images;
}

function pushImage(image) {
	var images = loadImages();
	images.push(image);
	// images.apply();
	localStorage.setItem(IMAGES_KEY, JSON.stringify(images));
}

function clearImages() {
	localStorage.setItem(IMAGES_KEY, '[]');
}

angular.module('IdeaApp').controller('InspirationController',['$scope',function($scope){
 $scope.Ideas = IdeaApp.Ideas;

  var result = fetch('/views/pinterest-rest.php');
  result.then(function (response) {
    return response.json()
  }).then(function (data) {
  	console.log(data);
    $scope.pinterestFeed = data;
    $scope.$apply();
  });

  $scope.storeImage = function (image) {
  	pushImage(image);
  };

  $scope.pinterestFeed = [];
   
  }]);

