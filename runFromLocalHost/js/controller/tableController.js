

myApp.controller('TableController', ['$scope', '$rootScope', function($scope, $rootScope) {

   $scope.changeToChart = function(){
      // $location.path("/chart/:id");
   };

    $scope.name;

    $scope.$on('allFILES', function(events, args) { // for all the folder
        $scope.data = args;
        $scope.saveInfo();
    });


    $scope.saveInfo = function(){
        $rootScope.name = angular.copy($scope.data);
        $scope.name = $rootScope.name;
    };








}]);