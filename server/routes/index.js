var express = require('express');
var router = express.Router();
var path = require('path');
var wechatCtrl = require('../controllers/wechat');
var acount = require('../controllers/acount');
router.get('/', function (req, res, next) {
    res.sendfile(path.join(__dirname, '../../public/views/index.html'));
});
router.get('/wechat', wechatCtrl.wechat);
router.get('/wechat/:id', wechatCtrl.entry);
router.get('/login', acount.login);
router.get('/register', acount.register);

module.exports = router;
