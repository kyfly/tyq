var express = require('express');

var path = require('path');
var fs = require('fs');
var readdir = fs.readdirSync;

var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var config = require('./config');
var models = require('./models');
var routes = require('./routes/index');
var apiRoutes = require('./routes/api');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
loadConfig()
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
models.setup(app)
app.use('/', routes);
app.use('/api', apiRoutes(app));
// catch 404 and forward to error handler
app.use('*', function (req, res, next) {
  req.app = app;
  next();
});

function notFount (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
}
// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.send({
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.send({
    message: err.message,
    error: {}
  });
});
function loadConfig () {
  Object.keys(config).forEach(function (key) {
    app.set(key, config[key]);
  });
}


module.exports = app;
