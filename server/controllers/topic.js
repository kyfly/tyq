var rq = require('../lib/request');
exports.find = function (req, res, next) {
    res.send({
        total: 300,
        count: 20,
        content: rq.getMore({
            id: 'ID',
            content: 'CONTENT',
            imgs: '/img/store.jpg',
            created: new Date(),
            reply: 858,
            view: 555,
            like: 88,
            deleted: false,
            type: 1,
            state: {
                locked: true,
                istop: false
            },
            user: {
                id: 'USERID',
                name: 'NAME',
                headImg: '/img/weixin.jpg'
            }
        })
    });
}
exports.findById = function (req, res, next) {
    res.send({
            id: 'ID',
            content: 'CONTENT',
            imgs: '/img/store.jpg',
            created: new Date(),
            reply: 858,
            view: 555,
            like: 88,
            deleted: false,
            state: {
                locked: true,
                istop: false
            },
            user: {
                id: 'USERID',
                name: 'NAME',
                headImg: '/img/weixin.jpg'
            }
        });
}
exports.updateById = function (req, res, next) {
    res.send({
        status: 200
    });
}
exports.destroyById = function (req, res, next) {
    res.send({
        status: 200
    });
}
exports.replyList = function (req, res, next) {
    res.send(rq.getMore({
        id: 'ID',
        content: 'CONTENTCONTENTCONTENTCONTENTCONTENT',
        imgs: '/img/store.jpg',
        created: new Date(),
        user: {
            id: 'USERID',
            name: 'NAME',
            headImg: '/img/store.jpg'
        }
    }));
}
exports.destroyReply = function (req, res, next) {
    res.send({
        status: 200
    });
}
exports.publish = function (req, res, next) {
    res.send(rq.getMore({
        id: 'ID',
        title: 'TITLE',
        created: new Date(),
        updated: new Date()
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
exports.findPublishById = function (req, res, next) {
    res.send({
        id: 'ID',
        title: 'TITLE',
        content: "CONTENT",
        created: new Date(),
    });
}
exports.destroyPublishById = function (req, res, next) {
    res.send({
        status: 200
    });
}
exports.createTopic=function(req,res,next){
    res.send({
        status: 200
    });
}