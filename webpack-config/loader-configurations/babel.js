'use strict';

const path = require('path');
let srcPath = path.join(__dirname, '../../src');

module.exports = {
  test: /\.js$/,
  exclude: /node_modules/,
  include: [srcPath],
  loader: 'babel-loader',
  query: {
    cacheDirectory: '',
    presets: [
      [
        'es2015',
        {
          loose: true,
          modules: false
        }
      ],
      'react',
      'stage-1'
    ]
  }
};
