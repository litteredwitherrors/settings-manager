'use strict';

module.exports = function(app) {
 app.directive('editSetting', function() {
	 return {
		 restrict: 'AC',
		 templateUrl: "/templates/settings/directives/edit_settings_template.html"
	 }
 })
};
