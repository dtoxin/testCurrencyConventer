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
			controller: function($scope, convertService, localStorageService) {
				$scope.result = '?';
				$scope.from = 'rub';
				$scope.to = 'eur';
				$scope.src = 0;
				$scope.lastError = '';
				$scope.history = [{}];

				$scope.result = {
					rate: 0,
					v: 0
				};

				

				// load history

				if(localStorageService.isSupported){
					console.log(localStorageService.get('history'));
					$scope.history = localStorageService.get('history');
					//$scope.history = JSON.parse(localStorageService.get('history'));
				}

				// convert
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
							// save to history
							if(localStorageService.isSupported){
								//prevHistory = localStorageService.get('history');

								var obj = {
									from: data.from,
									to: data.to,
									sum: ( parseFloat(data.v) / parseFloat(data.rate) ),
									result: parseFloat(data.v)
								};
								$scope.history.unshift(obj);
								if($scope.history.length >=30){
									$scope.history.splice($scope.history.length-1, 1);
								}
								localStorageService.set('history', $scope.history);
							}
						}
					});
				};
			}
		};
	});