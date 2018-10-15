'use strict';

const webpack = require('webpack');

const path = require('path');
const merge = require('lodash.merge');
const args = require('minimist')(process.argv.slice(2));

// Loader Configurations
const css = require('./loader-configurations/css');
const cssModules = require('./loader-configurations/cssm');
const autoprefixer = require('autoprefixer');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const baseConfig = require('./base');
const publicPath = '/';

// Configur Sitemap
const SitemapPlugin = require('sitemap-webpack-plugin').default;
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
const sitemap = require('./sitemap');


var config = merge({
  output: {
    path: path.join(__dirname, '../'),
    filename: 'index.js',
    publicPath: publicPath,
  },
  entry: [
    path.join(__dirname, '../src/index'),
  ],
  cache: false
}, baseConfig);



// Add additional loaders
config.module.rules = config.module.rules.concat([
  {
    test: /\.(js|jsx)$/,
    loader: 'babel-loader',
    include: [path.join(__dirname, '../src')]
  },
  {
    test: /\.css$/,
    loader: [
      'style-loader',
      'css-loader'
    ]
  },
  {
    test: /\.cssm$/,
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          modules: true,
          importLoaders: 1,
          localIdentName: '[name]__[local]__[hash:base64:5]'
        }
      },
      'postcss-loader'
    ]
  },
]);

// Additional Plugins
config.plugins = config.plugins.concat([
  new SitemapPlugin('https://climbcrux.org', sitemap.routes),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': '"production"'
  }),
  new webpack.optimize.UglifyJsPlugin(),
  new webpack.optimize.AggressiveMergingPlugin()
]);

module.exports = config;
