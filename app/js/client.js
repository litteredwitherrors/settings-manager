'use strict';

require('angular/angular');

var settingsApp = angular.module('settingsApp', []);

//services
require('./services/resourceService.js')(settingsApp);

//controllers
require('./settings/controllers/settingsController.js')(settingsApp);

//directives
require('./settings/directives/new_setting')(settingsApp);
