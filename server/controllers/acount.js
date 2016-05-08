var crypto = require('crypto');

exports.login = function (req, res, next) {
    var token = {
        id: req.app.id ++,
        created: "2015-12-02T04:05:00.396Z",
        ttl: 7200
    }
    var sha1 = crypto.createHash('sha1');
    sha1.update(token.id.toString());
    token.token = sha1.digest('hex');
    res.send(token);
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