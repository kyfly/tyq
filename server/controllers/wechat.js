var wechatAPI = require('wechat-api');
var webot = require('weixin-robot');
module.exports = function (webot) {
    webot.beforeReply(function (info, next) {
        setTimeout(function () {
            info.reply = [{
                            "title": 'TITLETITLETITLETITLE',
                            "picUrl": 'http://39.181.24.218/img/store.jpg',
                            "description": "sadadasdasda"
                        },{
                            "title": 'TITLETITLETITLETITLE',
                            "picUrl": 'http://39.181.24.218/img/store.jpg',
                            "description": "sadadasdasda",
                            "url": "www.baidu.com"
                        }];
            next();
        }, 100)
    });
    webot.set(/.+/, function (info) {
        return info.reply;
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