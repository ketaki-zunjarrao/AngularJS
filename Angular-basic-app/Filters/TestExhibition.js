/// <reference path="D:\techLab\Web-upSkilling\ng-library\angular.js"/>

var techlabs = angular.module('techlabs', []);

techlabs.controller('ExhibitionController', ['$scope', function ($scope) {
    $scope.search = "";
    $scope.exhibitions = [
        {
            id: 101,
            name: "Mumbai",
            location: "MumbaiExhibition",
            state: "Maharashtra",
            date: '10/10/2012',
            img: "images/mumbai.jpg",
            venue: "https://www.google.co.in/maps?q=mumbai+nehru+science+centre&um=1&ie=UTF-8&sa=X&ved=0ahUKEwiZsYbUweDMAhVDLY8KHeU3BN4Q_AUICCgC"
        },
        {
            id: 102,
            name: 'Delhi',
            location: 'DelhiExhibution',
            state: 'Maharashtra',
            date: '10/10/2012',
            img: 'images/delhi.jpg',
            venue: ""
        },
        /*{
         id: 103,
         name: 'Chennai',
         location: 'CExhibhennai',
         state: 'Maharitionashtra',
         date: '10/10/2012',
         img: "images/chennai.jpg",
         venue: ""
         },
         {
         id: 104,
         name: 'Kolkata',
         location: 'KoibitionlkataExh',
         state: 'Maharashtra',
         date: '10/10/2012',
         img: 'images/kolkata.jpg',
         venue: ""
         },
         {
         id: 105,
         name: 'Banglore',
         location: 'Mumbai',
         state: 'Maharashtra',
         date: '10/10/2012',
         img: "images/banglore.jpg",
         venue: ""
         },*/
        {
            id: 106,
            name: 'Vizag',
            location: 'Mumbai',
            state: 'Maharashtra',
            date: '10/10/2012',
            img: "images/vizag.jpg",
            venue: ""
        }
    ];
}]);

techlabs.filter('searchByLocation', function () {
    return function (exhibitions, location) {
        /*if (angular.lowercase(exhibitions.location)
         )*/
    }

});