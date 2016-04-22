var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var boot = require('./boot');

var app = express();
app.use(favicon(path.join(__dirname, '../public', 'img/icon.jpg')))
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

boot.setup(app);


module.exports = app;
