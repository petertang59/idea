var idea_KEY = 'ideas';

IdeaApp.Ideas = [
  {'title':'This is a pretty cool idea!', 'detail':'Extremely awesome!', 'image':'img/typography.png'},
  {'title':'This is another really cool Idea!', 'detail':'But it involves beer','image':'img/webdesign.png'}
];

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
  // localStorage.setItem(idea_KEY, JSON.stringify(idea));
  localStorage.setItem('ideas', JSON.stringify($scope.ideas));
}

function clearidea() {
  localStorage.setItem(idea_KEY, '[]');
}

IdeaApp.controller('IdeaController',['$scope',function($scope, $indexedDB){
 $scope.Ideas = IdeaApp.Ideas;



  $scope.addIdea = function (){
   $scope.Ideas.push({'title':$scope.newIdea,'detail':$scope.newDetail, 'image':$scope.newImage, toggle3: false})
   $scope.newIdea = ""
   $scope.newDetail = ""
   $scope.newImage = ""
    IdeaApp.Ideas = $scope.Ideas;
    localStorage.setItem('ideas', JSON.stringify($scope.ideas));
    console.log($scope.Ideas);

    // IdeaApp.push({'title':$scope.newIdea,'detail':$scope.newDetail});
  }  

  $scope.clearCompleted = function (){
   $scope.Ideas = $scope.Ideas.filter(function(item) {
     return !item.done
   })
  }

  $scope.delete = function  (index) {
   $scope.Ideas.splice(index, 1);
   console.log($scope.Ideas);
  };
   
  }]);

