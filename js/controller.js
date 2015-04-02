IdeaApp.controller('IdeaController',['$scope',function($scope, $indexedDB){
 $scope.Ideas = IdeaApp.Ideas;
 
 // $scope.Ideas = [
 //   {'title':'This is a pretty cool idea!', 'detail':'Extremely awesome!'},
 //   {'title':'This is another really cool Idea!', 'detail':'But it involves beer'}
 // ];
 console.log($scope.Ideas);

//   var OBJECT_STORE_NAME = 'title';

//   var myObjectStore = $indexedDB.objectStore(OBJECT_STORE_NAME);
  
//   myObjectStore.insert({"title": "Idea", "detail": "Cool beans"});

//     myObjectStore.getAll().then(function(results) {  
//       // Update scope
//       $scope.objects = results;

//     var myQuery = $indexedDB.queryBuilder().$index('age_idx').$gt(40).$asc.compile();
//    myObjectStore.each(myQuery).then(function(cursor){
//      cursor.key;
//      cursor.value;
//    });


  $scope.addIdea = function (){
   $scope.Ideas.push({'title':$scope.newIdea,'detail':$scope.newDetail})
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

  $scope.delete = function  (index) {
   $scope.Ideas.splice(index, 1);
  };
   
  }]);