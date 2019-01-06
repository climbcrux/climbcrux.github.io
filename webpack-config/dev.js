'use strict';

const path = require('path');
const merge = require('lodash.merge');
const webpack = require('webpack');

// Loader Configurations
const autoprefixer = require('autoprefixer');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const baseConfig = require('./base');
const publicPath = '/';


var config = merge({
  entry: {
    'index.js': path.join(__dirname, '../src/index.js')
  }, 
  output: {
    path: path.join(__dirname, '../'),
    filename: 'index.js',
    publicPath: publicPath,
  },
  devtool: 'eval',
  devServer: {
    publicPath: publicPath
  },
  cache: false,
}, baseConfig);

// Add additional plugins
config.plugins = config.plugins.concat([
  new HtmlWebpackPlugin({
    inject: true,
    template: path.join(__dirname, '../public/index.html'),
  }),
  new webpack.HotModuleReplacementPlugin(),
]);

module.exports = config;
