'use strict';

const path = require('path');
let srcPath = path.join(__dirname, '../../src');

module.exports = {
  test: /\.css$/,
  exclude: /node_modules/,
  include: [srcPath],
  loaders: [
    'style-loader',
    'css-loader',
  ],
};
