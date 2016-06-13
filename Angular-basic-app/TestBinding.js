 var techlabs = angular.module('techlabs', []);
 techlabs.controller('BindingController', ['$scope', '$rootScope', '$timeout', function ($scope, $rootScope, $timeout) {

     $scope.student = {
         name: "Ketaki",
         text: "",
         id: 101
     };
   }]);