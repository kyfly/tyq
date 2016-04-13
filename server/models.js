var path = require('path');
var fs = require('fs');
var readdir = fs.readdirSync;
var app;
function loadApis () {
  var apidir = path.join(__dirname, './apis');
  var apis = [];
  readdir(apidir).forEach(function (file) {
    var apiFile = path.join(apidir, file);
    if (!fs.existsSync(apiFile)) {
      throw new Error(`${apiFile} 文件不存在`);
    }
    var api = require(apiFile);
    if (!api.default) {
      throw new Error(`${apiFile} 中缺少 exports.default 方法`);
    }
    apis.push(api.default);
  });
  return apis;
}
function loadController(controllerName) {
  var contrldir = path.join(__dirname, './controllers');
  var contrlFIle = path.join(contrldir, controllerName)
  if (!fs.existsSync(contrlFIle + '.js')) {
    throw new Error(`${contrlFIle} 文件不存在`);
  }
  var contrl = require(contrlFIle);
  return contrl;
}

function loadModels(server) {
  app = server;
  var models = loadApis ();
  models.forEach(function (model) {
    if (!model)
      return
    var controller = loadController(model.controller);
    model.controller = controller;
  });
  server.models = models;
}
exports.setup = loadModels;