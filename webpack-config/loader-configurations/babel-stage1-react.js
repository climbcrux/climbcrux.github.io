'use strict';

const path = require('path');

module.exports = {
  test: /\.(js|jsx)$/,
  include: [
    path.resolve(__dirname, '../..', './src')
  ],
  use: {
      loader: 'babel-loader',
      options: {
        presets: [
          '@babel/preset-env',
          '@babel/preset-react'
        ]
      }
  }
};
