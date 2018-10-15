/**
 * Webpack configuration preloader for using eslint on js and jsx files.
 * @dependencies eslint-loader
 */

module.exports = {
  test: /\.(js|jsx)$/,
  exclude: /node_modules/,
  loaders: [
    'eslint-loader'
  ]
};
