/// <reference path="D:\techLab\Web-upSkilling\ng-library\angular.js"/>

var techlabs = angular.module('techlabs', []);
techlabs.controller('MyCtrl', ['$scope', function ($scope) {
    $scope.flag = {
        caption: "India"
    }
}]);

techlabs.directive('flagofIndia', function () {
    return {
        restrict: 'EA',
        replace: false,
        templateUrl: 'TestDirectiveTemplate.html'
    }


});