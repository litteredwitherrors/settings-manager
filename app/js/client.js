'use strict';

require('angular/angular');

var settingsApp = angular.module('settingsApp', []);

//services
require('./services/resourceService.js')(settingsApp);

//controllers
require('./settings/settingsController.js')(settingsApp);

//directives
