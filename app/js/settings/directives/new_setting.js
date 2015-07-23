'use strict';

module.exports = function(app) {
 app.directive('newSetting', function() {
	 return {
		 restrict: 'A',
		 templateUrl: "/templates/settings/new_settings_template.html",
		 replace: true
	 }
 })
};
