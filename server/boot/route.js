var express = require('express');
var path = require('path');
var routes = require('../routes/index');
var apiRoutes = require('../routes/api');
var upload = require('../lib/upload').upload;

function loadRoute(app) {
  app.use(express.static('public'));
  app.use('*', function (req, res, next) {
    req.app = app;
    next();
  });
  app.use('/', routes);
  app.use('/ue/uploads', upload(app));
  app.use('/api', apiRoutes(app));
  //app.use('*', notFount);
  app.use(error);
}
function notFount (req, res, next) {
  if (req.app.get('ignoreUrl').toString().indexOf(req.baseUrl) !== -1) {
    return next();
  }
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
}

function error (err, req, res, next) {
  console.log(err)
  if (req.app.get('ignoreUrl').toString().indexOf(req.baseUrl) !== -1) {
    return next();
  }
  res.status(err.status || 500);
  res.send({
    message: err.message,
    error: {}
  });
}
exports.setup = loadRoute;