var rp = require('request');
module.exports = function typ(req, res, next) {
    var remote = req.app.get('remote')
    var url = `${remote.domain}/${remote.pathPrefix}${req.api.remote}`;
    if (req.params) {
        Object.keys(req.params).forEach(function (key) {
            url = url.replace(`:${key}`, req.params[key])
        });
    }
    console.log(url)
    rp[req.api.method]({
        url: url,
        qs: req.query,
        json: req.body,
        header: {
            'content-type': 'application/json'
        }
    }, function (err, response, data) {
        if (err) {
            next('接口调用失败');
            return
        }
        if (data.error) {
            req.model.controller[req.api.action](req, res, next)
        } else if (typeof data === 'object') {
            res.send(data);
        } else {
            req.model.controller[req.api.action](req, res, next)
            console.log(data, err)
        }
    })
}
module.exports.getMore = function (d) {
    var s = [];
    var r = [];
    for (var i = 0; i < 10; i++) {
        var a = {};
        for(var x in d) if (x == 'id') {
            a[x] = i;
        } else {
            a[x] = d[x];
        }
        s.push(a)
    }
    return s; 
}