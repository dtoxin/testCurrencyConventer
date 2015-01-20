/* currency conventer v 0.0.1 by iwong */
angular.module('crConventer', ['ngRoute', 'app.controllers'])
	.config(function($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'views/index.html'
			})
			.otherwise({
				redirectTo: '/'
			});

			// inject $locationProvider and use $locationProvider.html5Mode(true); for nice url's
	});