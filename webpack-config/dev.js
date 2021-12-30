const { merge } = require('webpack-merge');
const common = require('./base.js');
const webpack = require('webpack');

module.exports = merge(common, {
  // mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    publicPath: './dist'
  },
  plugins: common.plugins.concat([
    new webpack.HotModuleReplacementPlugin()
  ])
});
