const path = require('path');
const config = require('../webpack.config.common.js');

config.module.rules = config.module.rules.concat([
  {
    test: /\.(js|jsx)$/,
    loader: 'babel-loader',
    include: [path.join(__dirname, '../src/')]
  }
])

module.exports = config;
