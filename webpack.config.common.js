const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const css = require('./webpack-config/loader-configurations/css');
const cssModules = require('./webpack-config/loader-configurations/cssm');
const babelStage1React = require('./webpack-config/loader-configurations/babel-stage1-react');
const image = require('./webpack-config/loader-configurations/image');
const json = require('./webpack-config/loader-configurations/json');

module.exports = {
  entry: {
    app: './src/index.js',
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, './build'),
    publicPath: '/',
    //clean: true
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      path.join(__dirname, './src'),
      'node_modules'
    ]
  },
  module: {
    rules: [
      babelStage1React,
      css,
      cssModules,
      image,
      json
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'CRUX Climbing',
      inject: true,
      template: path.join(__dirname, './public/index.html'),
    }),
  ],
  cache: false
};
