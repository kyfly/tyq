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
        imgs:['/img/store.jpg'],
        created: new Date(),
        user: {
            id: 'USERID',
            name: 'NAME',
            headImg: '/img/store.jpg'
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