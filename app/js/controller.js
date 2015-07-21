'use strict';

module.exports = function(app) {
	app.controller('appController', ['$scope', '$http', function($scope, $http) {
		// $scope.creating = true;
		var refresh = function() {
			$http.get('/settings').success(function(response) {
				console.log('I got data');
				console.log(response);
				$scope.settings = response;
				$scope.setting = '';
			});
		};

		refresh();

	}]);
}
