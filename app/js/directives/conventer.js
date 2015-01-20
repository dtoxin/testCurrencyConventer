angular.module('app.directives', [])
	.directive('crConventer', function() {
		return {
			restrict: "AE",
			templateUrl: 'views/cr-conventer.html',
			link: function(scope, elem, attrs) {
				scope.to = attrs.to || 'eur';
				scope.from = attrs.from || 'rub';
			},
			controller: function($scope) {
				$scope.result = '?';
				$scope.from = 'rub';
				$scope.to = 'eur';
				$scope.src = 0;

				
			}
		};
	});