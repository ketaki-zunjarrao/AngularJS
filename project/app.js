/// <reference path="D:\techLab\Web-upSkilling\ng-library\angular.js"/>
var techlabs = angular.module('techlabs', ['ngResource', 'ngRoute', 'ngStorage', 'techlabsUser', 'techlabsProjects', 'techlabsTasks']);

techlabs.config(function ($routeProvider) {
	$routeProvider.when('/', {
			templateUrl: 'user/view/login.html',
			controller: 'loginCtrl'
		}).when('/logout', {
			templateUrl: 'user/view/login.html',
			controller: 'loginCtrl'
		}, {
			templateUrl: 'user/view/login.html',
			controller: 'projectCtrl'
		}).when('/welcome', {
			templateUrl: 'project/view/projectDashboard.html',
			controller: 'projectCtrl'
		}).when('/login', {
			templateUrl: 'user/view/login.html',
			controller: 'loginCtrl'
		}).when('/newUser', {
			templateUrl: 'user/view/newUser.html',
			controller: 'loginCtrl'
		}).when('/search', {
			templateUrl: 'user/view/search.html',
			controller: 'loginCtrl'
		}).when('/changePassword', {
			templateUrl: 'user/view/changePassword.html',
			controller: 'loginCtrl'
		}).when('/forgotPassword', {
			templateUrl: 'user/view/forgetPassword.html',
		}).when('/deleteProject', {
			templateUrl: 'project/view/projectDashboard.html',
			controller: 'projectCtrl'
		})
		.when('/editProject', {
			templateUrl: 'project/view/editProject.html',
			controller: 'projectCtrl'
		}).when('/listTasks', {
			templateUrl: 'task/view/tasksDashboard.html',
			controller: 'projectCtrl'
		}, {
			templateUrl: 'task/view/tasksDashboard.html',
			controller: 'taskCtrl'
		}).when('/addTasks', {
			templateUrl: 'task/view/newTask.html',
			controller: 'taskCtrl'
		}).when('/deleteTask', {
			templateUrl: 'project/view/projectDashboard.html',
			controller: 'taskCtrl'
		}).when('/editTask', {
			templateUrl: 'task/view/tasksDashboard.html',
			controller: 'taskCtrl'
		}).when('/taskEditForm', {
			templateUrl: 'task/view/editTask.html',
			controller: 'taskCtrl'
		}).when('/taskDetails', {
			templateUrl: 'task/view/taskDetails.html',
			controller: 'taskCtrl'
		}).otherwise({
			redirectTo: '/'
		})
});