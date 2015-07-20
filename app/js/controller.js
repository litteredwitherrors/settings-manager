'use strict';

var settingsApp = angular.module('settingsApp', ["ngAnimate"]);

settingsApp.controller('appController', ['$scope', '$http', function($scope, $http) {
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

	// $scope.createNew = function() {
	// 	creating = true;
	// }

	$scope.submitForm = function(setting) {
		console.log(setting);
		$http.post('/settings', setting).success(function(response) {
			refresh();
		});
	};

	$scope.destroy = function(id) {
		console.log(id);
		$http.delete('/settings/' + id).success(function(response) {
			refresh();
		});
	}

	$scope.edit = function(setting) {
		setting.editing = true;
		console.log(setting);
	};

	$scope.update = function(setting) {
		console.log(setting);
    $http.put('/settings/' + setting._id, setting)
      .error(function (error) {
        console.log(error);
        $scope.errors.push({msg: 'could not update book'});
    });
		setting.editing = false;
  };
 	// $scope.createNew = function() {
	// 	$scope.creating = false;
	// }

}]);
