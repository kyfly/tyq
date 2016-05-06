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
  var client = ['weixin*', 'users*', 'forum*', 'goods*'];
  client.forEach(function (r) {
    app.use('/' + r, function (req, res, next) {
      console.log(1);
      res.sendfile(path.join(app.root, app.get('source').index));
    });
  });
  app.use('/ue/uploads', upload(app));
  app.use('/api', apiRoutes(app));
}
exports.setup = loadRoute;