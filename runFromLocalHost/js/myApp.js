"use strict";

google.load('visualization', '1', {
    packages: ['corechart']
});


var myApp = angular.module('myApp', ['ngRoute']);


myApp.config(function($routeProvider){

    $routeProvider
        .when('/table',
        {
            controller: 'TableController',
            templateUrl: 'view/table.html'
        })
        .when('/chart',
        {
            controller: 'ChartController',
            templateUrl: 'view/chart.html'
        })
        .otherwise({ redirectTo: '/table' });

});



myApp.run(function($rootScope){
    // default state for the start of the app
   // $rootScope.fileName;
   // $rootScope.myFiles = [];
});




