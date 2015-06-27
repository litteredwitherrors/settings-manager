'use strict'

var mongoose = require('mongoose');
var express = require('express');

var app = express();

var settingsRouter = express.Router();

mongoose.connect('mongodb://localhost/settings-manager');

app.use(express.static(__dirname + '/public'));

require('./routes/settings')(settingsRouter);

app.use('/', settingsRouter);

module.exports = app;
