angular.module('app.services', [])
	.factory('convertService', function($http, consBackendUrl) {
		return {
			convert: function(from, to, value) {
				$http.defaults.useXDomain = true;
				return $http.jsonp(consBackendUrl + '?callback=JSON_CALLBACK',{
					params:{
						from: from,
						to: to,
						q: value
					}
				});
			}
		};
	});