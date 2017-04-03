angular
	.module('app')
	.controller('aboutCtrl', ['$scope', function($scope) {
		$scope.title = "Acerca De:";
		$scope.things = ['thing1', 'thing2', 'thing3'];
	}]);