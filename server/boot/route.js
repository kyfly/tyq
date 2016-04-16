var express = require('express');
var path = require('path');
var routes = require('../routes/index');
var apiRoutes = require('../routes/api');
function loadRoute(app) {
  app.use(express.static('public'));
  app.use('*', function (req, res, next) {
    req.app = app;
    next();
  });
  app.use('/', routes);
  app.use('/MS/*', function (req, res, next) {
    res.sendfile(path.join(__dirname, '../../public/views/index.html'));
  });

  app.use('/api', apiRoutes(app));
  app.use('*', notFount);
  app.use(error);
}
function notFount (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
}

function error (req, res, next) {
  res.status(err.status || 500);
  res.send({
    message: err.message,
    error: req.app.get('env') === 'development'? err : {}
  });
}
exports.setup = loadRoute;