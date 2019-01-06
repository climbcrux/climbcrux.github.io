'use strict';

// Loader Configurations

const path = require('path');
const srcPath = path.join(__dirname, '../src');

const css = require('./loader-configurations/css');
const cssModules = require('./loader-configurations/cssm');
const babelStage1React = require('./loader-configurations/babel-stage1-react');
const image = require('./loader-configurations/image');
const json = require('./loader-configurations/json');

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      srcPath,
      'node_modules'
    ]
  },
  module: {
    rules: [
      babelStage1React,
      css,
      cssModules,
      image,
      json
    ]
  },
  plugins: []
};
