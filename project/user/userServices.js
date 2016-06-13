var sericesOfUser = angular.module('techlabsUser');

sericesOfUser.factory('userService', ['$rootScope', '$localStorage', function ($rootScope, $localStorage) {

	var addNewUser = function (tempEmail, tempPassword) {
		$rootScope.users = $localStorage.info;
		if ($rootScope.users == null) {
			$rootScope.users = [];
		}
		$rootScope.users.push({
			email: tempEmail,
			password: tempPassword,
			projects: [{
				projectName: "",
				date: new Date(),
				tasks: [],
				noOfTasks: 0
        }]
		});
		$localStorage.info = $rootScope.users;
	};

	var getUserById = function (id) {
		$rootScope.users = $localStorage.info;
		angular.forEach($rootScope.users, function (aUser) {
			if (aUser.email == id) {
				$rootScope.user = aUser;
			}
		})
	};

	var loadAllTasks = function () {

		$rootScope.taskList = [];

		angular.forEach($rootScope.users, function (aUser) {
			if (aUser.email == $rootScope.user.email) {
				angular.forEach(aUser.projects, function (aProject) {
					angular.forEach(aProject.tasks, function (aTask) {
						$rootScope.taskList.push({
							listedTask: aTask,
							listedProject: aProject,
							listedUser: aUser
						});
					});
				});
			}
		});
	};
	var updateLocalStorage = function () {
		angular.forEach($rootScope.users, function (aUser) {
			if (aUser.email == $rootScope.user.email) {
				angular.forEach(aUser.projects, function (aProject) {
					if (aProject.projectName == $rootScope.project.projectName) {
						aProject.tasks = $rootScope.project.tasks;
					}
				});
				aUser.projects = $rootScope.projects;
				aUser = $rootScope.user;
			}
		});
		$localStorage.info = $rootScope.users;
	}


	return {
		userInfo: $rootScope.info,
		addUser: addNewUser,
		getUser: getUserById,
		loadTaks: loadAllTasks,
		update: updateLocalStorage
	};

}]);