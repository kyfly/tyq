var wechatAPI = require('wechat-api');
var webot = require('weixin-robot');
module.exports = function (webot) {
    webot.set('你好', function(info) {
        console.log(info.req.body)
        return ['你也好', '你好', '很高兴认识你'];
    });
}
/* 
    获取永久文章列表
 */
module.exports.wechat = function (req, res, next) {
    var api = new wechatAPI(req.app.get('wechat').appid, req.app.get('wechat').appsecret);
    var type = req.body.type || 'news';
    var offset = req.body.offset || 0;
    var count = req.body.count || 10;
    api.getMaterials(type, offset, count, function(err,result,gotten){
        res.send(result);
    });
}