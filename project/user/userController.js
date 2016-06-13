/// <reference path="D:\techLab\Web-upSkilling\ng-library\angular.js"/>
var techlabsUser = angular.module('techlabsUser', ['ngResource', 'ngRoute', 'ngStorage', 'techlabsTasks']);

techlabsUser.controller('loginCtrl', ['$rootScope', '$scope', '$location', 'userService', 'taskService', '$localStorage', function ($rootScope, $scope, $location, userService, taskService, $localStorage) {
	$scope.form = {
		email: "",
		password: "",
		search: "",
		newPassword: "",

	};
	$scope.search = "";
	$scope.register = function () {
		var email = $scope.form.email;
		var password = $scope.form.password;
		userService.addUser(email, password);
		$location.path('/login');

	};


	$scope.submit = function () {
		var email = $scope.form.email;
		var password = $scope.form.password;

		userService.getUser(email);
		if ($rootScope.user == null) {
			alert("User with id " + email + " does not exists..");
			$location.path('/login');
		}

		if ($rootScope.user.password == password) {
			console.log("Loggen id..")
			$location.path('/welcome');
		} else {
			alert("Invalid password..");
			console.log("login failed..");
			$location.path('/login');
		}
	};


	$scope.listAllTasks = function () {
		console.log("listAllTasks");
		userService.loadTaks();

	};

	$scope.logout = function () {
		$rootScope.user = null;
		console.log("clearing user..")
	};

	$scope.delete = function (a, b, c) {
		taskService.deleteTask(a, b, c);
	};

	$scope.changePwd = function () {
		if ($rootScope.user.password == $scope.form.password) {
			$rootScope.user.password = $scope.form.newPassword;
			alert("Password Changed");
		} else {
			alert(" oldPassword does not match");
		}
		userService.update();
	};
}]);