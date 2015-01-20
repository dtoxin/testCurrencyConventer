/* currency conventer v 0.0.1 by iwong */
angular.module('crConventer', ['ngRoute', 'app.controllers', 'app.directives'])
	.config(function($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'views/index.html'
			})
			.when('/euru', {
				template: '<cr-conventer from="eur" to="rub"></conventer>'
			})
			.when('/rueu', {
				template: '<cr-conventer from="rub" to="eur"></conventer>'
			})
			.otherwise({
				redirectTo: '/'
			});

			// inject $locationProvider and use $locationProvider.html5Mode(true); for nice url's
	});