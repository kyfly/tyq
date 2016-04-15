var rp = require('request-promise');
exports.list = function (req, res, next) {
  rp('http://whereru.etuan.org/api/Activities')
  .then(function (data) {
    res.send(data);
  });
}
exports.findById = function () {
   
}
exports.modify = function () {
   
}
exports.synchronize = function () {
  
}
exports.distroy = function () {
   
}