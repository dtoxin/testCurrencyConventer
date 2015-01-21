/* conventer directive */
angular.module('app.directives', [])
	.directive('crConventer', function() {
		return {
			restrict: "AE",
			templateUrl: 'views/cr-conventer.html',
			link: function(scope, elem, attrs) {
				scope.to = attrs.to || 'eur';
				scope.from = attrs.from || 'rub';
			},
			controller: function($scope, convertService) {
				$scope.result = '?';
				$scope.from = 'rub';
				$scope.to = 'eur';
				$scope.src = 0;
				$scope.lastError = '';

				$scope.result = {
					rate: 0,
					v: 0
				}
				

				$scope.submit = function(){
					var srcToFloat = parseFloat($scope.src);
					if(srcToFloat == 'NaN') {
						$scope.lastError = 'Bad number.';
						return;
					}
					convertService.convert($scope.from, $scope.to, srcToFloat).success(function(data){
						if(data.hasOwnProperty('err')){
							$scope.lastError = data.err;
							return;
						}
						else if(data.hasOwnProperty('warning')){
							$scope.lastError = data.warning;
							return;
						}else{
							$scope.result.rate = data.rate;
							$scope.result.v = data.v;

							if(!$scope.$$phase) {
								$scope.$apply();
							}
						}
					});
				};
			}
		};
	});