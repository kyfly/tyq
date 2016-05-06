var webot = require('weixin-robot');

var WechatAPI = require('wechat-api');

var webot = require('weixin-robot');


var WechatConfig = require('../config.json').wechatTest;
var api = new WechatAPI(WechatConfig.appid, WechatConfig.appsecret);

function loadWebot(app){
    webot.set('subscribe',{
        pattern: function(info) {
            console.log(info);
            return info.is('event') && info.param.event === 'subscribe';
        },
        handler: function(info) {
            api.getUser(info.uid, function(err,res){
                info.reply('你好，'+res.nickname+'！');
            });
        }
    });

    webot.watch(app, { token: WechatConfig.token , path: '/wechat/users' });

    app.wechatApi = api;
        console.log(JSON.stringify(WechatConfig));
};

exports.setup = loadWebot;
