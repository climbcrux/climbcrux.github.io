'use strict';

var path = require('path');

var configs = {
  dev: require(path.join(__dirname, 'webpack-config/dev')),
}

function buildConfig(env) {
  return configs[env];
}

module.exports = buildConfig('dev');
