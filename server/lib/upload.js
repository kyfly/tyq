var fs = require('fs');
var os = require('os');
var path = require('path');
var Busboy = require('busboy');
var AliYun = require('./AliYun.js');
var fse = require('fs-extra');
var guid = 1000;
var app;
function upload(server) {
  app = server;
  //AliYun = new AliYun(server);
    return function (req, res, next) {
        var query = req.query;
        if (query.dir !== 'ue' && (!query.dir || !query.id) && req.query.action !== 'config') {
          throw {
            "status": "500",
            "msg":"dir & id 是必须的参数"
          };
          return;
        }
        switch (req.query.action) {
          case 'config':
            res.setHeader('Content-Type', 'application/json');
            res.sendFile(path.join(__dirname, '../../public/lib/ueditor/config.json'));
            break;
            // case 'uploadimage':
            // uploadfile(req, res);
            // break;
          // case 'uploadtext':
          //   uploadText(req, res);
          //   break;
          //   case 'listimage':
          //   listfile(req, res, '.jpg,.jpeg,.png,.gif,.ico,.bmp');
          //   break;
          //   case 'uploadfile':
          //   uploadfile(req, res);
          //   break;
          //   case 'uploadvideo':
          //   uploadfile(req, res);
          //   break;
          //   case 'listfile':
          //   listfile(req, res, [".png", ".jpg", ".jpeg", ".gif", ".bmp",
          //       ".flv", ".swf", ".mkv", ".avi", ".rm", ".rmvb", ".mpeg", ".mpg",
          //       ".ogg", ".ogv", ".mov", ".wmv", ".mp4", ".webm", ".mp3", ".wav", ".mid",
          //       ".rar", ".zip", ".tar", ".gz", ".7z", ".bz2", ".cab", ".iso",
          //       ".doc", ".docx", ".xls", ".xlsx", ".ppt", ".pptx", ".pdf", ".txt", ".md", ".xml"].join(','));
          //   break;
        }
    }
}
var uploadText = function (req, res) {
  var content = req.body.content;
  var query = req.query;
  if (!req.body.content) {
    throw {
      "status": "500",
      "msg":"content is not defined"
    };
    return;
  }
  var file = query.dir + '/' + query.id + '/html' + '/' +getFileName('.html');
  AliYun.putObject({
    fileName: file,
    data: req.body.content,
    contentType: 'text/html'
  }, function (err, data) {
    if (err) {
      throw err;
    } else {
      res.send({
        'url': app.get('oss').rootUrl + file,
        'title': '',
        'original': file,
        'state': 'SUCCESS'
      });
    }
  });
}
var uploadfile = function (req, res) {
  var busboy = new Busboy({headers: req.headers});
  busboy.on('file', function(fieldname, file, filename, encoding, mimetype) {
    var isReturn = false;
    save(file, filename, mimetype, req, function (err, url) {
      //防止多次res.end()
      if (isReturn) return;
      isReturn = true;
      if (req.query.action === 'uploadimage')
      {
        url = app.get('oss').imgUrl + url;

      } else {
        url = app.get('oss').rootUrl + url;
      }
      var r = {
        'url': url,
        'title': req.body.pictitle,
        'original': filename,
      }
      if (err) {
        r.state = 'ERROR';
      } else 
        r.state = 'SUCCESS';
      res.json(r);
    });
  });
  return req.pipe(busboy);
}
var save = function (file, filename, mimetype, req, callback) {
  var realName = getFileName(path.extname(filename));
  var saveTo = path.join(os.tmpDir(), realName);
  var query = req.query;
  var fileType;
  switch (req.query.action) {
      case 'uploadimage':
        fileType = 'image';
        break;
      case 'uploadfile':
        fileType = 'file';
        break;
      case 'uploadvideo':
        fileType = 'video';
        break;
    }
  file.pipe(fs.createWriteStream(saveTo));
  file.on('end', function() {
    fs.readFile(saveTo,function(err,data){
      var file = query.dir + '/' + query.id + '/' + fileType + '/' + realName;
      AliYun.putObject({
        fileName: file,
        data: data,
        contentType: mimetype
      }, function (err, data) {
        callback(err, file)
      });
    });
  });
}
var getFileName = function(extname) {
    var d = new Date();
    var name = [ d.getFullYear(), d.getMonth() + 1, d.getDate(), d.getHours(),
                 d.getMinutes(), d.getSeconds(), d.getMilliseconds(), guid++ ]
                .join('_') + extname;
    return name;
}
var listfile = function (req, res, fileType) {
  var query = req.query;
  var urlRoot = app.get('oss').rootUrl;
  var file = query.dir + '/' + query.id + '/';
  AliYun.listObjects( file, function (err, list) {
    var r = {};
    if (err) {
      r.state = 'ERROR';
      res.status(500);
    } else r.state = 'SUCCESS';
    var data = [];
    for (var i = 0; i < list.Contents.length; i++) {
      var file = list.Contents[i].Key;
      var extname = path.extname(file);
      if (fileType.indexOf(extname.toLowerCase()) >= 0) {
        data.push({
            'url': urlRoot + file
        });
      }
    }
    r.list = data;
    r.start = 1;
    r.total = data ? data.length : 0;
    res.json(r);
  });
}
exports.upload = upload;