angular
	.module('app', [
		'ui.router'
	])//Definicion de variables
	.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
		$urlRouterProvider.otherwise('/'); // Me regresa por default a Home

		$stateProvider
		.state('home', {
			url: '/',
			templateUrl: 'templates/home.html',
			controller: 'homeCtrl',
			resolve: {
				friends: ['$http', function($http) {
					return $http.get('data/friends.json').then(function (response) {
						return response.data;
					})
				}]
			}
		})
		.state('about', {
			url: '/about',
			templateUrl: 'templates/about.html',
			controller: 'aboutCtrl'
		})
		.state('contact', {
			url: '/contact',
			templateUrl: 'templates/contact.html',
			controller: 'contactCtrl'
		})
	}])