'use strict';

const path = require('path');
const args = require('minimist')(process.argv.slice(2));

// List of allowed environments
const allowedEnvs = ['development', 'production'];

// Set the correct environment
let env = args.env ? args.env : 'development';
process.env.REACT_WEBPACK_ENV = env;


// Available webpack configurations
var configs = {
  development: require('./webpack-config/dev'),
  production: require('./webpack-config/prod'),
}

/**
 * Get an allowed environment
 * @param {String} environment name
 * @return {String}
 */
function getValidEnv(env) {
  const isValid = env && env.length > 0 && allowedEnvs.indexOf(env) !== -1;
  return isValid ? env : 'development';
}

/**
 * Build the webpack configuration
 * @param {String} env Environment to use
 * @return {Object} Webpack config
 */
function buildConfig(env) {
  const usedEnv = getValidEnv(env);
  console.log(JSON.stringify(configs[usedEnv], null, 2));
  return configs[usedEnv];
}

module.exports = buildConfig(env);
