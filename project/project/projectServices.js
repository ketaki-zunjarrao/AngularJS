var servicesOfProject = angular.module('techlabsProjects');

servicesOfProject.factory('projectService', ['$rootScope', '$localStorage', 'userService', function ($rootScope, $localStorage, userService) {
	var addNewProject = function (newProject) {
		$rootScope.user.projects.push({
			projectName: newProject,
			date: new Date(),
			tasks: [],
			noOfTasks: 0
		});
		$localStorage.info = $rootScope.users;
	};

	var deleteCurrentProject = function (currentProject) {
		angular.forEach($rootScope.projects, function (aProject) {
			if (aProject.projectName == currentProject) {
				$rootScope.projects.splice($rootScope.projects.indexOf(aProject), 1);
			}
		});
		userService.update();
		//$localStorage.info = $rootScope.users;
	};

	var editCurrentProject = function (newName, oldName) {
		angular.forEach($rootScope.user.projects, function (aProject) {
			if (aProject.projectName == oldName) {
				aProject.projectName = newName;
			}
		});
		userService.update();

	};

	var getProjectByName = function (name) {
		angular.forEach($rootScope.user.projects, function (aProject) {
			if (aProject.projectName == name) {
				$rootScope.project = aProject;
			}
		});
	};

	return {
		addProject: addNewProject,
		deleteProject: deleteCurrentProject,
		editProject: editCurrentProject,
		getProject: getProjectByName
	}
}]);