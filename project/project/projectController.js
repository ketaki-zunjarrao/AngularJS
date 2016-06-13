/// <reference path="D:\techLab\Web-upSkilling\ng-library\angular.js"/>
var techlabsProjects = angular.module('techlabsProjects', ['ngResource', 'ngRoute', 'ngStorage', 'techlabsUser']);

techlabsProjects.controller('projectCtrl', ['$rootScope', '$scope', '$location', 'projectService', function ($rootScope, $scope, $location, projectService) {

	$scope.projectForm = {
		newProjectName: "",
	};
	$rootScope.projects = $rootScope.user.projects;


	$scope.getOldProjectName = function (oldName) {
		$rootScope.oldProjectName = oldName;
		$location.path('/editProject');
	};

	$scope.add = function () {
		var newProject = $scope.projectForm.newProjectName;
		projectService.addProject(newProject);
	};

	$scope.delete = function (projectName) {
		projectService.deleteProject(projectName);
	};

	$scope.edit = function () {
		var newProjectName = $scope.projectForm.newProjectName;
		var oldProjectName = $rootScope.oldProjectName;
		projectService.editProject(newProjectName, oldProjectName);
		$location.path('/welcome');
	};

	$scope.listTasks = function (projectName) {
		projectService.getProject(projectName);
		$location.path('/listTasks');
	};
}]);
