const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const css = require('./loader-configurations/css');
const cssModules = require('./loader-configurations/cssm');
const babelStage1React = require('./loader-configurations/babel-stage1-react');
const image = require('./loader-configurations/image');
const json = require('./loader-configurations/json');

module.exports = {
  entry: {
    app: './src/index.js',
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, '../'),
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
      template: path.join(__dirname, '../public/index.html'),
    })
  ],
  cache: false,
};
