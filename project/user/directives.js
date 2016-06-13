var directives = angular.module('techlabsUser');
directives.directive('homeNavbar', function () {
	return {
		restrict: 'E',
		replace: 'false',
		templateUrl: 'homeHeader.html'

	};
});


directives.directive('loginNavbar', function () {

	return {
		restrict: 'E',
		replace: 'false',
		templateUrl: 'loginHeader.html'
	}
});