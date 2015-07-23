'use strict';

module.exports = function(app){
	app.directive('newSettingDirective', function(){
		return {
			restrict: 'AC',
			templateUrl: '/templates/settings/directives/new_settings_template.html',
			replace: true
		}
	});
};
