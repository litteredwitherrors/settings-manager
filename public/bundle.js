/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

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


/***/ }
/******/ ]);