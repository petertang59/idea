var idea_KEY = 'idea';

function loadidea() {
  var idea = localStorage.getItem(idea_KEY);
    try {
      idea = JSON.parse(idea);
      console.log(Object.prototype.toString.call(idea));
      if (Object.prototype.toString.call(idea) !== '[object Array]') {
        idea = [];
      }
    } catch (e) {
      idea = [];
    }
    return idea;
}

function pushPost(idea) {
  var idea = loadidea();
  idea.push(idea);
  localStorage.setItem(idea_KEY, JSON.stringify(idea));
}

function clearidea() {
  localStorage.setItem(idea_KEY, '[]');
}

IdeaApp.controller('IdeaController',['$scope',function($scope, $indexedDB){
 $scope.Ideas = IdeaApp.Ideas;



  $scope.addIdea = function (){
   $scope.Ideas.push({'title':$scope.newIdea,'detail':$scope.newDetail, toggle3: false})
   $scope.newIdea = ""
   $scope.newDetail = ""
    IdeaApp.Ideas = $scope.Ideas;
    console.log($scope.Ideas);

    // IdeaApp.push({'title':$scope.newIdea,'detail':$scope.newDetail});
  }  

    $scope.editIdea = function (){
   $scope.Ideas.update({'title':$scope.newIdea,'detail':$scope.newDetail})
   $scope.newIdea = ""
   $scope.newDetail = ""
    IdeaApp.Ideas = $scope.Ideas;
    console.log($scope.Ideas);

    // IdeaApp.push({'title':$scope.newIdea,'detail':$scope.newDetail});
  }  

  $scope.clearCompleted = function (){
   $scope.Ideas = $scope.Ideas.filter(function(item) {
     return !item.done
   })
  }

  $scope.go = function ( path ) {
  $location.path( path );
  };

  $scope.delete = function  (index) {
   $scope.Ideas.splice(index, 1);
   console.log($scope.Ideas);
  };
   
  }]);

