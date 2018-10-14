/**
 * Webpack javascript preloader used for test code coverage
 * @dependencies isparta-insturmenter-loader
 */

module.exports = {
  test: /\.(js|jsx)$/,
  loaders: [
    'isparta-instrumenter-loader'
  ],
  exclude: /node_modules/
};
