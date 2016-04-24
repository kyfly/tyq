var express = require('express');
var router = express.Router();
var path = require('path');
var wechatCtrl = require('../controllers/wechat');
var acount = require('../controllers/acount');
router.get('/', function (req, res, next) {
    res.sendfile(path.join(__dirname, '../../public/views/index.html'));
});
router.get('/wechat/articels', wechatCtrl.wechat);
/*微信用户入口*/
router.get('/wechat/users', wechatCtrl.entry);
router.get('/usercumulate', acount.usercumulate);
router.get('/login', acount.login);
//router.get('/register', acount.register);

module.exports = router;
