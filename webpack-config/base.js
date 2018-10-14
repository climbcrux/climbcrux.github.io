'use strict';

// Loader Configurations
const babelStage1React = require('./loader-configurations/babel-stage1-react');
const image = require('./loader-configurations/image');
const json = require('./loader-configurations/json');

const path = require('path');
const srcPath = path.join(__dirname, '../src');

const babelConfig = Object.assign(babelStage1React, { include: srcPath});

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      babelConfig,
      image,
      json
    ]
  },
  plugins: []
};
