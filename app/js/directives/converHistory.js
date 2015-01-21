angular.module('app.directives')
	.directive('convertHistory', function() {
		return {
			restrict: 'AE',
			scope: {
				history: '=history'
			},
			link: function(scope, elem, attr) {
				scope.$watchCollection('history', function() {
					if(scope.history !== null) {
						React.renderComponent(HistoryItems({history: scope.history}), elem[0]);
					}
				});
			},
			/*history = {
				[
					{
						from: 'rub'
						to: 'eur',
						sum: 123,
						result: 423
					}
				]
			}*/
		};
	});