var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');
var readdir = fs.readdirSync;
function setupRoute (model) {
  var apis = model.routes;
  router.all(`/${model.name}*`, setModel);
  apis.forEach(function (api) {
    if (!model.controller[api.action]) {
      throw new Error(`${model.name} controller 中找不到 ${api.action}方法`);
    }
    if (!router[api.method]) {
      throw new Error(`router 没有 router.${api.method} 方法`);
    }
    router[api.method](api.api, function (req, res, next) {
      req.api = api;
      model.controller[api.action](req, res, next);
    });
  });
  function setModel (req, res, next) {
    req.model = model;
    next();
  }
}
function route (app) {
  var models = app.models;
  models.forEach(function (model) {
    setupRoute(model);
  });
  return router;
}

module.exports = route;
