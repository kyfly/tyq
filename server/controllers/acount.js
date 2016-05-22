var crypto = require('crypto');
var request = require('request');
exports.login = function (req, res, next) {
    var remote = req.app.get('remote')
    var url = `${remote.domain}/${remote.pathPrefix}/admin`;
    var data='{"username": "liu","password": "liu654123"}';
    console.log(req.body)
    request.post({
        url: url,
        headers: {
            'content-type': 'application/json'
        },
        json: req.body
    }).pipe(res);
}
exports.register = function (req, res, next) {
    
}
exports.usercumulate = function (req, res, next) {
    res.send({
        user:
        {
            all: 20000,
            new: 10
        },
        BGRecord:{
            all: 300,
            new: 20
        },
        forum: {
            pv: 40000,
            uv: 3000
        },
        article: {
            pv: 4444,
            uv: 3000
        }
    })
}