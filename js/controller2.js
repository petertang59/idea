// var idea_KEY = 'Ideas';

// IdeaApp.Ideas = (localStorage.getItem('Ideas')!==null) ? JSON.parse($scope.saved) :[
IdeaApp.Ideas = [ 
  {'title':'This is a pretty cool idea!', 'detail':'Extremely awesome!', 'image':'img/typography.png'},
  {'title':'This is another really cool Idea!', 'detail':'But it involves beer','image':'img/webdesign.png'}
];

// function loadidea() {
//   var idea = localStorage.getItem(idea_KEY);
//     try {
//       idea = JSON.parse(idea);
//       console.log(Object.prototype.toString.call(idea));
//       if (Object.prototype.toString.call(idea) !== '[object Array]') {
//         idea = [];
//       }
//     } catch (e) {
//       idea = [];
//     }
//     return idea;
// }

// function pushIdea(idea) {
//   var idea = loadidea();
//   idea.push(idea);
//   // localStorage.setItem(idea_KEY, JSON.stringify(idea));
//   localStorage.setItem('Ideas', JSON.stringify($scope.Ideas));
// }

// function clearidea() {
//   localStorage.setItem(idea_KEY, '[]');
// }

IdeaApp.controller('IdeaController',[
'$scope',function($scope){
 $scope.saved = localStorage.getItem('Ideas');
$scope.Ideas = (localStorage.getItem('Ideas')!==null) ? JSON.parse($scope.saved) : IdeaApp.Ideas;
 // $scope.Ideas = [
 // {'title':'This is a pretty cool idea!', 'detail':'Extremely awesome!', 'image':'img/typography.png'},
 //  {'title':'This is another really cool Idea!', 'detail':'But it involves beer','image':'img/webdesign.png'} ];
	console.log($scope.Ideas);
  // $scope.Ideas = (localStorage.getItem('Ideas')!==null) ? JSON.parse($scope.saved) : [{'title':'This is a pretty cool idea!', 'detail':'Extremely awesome!', 'image':'img/typography.png'},
  // {'title':'This is another really cool Idea!', 'detail':'But it involves beer','image':'img/webdesign.png'} ];
  localStorage.setItem('Ideas', JSON.stringify($scope.Ideas));


  $scope.addIdea = function (){
   $scope.Ideas.push({'title':$scope.newIdea,'detail':$scope.newDetail, 'image':$scope.newImage, state3: false, state4: false})
   // IdeaApp.push({'title':$scope.newIdea,'detail':$scope.newDetail, 'image':$scope.newImage, toggle3: false});
   $scope.newIdea = ""
   $scope.newDetail = ""
   $scope.newImage = ""
   // IdeaApp.Ideas = $scope.Ideas;
   localStorage.setItem('Ideas', JSON.stringify($scope.Ideas));
    console.log($scope.Ideas);
  }  

  $scope.clearCompleted = function (){
   $scope.Ideas = $scope.Ideas.filter(function(item) {
     return !item.done
   })
  }

  $scope.save = function () {	
  	localStorage.setItem('Ideas', JSON.stringify($scope.Ideas));
  	$scope.Ideas.state4 = false;
  	console.log($scope.Ideas);
  }

  $scope.delete = function  (index) {
   $scope.Ideas.splice(index, 1);
   console.log($scope.Ideas);
   localStorage.setItem('Ideas', JSON.stringify($scope.Ideas));
  };

  $scope.archive = function() {
		var oldIdeas = $scope.Ideas;
		$scope.Ideas = [];
		angular.forEach(oldIdeas, function(idea){
			if (!idea.done)
				$scope.Ideas.push(idea);
		});
		localStorage.setItem('Ideas', JSON.stringify($scope.Ideas));
	};
   
  }]);

