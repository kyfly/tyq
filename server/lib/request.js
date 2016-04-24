var rp = require('request-promise');
function getOption(req) {
    var option = {
        uri: req.app.get('remote').domain + '/' + req.app.get('remote').pathPrefix + req.api.remote,
        qs: req.query,
        headers: req.headers,
        method: req.api.method.toUpperCase()
    }
    return option;
}
exports.get = function (req) {
  return rp(getOption(req));
}
exports.post = function (req, res, next) {
  return rp(getOption(req));
}
exports.delete = function (req, res, next) {
  
}
exports.put = function (req, res, next) {
  
}
exports.getMore = function (d) {
    var s = [];
    for (var i = 20; i >= 0; i--) {
        d.id = i;
        s.push(d);
    }
    return s; 
}