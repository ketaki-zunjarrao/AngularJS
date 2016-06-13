/// <reference path="D:\techLab\Web-upSkilling\ng-library\angular.js"/>
var techlabs = angular.module('techlabs', ['ngResource', 'ngMessages']);
techlabs.controller('StudentController', ['$scope', '$resource', '$log', function ($scope, $resource, $log) {
    $scope.student = {
        rollNo: "",
        name: "",
        age: "",
        email: "",
        date: "",
        isMale: ""
    };


    $scope.getStudents = function () {
        var url = "http://gsmktg.azurewebsites.net:80/api/v1/techlabs/test/students";
        var api = $resource(url);
        api.query(function success(studentsDTO) {
            $scope.students = studentsDTO;
            $log.log(studentsDTO);
        }, function error(errorInfo) {
            $log.log(errorInfo);

        })
    }


    $scope.getStudentById = function () {
        var api = $resource('http://gsmktg.azurewebsites.net:80/api/v1/techlabs/test/students/:id');
        api.get({
            id: $scope.student.rollNo
        }, function success(studentsDTO) {
            $scope.aStudent = studentsDTO;
            $log.log(studentsDTO);

        }, function error(errorInfo) {
            $log.log(errorInfo);

        })
    }

    $scope.addStudent = function () {
        var api = $resource('http://gsmktg.azurewebsites.net:80/api/v1/techlabs/test/students');
        api.save($scope.student, function success(studentsDTO) {
                console.log($scope.student);
                $scope.getStudents();
                $scope.reset();
            },
            function error(errorInfo) {
                $log.log(errorInfo);
            });
    }


    $scope.updateStudent = function () {
        var api = $resource('http://gsmktg.azurewebsites.net:80/api/v1/techlabs/test/students/:id', {}, {
            update: {
                method: 'PUT'
            }
        });

        api.update({
                id: $scope.student.rollNo
            }, $scope.student, function success(studentsDTO) {
                console.log($scope.student);
                $scope.getStudents();
                $scope.reset();
            },
            function error(errorInfo) {
                $log.log(errorInfo);
            });
    }


    $scope.deleteStudent = function (rollNo) {
        console.log(rollNo);
        var api = $resource('http://gsmktg.azurewebsites.net:80/api/v1/techlabs/test/students/:id');
        api.delete({
                id: rollNo
            }, function success(studentsDTO) {
                console.log($scope.student);
                $scope.getStudents();
            },
            function error(errorInfo) {
                $log.log(errorInfo);
            });
    }


    $scope.reset = function () {
        $scope.student.rollNo = "",
            $scope.student.name = "",
            $scope.student.age = "",
            $scope.student.email = "",
            $scope.student.date = "",
            $scope.student.isMale = ""
    }


}]);