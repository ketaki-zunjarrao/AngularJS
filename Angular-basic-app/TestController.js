   var techlabs = angular.module('techlabs', []);

   techlabs.controller('InvoiceController', ['$scope', '$rootScope', '$timeout', function ($scope, $rootScope, $timeout) {
       $rootScope.company = "Techlabs";
       $scope.invoice = {
           name: "AurionPro",
           id: 101,
           price: 1000
       };
       console.log($scope);
       console.log($rootScope);
       $timeout(function () {
           $rootScope.company = "Swabhav";
       }, 3000);

       $timeout(function () {
           $rootScope.job = "Devloper";
       }, 3000);
   }]);

   techlabs.controller('OrganizerController', ['$scope', '$rootScope', '$timeout', function ($scope, $rootScope, $timeout) {

       $scope.organizer = JSON.parse('{"id": "96b337e2-892d-4ae3-90f7-e29d4317681b",  "tenantId": "105","name": "GS Mktg labs", "description": "Techlbas"}');


   }]);

   techlabs.controller('ExhibitionsController', ['$scope', '$rootScope', '$timeout', function ($scope, $rootScope, $timeout) {

       $rootScope.company = "Techlabs";


       $scope.exhibitions = JSON.parse('[{"id": "56df52be-b183-4708-8731-933549063e5d", "name": "Home and Decor", "description": "Home and Decor","startDate": "10-Feb-2016","endDate": "25-Feb-2016","isActive": true},{"id": "407da5be-b183-4708-8731-933549063e5d","name": "Mega Trade Fair","description": "Mega trade Fair","startDate": "10-Feb-2016","endDate": "25-Feb-2016","isActive": true},{"id": "658da5be-b183-4708-8731-933549063e5d","name": "Mega Trade Fair","description": "Mega trade Fair","startDate": "10-Feb-2016","endDate": "25-Feb-2016","isActive": false},{"id": "063da5be-b183-4708-8731-933549407e5d","name": "Travel and Tourism","description": "mega trade","startDate": "10-Feb-2016","endDate": "25-Feb-2016","isActive": true}]');
   }]);