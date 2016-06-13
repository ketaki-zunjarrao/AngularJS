var filter = angular.module('techlabsUser');
filter.filter('searchByTaskName', function () {
	return function (taskList, search) {
		var filteredList = [];

		if (!search) {
			return taskList;
		}

		angular.forEach(taskList, function (task) {

			angular.forEach(task.listedTask, function (aTask) {
				if (aTask.indexOf(search) != -1) {
					filteredList.push(task);
				}
			});
		});
		return filteredList;
	}
});