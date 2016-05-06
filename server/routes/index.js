var express = require('express');
var router = express.Router();
var path = require('path');
var wechatCtrl = require('../controllers/wechat');
var acount = require('../controllers/acount');

router.get('/', function (req, res, next) {
    res.sendfile(path.join(req.app.root, req.app.get('source').index));
});
router.get(/^\/(weixin|users|forum|goods)/i, function (req, res, next) {
    res.sendfile(path.join(req.app.root, req.app.get('source').index));
});
router.get('/wechat/articels', wechatCtrl.wechat);
router.get('/usercumulate', acount.usercumulate);
router.post('/login', acount.login);
router.get('/login', function (req, res, next) {
    res.sendfile(path.join(req.app.root, '../public/views/login.html'));
});
//router.get('/register', acount.register);

module.exports = router;
