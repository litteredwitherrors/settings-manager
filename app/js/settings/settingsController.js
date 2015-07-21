'use strict';

module.exports = function(app) {
	app.controller('appController', ['$scope', '$http', function($scope, $http) {
		var getAll = function(){
			$http.get('/settings').success(function(response){
				console.log(response);
				$scope.settings = response;
			});
		};
		getAll();

		$scope.submitForm = function(setting) {
			console.log(setting);
			$http.post('/settings', setting).success(function(response) {
				getAll();
			});
		};

		$scope.destroy = function(id) {
			console.log(id);
			$http.delete('/settings/' + id).success(function(response) {
				getAll();
			});
		}
		
		$scope.edit = function(setting) {
			setting.editing = true;
			console.log(setting);
		};

	}]);
};
