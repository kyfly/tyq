var ALY = require('aliyun-sdk');
function AliYun(app) {
  var oss = new ALY.OSS({
    endpoint: app.get('oss').endpoint,
    accessKeyId: app.get('oss').key,
    secretAccessKey: app.get('oss').secret,
    // 杭州：http://oss-cn-hangzhou.aliyuncs.com
    // 注意：如果你是在 ECS 上连接 OSS，可以使用内网地址，速度快，没有带宽限制。
    // 杭州：http://oss-cn-hangzhou-internal.aliyuncs.com
    apiVersion: '2013-10-15'
  });
  this.oss = oss;
  this.bucket = app.get('oss').bucket
}

AliYun.prototype.putObject = function(option, cb) {
  this.oss.putObject({
    Bucket: this.bucket,
    Key: option.fileName,                 // 注意, Key 的值不能以 / 开头, 否则会返回错误.
    Body: option.data,
    ContentType: option.contentType,
    CacheControl: 'no-cache',         // 参考: http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.9
    ContentDisposition: '',           // 参考: http://www.w3.org/Protocols/rfc2616/rfc2616-sec19.html#sec19.5.1
    ContentEncoding: 'utf-8',         // 参考: http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.11
    ServerSideEncryption: 'AES256',
    Expires: null                     // 参考: http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.21
  },
  function (err, data) {
    cb(err, data);
  });
};
AliYun.prototype.listObjects = function (prefix, cb) {
  this.oss.listObjects({
    Bucket: this.bucket,
    Prefix: prefix
  }, function (err, list) {
    cb(err, list);
  });
}
AliYun.prototype.getObject = function (fileName, cb) {
  this.oss.getObject({
    Bucket: this.bucket,
    Key: fileName       // 参考: http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.21
  },
  function (err, data) {
    cb(err, data);
  });
}
module.exports = AliYun;