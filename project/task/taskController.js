/// <reference path="D:\techLab\Web-upSkilling\ng-library\angular.js"/>
var techlabsTasks = angular.module('techlabsTasks', ['ngResource', 'ngRoute', 'ngStorage', 'techlabsProjects', 'techlabsUser']);

techlabsTasks.controller('taskCtrl', ['$rootScope', '$scope', '$location', 'taskService', 'projectService', function ($rootScope, $scope, $location, taskService, projectService) {

	$scope.taskForm = {
		titleOfTask: "",
		dueDateOfTask: "",
		importanceOfTask: "",
		statusOfTask: ""
	};

	$scope.delete = function (taskName, project, user) {
		taskService.deleteTask(taskName, $rootScope.project, $rootScope.user);
	};

	$scope.getOldTaskName = function (oldName) {

		$rootScope.oldTaskName = oldName;
		$location.path('/taskEditForm');

	};

	$scope.getDetails = function (oldName) {
		taskService.getTask(oldName);
		$location.path('/taskDetails');
	};

	$scope.addNewTask = function () {
		var tempTask = {
			title: $scope.taskForm.titleOfTask,
			dueDate: $scope.taskForm.dueDateOfTask,
			importance: $scope.taskForm.importanceOfTask,
			status: $scope.taskForm.statusOfTask
		};
		taskService.addTask(tempTask);
		$location.path('/listTasks');
	}

	$scope.edit = function () {
		var oldName = $rootScope.oldTaskName;
		var newName = $scope.taskForm.titleOfTask;
		var newDate = $scope.taskForm.dueDateOfTask;
		var newImportance = $scope.taskForm.importanceOfTask;
		var newStatusOfTask = $scope.taskForm.statusOfTask;

		taskService.editTask(oldName, newName, newDate, newImportance, newStatusOfTask);
		$location.path('/listTasks');

	};

}]);