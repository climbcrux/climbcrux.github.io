const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const css = require('./webpack-config/loader-configurations/css');
const cssModules = require('./webpack-config/loader-configurations/cssm');
const babel = require('./webpack-config/loader-configurations/babel');
const image = require('./webpack-config/loader-configurations/image');


module.exports = {
  entry: {
    app: path.resolve(__dirname, './src/index.js'),
  },
  resolve: {
    extensions: ['.js', '.jsx'],/*
    modules: [
      path.resolve(__dirname, './src'),
      'node_modules',
      path.resolve(__dirname, './node_modules'),
    ]*/
  },
  module: {
    rules: [babel, css, cssModules, image]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'CRUX Climbing',
      inject: true,
      template: path.resolve(__dirname, './public/index.html'),
      filename: './index.html'
    }),
  ],
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, './build'),
    publicPath: '/',
  },
  devServer: {
    static: path.resolve(__dirname, './build'),
    compress: true
  },
  cache: false
};
