

myApp.controller('MainController', ['$scope', '$rootScope', '$http', 'firstFolders', 'secondFolders', function($scope, $rootScope, $http, firstFolders, secondFolders) {

    // I decided to fetch the data in two different ways, fetching folders list from the factory service when input is checked.
    // when fetching the file list I used $http service and took the list from a json file.

    // disable search option before data is loaded
    document.getElementById("inputSuccess4").disabled = true;


    // load first folder hierarchy from factory service
    $scope.loadFolders = function(){
        $scope.firstList = firstFolders;
    };

    // load second folder from factory service
    $scope.loadFolder2 = function(){
      $scope.secondList = secondFolders;
    };



    // if user click on the second hierarchy folder list, load the files from the json (for this demo purpose, all sub folders contain the same files).
    $scope.loadFiles = function() {
        // for this demo each folder is retrieving the same content
            $http.get('JSON/package_files_list.json').success(function (data) {
                $scope.myFilesToSend = data;
            }).then(function(){
                // broadcast to table and chart all the content inside the folder
                $rootScope.$broadcast('allFILES', $scope.myFilesToSend);
            });


    };

    $scope.numberOfFiles = 0;

    // only load and open tree view with files but don't show it on table or chart
    $scope.showFiles = function(myIndex) {
            $http.get('JSON/package_files_list.json').success(function (data) {
                $scope.myFiles = data;
                $scope.numberOfFiles = data.length;
            });

        // also make the search input for file extension enable
        document.getElementById("inputSuccess4").disabled = false;
    };

    // file name for the $rootScope so we can share it with different controller
    /*
    $scope.whatIsTheFileName = function(theFileItemINDEX){
        // send me the current array item by index
        $rootScope.$broadcast('file!', $scope.myFiles[theFileItemINDEX]);
    };
    */









}]);