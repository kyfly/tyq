var rq = require('../lib/request');
exports.find = function (req, res, next) {
    res.send({
        total: 3000,
        count: 20,
        content:rq.getMore({
          "id": 'ARTICLEID',
          "title": 'TITLETITLETITLETITLE',
          "thumb_url": '/img/store.jpg',
          "author": 'AUTHOR',
          "digest": 'DIGESTDIGESTDIGESTDIGESTDIGESTDIGESTDIGESTDIGESTDIGESTDIGESTDIGESTDIGESTDIGESTDIGESTDIGESTDIGESTDIGESTDIGESTDIGEST',
          "update_time": new Date(),
          "tags": 'TAG1,TAG2'
        })
    })
}
exports.create = function (req, res, next) {
    res.send({
      status: 200
    })
}
exports.findById = function (req, res, next) {
    res.send({
      "id": 'ARTICLEID',
      "title": 'TITLETITLETITLETITLE',
      "thumb_media_id": 'THUMB_MEDIA_ID',
      "thumb_url": '/img/store.jpg',
      "show_cover_pic": 1,
      "author": 'AUTHOR',
      "digest": 'DIGESTDIGESTDIGESTDIGESTDIGESTDIGESTDIGESTDIGESTDIGESTDIGESTDIGESTDIGESTDIGESTDIGESTDIGEST',
      "content": 'CONTENTCONTENTCONTENTCONTENTCONTENTCONTENTCONTENTCONTENTCONTENTCONTENTCONTENTCONTENTCONTENTCONTENTCONTENTCONTENTCONTENTCONTENTCONTENTCONTENTCONTENT',
      "url": 'URL',
      "content_source_url": 'CONTETN_SOURCE_URL',
      "update_time": new Date(),
      "tags": 'TAG1,TAG2'
    })
}
exports.updateById = function (req, res, next) {
    res.send(req.body)
}
exports.synchronize = function (req, res, next) {
    res.send({
        status: 200
    })
}
exports.synchronizeMore = function (req, res, next) {
    res.send({
        status: 200
    })
}
exports.destroyById = function (req, res, next) {
    res.send({
        status: 200
    })
}
exports.destroyMore = function (req, res, next) {
    res.send({
        status: 200
    })
}