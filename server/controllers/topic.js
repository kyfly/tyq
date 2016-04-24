var rq = require('../lib/request');
exports.find = function (req, res, next) {
    res.send({
        total: 2000,
        count: 20,
        content: rq.getMore({
            id: 'ID',
            headImg: '/img/logo.ong',
            name: 'NAME',
            level: 20,
            topics: 23,
            replies: 45,
            points: 522,
            role: 2,
            openid: 'OPENIDOPENIDOPENIDOPENID'
        })
    });
}
exports.findById = function (req, res, next) {
    res.send();
}
exports.updateById = function (req, res, next) {
    res.send();
}
exports.distroyById = function (req, res, next) {
    res.send({
        status: 200
    });
}
exports.replyList = function (req, res, next) {
    res.send(re.getMore({
        id: ID,
        content: 'CONTENTCONTENTCONTENTCONTENTCONTENT',
        imgs:['/img/logo.png'],
        created: new Date(),
        user: {
            id: 'USERID',
            name: 'NAME',
            headImg: '/img/logo.png'
        }
    }));
}
exports.distroyReply = function (req, res, next) {
    res.send({
        status: 200
    });
}
exports.publish = function (req, res, next) {
    res.send(rq.getMore({
        id: 'ID',
        title: 'TITLE',
        created: new Date(),
    }));
}
exports.createPublish = function (req, res, next) {
    res.send({
        status: 200
    });
}
exports.updatePublishById = function (req, res, next) {
    res.send({
        status: 200
    });
}
exports.distroyPublishById = function (req, res, next) {
    res.send({
        status: 200
    });
}