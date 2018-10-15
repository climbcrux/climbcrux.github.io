'use strict';

const path = require('path');

// Rules (Loaders)
const babelConfig = require(path.join(__dirname, 'rules/babel'));
const css = require(path.join(__dirname, 'rules/css'));
const cssm = require(path.join(__dirname, 'rules/cssm'));
const image = require(path.join(__dirname, 'rules/image'));


var config = {
  module: {
    rules: [
      babelConfig,
      css,
      cssm,
      image,
    ]
  }
};


module.exports = config;
