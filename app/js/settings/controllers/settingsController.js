'use strict';

module.exports = function(app) {
	app.controller('appController', ['$scope', 'resource', function($scope, resource) {

		var Setting = resource('settings');

		$scope.getSettings = function(){
			Setting.getAll(function(response){
				console.log(response);
				$scope.settings = response;
			});
		};

		$scope.submitForm = function(setting) {
			console.log('submitted');
			Setting.submitForm(setting, function(response) {
				$scope.getSettings();
			});
		};

		$scope.destroy = function(id) {
			console.log(id);
			Setting.destroy(id, function(response) {
				$scope.getSettings();
			});
		}

		$scope.update = function(id, setting) {
			console.log(id);
			Setting.update(id, setting, function(response) {
				setting.editing = false;
				$scope.getSettings();
			});
		};

		$scope.edit = function(setting) {
			setting.editing = true;
			console.log(setting);
		};
	}]);
};
