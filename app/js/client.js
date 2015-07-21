'use strict';

require('angular/angular');

var settingsApp = angular.module('settingsApp', []);

require('./settings/settingsController.js')(settingsApp);
