// var idea_KEY = 'Ideas';

// IdeaApp.Ideas = (localStorage.getItem('Ideas')!==null) ? JSON.parse($scope.saved) :[
IdeaApp.Ideas = [ 
  {'title':'This is a pretty cool idea!', 'detail':'Make a typographic representation of the universe!', 'image':'img/typography.png','flag':false},
  {'title':'This is another really cool Idea!', 'detail':'Make a website about cats','image':'img/webdesign.png', 'flag':false}
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
	console.log($scope.Ideas);
  localStorage.setItem('Ideas', JSON.stringify($scope.Ideas));


  $scope.addIdea = function (){
   $scope.Ideas.push({'title':$scope.newIdea,'detail':$scope.newDetail, 'image':$scope.newImage, state3: false, state4: false, 'flag':false})
   $scope.newIdea = ""
   $scope.newDetail = ""
   $scope.newImage = ""

   localStorage.setItem('Ideas', JSON.stringify($scope.Ideas));
    console.log($scope.Ideas);
  }  

  $scope.delete = function  (index) {
   $scope.Ideas.splice(index, 1);
   console.log($scope.Ideas);
   localStorage.setItem('Ideas', JSON.stringify($scope.Ideas));
  };

   $scope.save = function () {  
    localStorage.setItem('Ideas', JSON.stringify($scope.Ideas));
    console.log($scope.Ideas);
  }

  $scope.clearCompleted = function (){
   $scope.Ideas = $scope.Ideas.filter(function(item) {
     return !item.done
   })
   return false;
  }

  $scope.showFlagged = function (){
    $scope.Ideas = $scope.Ideas.filter(function(item) {
      return item.flag
    })
  }

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

