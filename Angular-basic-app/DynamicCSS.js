var app = angular.module('app', []);
app.controller('CssController', function ($scope) {

    $scope.algmnt = 'center';

    $scope.setAlignment = function (al) {
        console.log(al);
        $scope.algmnt=al;
        console.log("Align change");
    };

});