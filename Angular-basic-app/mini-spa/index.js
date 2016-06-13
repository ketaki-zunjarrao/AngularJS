///<reference path="D:\techLab\Web-upSkilling\ng-library\angular.js" /> 

///<reference path="D:\techLab\Web-upSkilling\ng-library\angular-route.js" />

var techlabs = angular.module('techlabs', ['ngRoute']);

techlabs.config(function ($routeProvider) {
    $routeProvider.when('/', {
            templateUrl: 'partialViews/home.html',
            controller: 'HomeController'
        })
        .when('/contact', {
            templateUrl: 'partialViews/contact.html',
            controller: 'ContactController'
        })
});

techlabs.controller('HomeController', ['$scope', function ($scope) {
    $scope.description = "I am home controller";
   }]);

techlabs.controller('ContactController', ['$scope', function ($scope) {
    $scope.description = "I am Contact Controller";
   }]);