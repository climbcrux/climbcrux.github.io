'use strict';

const path = require('path');

// Loader Configurations 
const css = require('./loader-configurations/css');
const cssModules = require('./loader-configurations/cssm');

const baseConfig = require('./base');

baseConfig.module.loaders = baseConfig.module.loaders.concat([
  {
    test: /\.(js|jsx)$/,
    loader: 'babel-loader',
    include: [path.join(__dirname, '../src')]
  },
  css,
  cssModules
]);

module.exports = config;
