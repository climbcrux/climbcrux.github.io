const path = require('path');
const config = require('../webpack.config.common.js');

// Additional Loaders
const cssModules = require('../webpack-config/loader-configurations/cssm');
const babelStage1React = require('../webpack-config/loader-configurations/babel-stage1-react');
const image = require('../webpack-config/loader-configurations/image');

// Overwrite the module loader rules
// This is needed to remove the css-loader used in the common config
config.module.rules = [
  babelStage1React,
  cssModules,
  image,
  {
    test: /\.(js|jsx)$/,
    loader: 'babel-loader',
    include: [path.join(__dirname, '../src/')]
  }
]

module.exports = config;
