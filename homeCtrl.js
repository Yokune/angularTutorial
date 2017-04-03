angular
	.module('app')
	.controller('homeCtrl', ['$scope', 'friends', function($scope, friends) {
		$scope.title = "Angular Tutorial (controller)";
		$scope.friends = friends;
		$scope.items = ['item1', 'item2', 'item3'];
		$scope.selectedValue = 'item1';
	}]);