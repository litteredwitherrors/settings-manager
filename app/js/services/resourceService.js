'use strict';

module.exports = function(app) {
	var handleError = function(data) {
		console.log(data);
	};

	app.factory('resource', ['$http', function($http){
		return function(resourceName) {
			return {
				
			};
		};
	}]);

	})
};
