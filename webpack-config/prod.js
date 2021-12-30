const { merge } = require('webpack-merge');
const common = require('./base.js');
const webpack = require('webpack');

module.exports = merge(common, {
  // mode: 'production',
  devtool: 'source-map',
  plugins: common.plugins.concat([
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
  ])
});
