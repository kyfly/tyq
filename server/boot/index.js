var path = require('path');
var fs = require('fs');
var readdir = fs.readdirSync;
function boot(app) {
  var bootdir = __dirname; 
  readdir(bootdir).forEach(function (file) {
    if (file === 'index.js')
      return;
    var file = path.join(bootdir, file);
    if (!fs.existsSync(file)) {
      throw new Error(`${file} 文件不存在`);
    }

    var module = require(file);
    module.setup(app);
  });
}

exports.setup = boot;