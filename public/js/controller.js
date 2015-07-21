'use strict';

module.exports = function(app) {
	app.controller('appController', ['$scope', '$http', function($scope, $http) {
		var getAll = function(){
			$http.get('/settings').success(function(){
				console.log('I got data');
				console.log(response);
			});
		};

		getAll();

	}]);
};
