'use strict';

const path = require('path');

module.exports = {
  test: /\.js$/,
  include: [path.join(__dirname, '../../src')],
  loader: 'babel-loader',
  query: {
    cacheDirectory: '',
    presets: [
      'es2015',
      'react',
      'stage-1'
    ]
  }
};
