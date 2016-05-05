var WechatAPI = require('wechat-api');
var WechatConfig = require('../config.json').wechatTest;

/* 
    获取永久文章列表
 */
exports.wechat = function (req, res, next) {
    var api = req.app.wechatApi;
    
    var type = req.body.type || 'news';
    var offset = req.body.offset || 0;
    var count = req.body.count || 10;
    api.getMaterials(type, offset, count, function(err,result,gotten){
        res.send(result);
    });
}

exports.entry = function () {
    
}