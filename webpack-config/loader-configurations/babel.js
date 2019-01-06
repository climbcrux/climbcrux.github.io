'use strict';

const path = require('path');

module.exports = {
  test: /\.(js|jsx)$/,
  loader: 'babel-loader',
  include: [path.join(__dirname, '../../src')]
};
