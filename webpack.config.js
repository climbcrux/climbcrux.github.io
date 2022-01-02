const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const dotenv = require('dotenv');

var configs = {
  common: require('./webpack.config.common.js'),
  development: require('./webpack.config.dev.js'),
  production: require('./webpack.config.prod.js'),
}

module.exports = (env, args) => {
  const commonPlugins = configs.common.plugins;

  const denv = dotenv.config().parsed;
  const envKeys = Object.keys(denv).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(denv[next]);
    return prev;
  }, {});

  var config = merge(configs.common, {
    plugins: [
      new webpack.DefinePlugin(envKeys)
    ]
  })

  switch(env) {
    case 'development':
      return  merge(config, configs.development);
    case 'production':
      return merge(config, configs.production);
    default:
      throw new Error(`No matching configuration ${env} was found!`);
  }
}
