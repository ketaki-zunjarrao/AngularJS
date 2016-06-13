/// <reference path="D:\techLab\Web-upSkilling\ng-library\angular.js"/>

var techlabs = angular.module('techlabs', ['ngResource']);

techlabs.controller('OrganizerController', ['$scope', '$resource', '$log', function ($scope, $resource, $log) {
    $scope.getOrganizerClick = function () {

        var url = "http://gsmktg.azurewebsites.net:80/api/v1/organizers/96b337e2-892d-4ae3-90f7-e29d4317681b";
        var api = $resource(url);
        api.get(function success(organizerDTO) {
            $scope.organizer = organizerDTO;
            $log.log(organizerDTO);
            console.log($scope);

        }, function error(errorInfo) {
            $log.log(errorInfo);

        })
    }

   }]);

techlabs.controller('EventController', ['$scope', '$resource', '$log', function ($scope, $resource, $log) {
    $scope.getEventsClick = function () {
        var url = "http://gsmktg.azurewebsites.net:80/api/v1/organizers/96b337e2-892d-4ae3-90f7-e29d4317681b/exhibitions";

        var api = $resource(url);
        api.query(function success(eventsDTO) {
            $scope.events = eventsDTO;
            $log.log(eventsDTO);

        }, function error(errorInfo) {
            $log.log(errorInfo);

        })
    }

   }]);

techlabs.controller('EventByIdController', ['$scope', '$resource', '$log', function ($scope, $resource, $log) {
    $scope.organizer = {
        organizerId: ""
    };


    $scope.getEventByIdClick = function () {
        var api = $resource('http://gsmktg.azurewebsites.net:80/api/v1/organizers/:oid/exhibitions');
        api.query({
            oid: $scope.organizer.organizerId
        }, function success(eventsDTO) {
            $scope.events = eventsDTO;
            $log.log(eventsDTO);

        }, function error(errorInfo) {
            $log.log(errorInfo);

        })
    }

   }]);