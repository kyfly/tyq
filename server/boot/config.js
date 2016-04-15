var config = require('../config.json');
function loadConfig (app) {
  Object.keys(config).forEach(function (key) {
    app.set(key, config[key]);
  });
}
exports.setup = loadConfig;