/**
 * Created by ketaki.zunjarrao on 4/5/16.
 */
angular.module('myapp',['ngResource']).controller('MainCtrl', function ($scope,$http,$templateCache,$compile) {
    $scope.content = { url : 'subIndex.html'};

    $http.get('subIndex.html', {cache: $templateCache}).success(function(data) {
        var newScope = $scope.$new();
        $scope.content =  $compile(data)(newScope);
    });

});