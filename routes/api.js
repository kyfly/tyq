var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');
var readdir = fs.readdirSync;

//var api = require('../apis/user.js');
/* GET users listing. */
loadApis ().forEach(function (model) {
    if (!model)
        return
    var controller = loadController(model.controller);
    route(model, controller);
});
function loadApis () {
    var apidir = path.join(__dirname, '../apis');
    var apis = [];
    readdir(apidir).forEach(function (file) {
        var name = file.substring(0, file.indexOf('.js'));
        var apiFile = path.join(apidir, file);
        var api = require(apiFile).default;
        apis.push(api);
    });
    return apis;
}
function loadController(controller) {
    var contrldir = path.join(__dirname, '../controllers');
    var contrlFIle = path.join(contrldir, controller)
    var contrl = require(contrlFIle);
    return contrl;
}

function route (model, controller) {
    var apis = model.routes;
    router.all(`/${model.name}*`, setModel);
    apis.forEach(function (api) {
        router[api.method](api.api, controller[api.action]);
    });
    function setModel (req, res, next) {
        req.model = model;
        next();
    }
}

module.exports = router;
