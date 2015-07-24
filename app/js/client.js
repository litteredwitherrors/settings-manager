'use strict';

require('angular/angular');
require('angular-route');
require('angular-animate');

var settingsApp = angular.module('settingsApp', ['ngRoute', 'ngAnimate']);

//services
require('./services/resourceService.js')(settingsApp);

//controllers
require('./settings/controllers/settingsController.js')(settingsApp);

//directives
require('./settings/directives/edit_setting')(settingsApp);
require('./settings/directives/new_setting')(settingsApp);


settingsApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: '/templates/settings_list_view.html'
	})
	.otherwise({
		redirectTo: '/'
	});
}]);
