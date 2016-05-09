var wechatAPI = require('wechat-api');
var webot = require('weixin-robot');
var config = require('../config')
var api = new wechatAPI(config.wechat.appid, config.wechat.appsecret);
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
    var type = req.body.type || 'news';
    var offset = req.body.offset || 0;
    var count = req.body.count || 10;
    api.getMaterials(type, offset, count, function(err,result,gotten){
        res.send(result.item[0].content.news_item[0].content.replace(/data\-src\=\".+?\"/, '/img.logo.png'));
        var a = `<section class="" style=" text-align: center; margin-top: 10px; margin-bottom: 10px;  box-sizing: border-box; "><img style="box-sizing: border-box; vertical-align: middle;" data-src="http://mmbiz.qpic.cn/mmbiz/ROXq2b6NlicgzZNMB6Rcbls82mwnd5xQM57OJUoDk2JdU7wYLicZPqC00TRfLxKjMLvssiclTHicRibwkgicaDDCeNicg/0?wx_fmt=png" class="" data-type="png" data-ratio="0.6675" data-w="400"  /></section>`
        console.log(/data/.test(a))
    });
}
module.exports.messages = function (req, res, next) {
    
}