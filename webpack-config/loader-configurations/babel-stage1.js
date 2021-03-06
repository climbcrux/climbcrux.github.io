/**
 * Webpack javascript loader that enables babel-stage 1 (ES6-7ish)
 * see: https://babeljs.io/docs/plugins/preset-stage-1/ for details.
 * @dependencies babel-loader, babel-preset-es2015, babel-preset-stage-1
 */

module.exports = {
  test: /\.js$/,
  exclude: /node_modules/,
  loader: 'babel-loader',
  query: {
    cacheDirectory: '',
    presets: [
      'es2015',
      'stage-1'
    ]
  }
};
