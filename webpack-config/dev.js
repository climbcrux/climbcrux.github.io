'use strict';

const path = require('path');
const merge = require('lodash.merge');
const webpack = require('webpack');

// Loader Configurations
const css = require('./loader-configurations/css');
const cssModules = require('./loader-configurations/cssm');
const autoprefixer = require('autoprefixer');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const baseConfig = require('./base');
const publicPath = '/';


var config = merge({
  output: {
    path: path.join(__dirname, '../'),
    filename: 'index.js',
    publicPath: publicPath,
  },
  devServer: {
    publicPath: publicPath
  },
  entry: [
    path.join(__dirname, '../src/index')
  ], 
  cache: false,
  devtool: 'eval'
}, baseConfig);

// Add additional loaders
config.module.rules = config.module.rules.concat([
  {
    test: /\.(js|jsx)$/,
    loader: 'babel-loader',
    include: [path.join(__dirname, '../src')]
  },
  css,
  cssModules
]);

// Add additional plugins
config.plugins = config.plugins.concat([
  new webpack.HotModuleReplacementPlugin(),
  new HtmlWebpackPlugin({
    inject: true,
    template: path.join(__dirname, '../public/index.html')
  })
]);

module.exports = config;
