

myApp.controller('ChartController', ['$scope','$rootScope', function($scope, $rootScope) {

    // init
    var txtExtension = 0;
    var jpgExtension = 0;
    var tiffExtension = 0;
    var xmlExtension = 0;


    $scope.$on('allFILES', function(events, args){
        $scope.allFiles = args;

        $rootScope.name = angular.copy($scope.allFiles);
        $scope.name = $rootScope.name;

        $scope.calculate();

    });


    $scope.calculate = function(){

            for(var i =0; i < $scope.name.length; i++){
                if($scope.name[i].fileType == "txt"){
                    txtExtension++;
                }
                if($scope.name[i].fileType == "jpg"){
                    jpgExtension++;
                }
                if($scope.name[i].fileType == "tiff"){
                    tiffExtension++;
                }
                if($scope.name[i].fileType == "xml"){
                    xmlExtension++;
                }
            };

        // google charts
        var data = google.visualization.arrayToDataTable([
            ['task', "file type"],
            ['txt', txtExtension],
            ['jpg', jpgExtension],
            ['tiff', tiffExtension],
            ['xml', xmlExtension]
        ]);

        var options = {
            title: 'Content Type',
            pieHole: 0.2,
        };

        var chart = new google.visualization.PieChart(document.getElementById('chartdiv'));
        chart.draw(data, options);

    };



    // if we already have an array containing files info, calculate and display result
    if($rootScope.name != undefined && $rootScope.name != 'undefined' && $rootScope.name != null){
        $scope.calculate();
    }






}]);