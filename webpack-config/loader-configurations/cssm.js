'use strict';

const path = require('path');
let srcPath = path.join(__dirname, '../../src');

module.exports = {
  test: /\.cssm$/,
  include: [srcPath],
  use: [
    'style-loader',
    {
      loader: 'css-loader',
      options: {
        modules: true,
        importLoaders: 1,
        localIdentName: '[name]--[local]--[hash:base64:5]'
      }
    },
    'postcss-loader'
  ]
};
