'use strict';

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Rules (Loaders)
const babelConfig = require(path.join(__dirname, 'rules/babel'));
const css = require(path.join(__dirname, 'rules/css'));
const cssm = require(path.join(__dirname, 'rules/cssm'));
const image = require(path.join(__dirname, 'rules/image'));


var config = {
  entry: path.join(__dirname, '../src/index.js'),
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'index.js',
    publicPath: '/',
  },
  devServer: {
    inline: true,
    port: 8080,
    historyApiFallback: true,
  },
  module: {
    rules: [
      babelConfig,
      css,
      cssm,
      image,
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: path.join(__dirname, '../public/index.html'),
    }),
    new webpack.HotModuleReplacementPlugin(),
  ]
};

module.exports = config;
