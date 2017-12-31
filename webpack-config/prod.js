'use strict';

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

// Rules (Loaders)
const babelConfig = require(path.join(__dirname, 'rules/babel'));
const css = require(path.join(__dirname, 'rules/css'));
const cssm = require(path.join(__dirname, 'rules/cssm'));
const image = require(path.join(__dirname, 'rules/image'));


var config = {
  entry: path.join(__dirname, '../src/index.js'),
  output: {
    path: path.join(__dirname, '../'),
    filename: 'index.js',
    publicPath: '/',
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
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new UglifyJSPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      template: path.join(__dirname, '../public/index.html'),
    }),
  ]
};

module.exports = config;
