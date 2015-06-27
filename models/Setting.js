'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var settingsSchema = new Schema({
	name: String,
	params: {
		maxEnemyCount: Number,
		maxEnemyHealth: Number,
		maxPlayerhealth: Number
	}
});

module.exports = mongoose.model('Setting', settingsSchema, 'mainSettings');
