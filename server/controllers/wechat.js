var WechatAPI = require('wechat-api');
/* appid 与 appsecret 需要替换成实际平台的id */
var appid = 'wxb54a4c0517a8584e';
var appsecret = '40c9a95eac50c41f4df617563cbb08ea';

var api = new WechatAPI(appid, appsecret, function (callback) {
  // 传入一个获取全局token的方法
  fs.readFile('access_token.txt', 'utf8', function (err, txt) {
    if (err) {return callback(err);}
    callback(null, JSON.parse(txt));
  });
}, function (token, callback) {
  // 请将token存储到全局，跨进程、跨机器级别的全局，比如写到数据库、redis等
  // 这样才能在cluster模式及多机情况下使用，以下为写入到文件的示例
  fs.writeFile('access_token.txt', JSON.stringify(token), callback);
});

/* 
    获取永久文章列表
 */
exports.wechat = function (req, res, next) {
    var type = req.body.type || 'news';
    var offset = req.body.offset || 0;
    var count = req.body.count || 10;
    api.getMaterials(type, offset, count, function(err,result,gotten){
        res.send(result);
    });
}
exports.entry = function () {
    
}