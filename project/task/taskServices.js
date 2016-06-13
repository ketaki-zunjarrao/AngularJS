var servicesOfTask = angular.module('techlabsTasks');

servicesOfTask.factory('taskService', ['$rootScope', '$localStorage', 'projectService', 'userService', function ($rootScope, $localStorage, projectService, userService) {
	var addNewTask = function (newTask) {
		if ($rootScope.project.tasks == null) {
			$rootScope.project.tasks = [];
		}
		$rootScope.project.tasks.push(newTask);
		$rootScope.project.noOfTasks++;

		userService.update();

	};

	var deleteCurrentTask = function (currentTask, currentProject, currentUser) {
		angular.forEach($rootScope.users, function (aUser) {
			if (aUser.email == currentUser.email) {
				angular.forEach(aUser.projects, function (aProject) {
					if (aProject.projectName == currentProject.projectName) {
						angular.forEach(aProject.tasks, function (aTask) {
							if (currentTask == aTask.title) {
								aProject.tasks.splice(aProject.tasks.indexOf(aTask, 1));
								aProject.noOfTasks--;
							}
						});
					}
				});
			}
		});

		userService.update();
	};

	var editCurrentTask = function (oldName, newName, newDate, newImportance, newStatus) {
		angular.forEach($rootScope.project.tasks, function (aTask) {
			if (aTask.title == oldName) {
				aTask.title = newName;
				aTask.dueDate = newDate;
				aTask.importance = newImportance;
				aTask.status = newStatus
			}
		});

		userService.update
	};

	var getTaskByName = function (name) {

		angular.forEach($rootScope.project.tasks, function (aTask) {
			if (aTask.title == name) {
				$rootScope.task = aTask;
				console.log($rootScope.task);
			}
		});
	};

	return {
		addTask: addNewTask,
		deleteTask: deleteCurrentTask,
		editTask: editCurrentTask,
		getTask: getTaskByName
	}
}]);