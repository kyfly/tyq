var wechatAPI = require('wechat-api');
var webot = require('weixin-robot');
var config = require('../config');
var q = require('q');
var api = new wechatAPI(config.wechat.appid, config.wechat.appsecret);
module.exports = function (webot) {
    //订阅事件
    webot.set('subscribe', {
        pattern: function(info) {
            return info.event === 'subscribe';
        },
        handler: function(info) {
            var openid = info.uid;
            api.getUser(openid, function(err,res){
                var user = {};
                user.openid = res.openid;
                user.nickname = res.nickname;
                user.sex = res.sex;
                user.province = res.province;
                user.city = res.city;
                user.country = res.country;
                user.headimgurl = res.headimgurl;
                //这是啥
                //user.privilege = res.rivilege;
                //user.unionid = res.unionid;
                console.log(user);
            });
        }
    });
    
    
    //自动回复
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
    var offset = req.body.offset || 0;
    var count = req.body.count || 10;
    getMaterials(offset, count)
    .then(function (items) {
        res.send(items)
    }, function (err) {
        res.send(err)
    })
}
module.exports.messages = function (req, res, next) {
    api.sendText(req.body.id, req.body.message, function(err,res){
        if(!err)
            res.send('succeed');
    });
}

function pullNews () {
    var type = 'news';
    q.all([
        getTotal(),
        getOffset()
    ])
    .then (function (result) {
        var total = result[0],
            offset = result[1],
            count = 10,
            mFun = [];
        while(offset < total) {
            offset = offset + count;
            mFun.push(getMaterials (offset, count))
        };
        return q.all(mFun);
    })
    .then(function (news) {
        console.log(news.length)
    }, function (err) {
        console.log(err)
    })
    
}
function getTotal() {
    return q.Promise(function(resolve, reject, notify) {
        api.getMaterialCount(function (err, result, res) {
            if (err) {
                reject(err);
            }
            resolve(result.news_count);
        });
    })
}
function getOffset() {
    return q.Promise(function(resolve, reject, notify) {
        setTimeout(function () {
            resolve(492)
        }, 1000)
    })
}
function getMaterials (offset, count) {
    function urlFormat (html) {
        return html.replace(/data-src\=\"/g, 'src="/img?url=')
    }
    function newsFormat (news, updated, newsItem) {
        for (var i = news.length - 1; i >= 0; i--) {
            news[i].content = urlFormat(news[i].content);
            news[i].updated = new Date(updated * 1000);
            newsItem.push(news[i]);
        }
        return newsItem;
    }
    function newsResult (resultItems) {
        var newsItem = [];
        for (var i = resultItems.length - 1; i >= 0; i--) {
            newsFormat(resultItems[i].content.news_item, resultItems[i].content.update_time, newsItem);
        }
        return newsItem;
    }
    return q.Promise(function(resolve, reject, notify) {
        api.getMaterials('news', offset, count, function(err,result,gotten){
            if (err) {
                reject(err)
            } else {
                resolve(newsResult(result.item))
            }
        });
    })
}