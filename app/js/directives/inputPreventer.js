/*
	Filter input for currency
*/
angular.module('app.directives')
	.directive('digitsOnly', function() {
		return {
			require: 'ngModel',
			link: function(scope, element, attrs, modCtrl){
				modCtrl.$parsers.push(function (inVal){
					if( typeof inVal === 'undefined') { return; }
					var modified = inVal.replace(/[^0-9+.]/g, '');
					
					if(modified != inVal){
						modCtrl.$setViewValue(modified);
						modCtrl.$render();
					}
					
					return modified;

				});
			}
		};
	}
	);