var crypto = require('crypto');
var request = require('request');
exports.login = function (req, res, next) {
    var remote = req.app.get('remote')
    var url = `${remote.domain}/${remote.pathPrefix}/admin`;
    var data='{"username": "liu","password": "liu654123"}';
    request.post({
        url: url,
        headers: {
            'content-type': 'application/json'
        },
        json: req.body
    }, function (err, response, data) {
        if (err) {
            res.status(401).send({
                error: {
                    code: 401,
                    message: '验证失败,密码或者账号输入错误'
                }
            });
        } else {
            res.send(data);
        }
    });
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