'use strict';

const path = require('path');
let srcPath = path.join(__dirname, '../../src');

module.exports = {
  test: /\.cssm$/,
  use: [
    'style-loader',
    {
      loader: 'css-loader',
      options: {
        importLoaders: 1,
        modules: {
          localIdentName: '[name]--[local]--[hash:base64:5]'
        }
      }
    }
  ],
};
