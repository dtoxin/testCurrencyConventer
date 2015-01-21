/* currency conventer v 0.0.1 by iwong */
angular.module('crConventer', ['ngRoute', 'app.controllers', 'app.directives', 'app.constants', 'app.services'])
	.config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider) {
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
			$httpProvider.defaults.withCredentials = true;
			// fucking CORS
			$httpProvider.defaults.useXDomain = true;
			delete $httpProvider.defaults.headers.common['X-Requested-With'];

	}]);