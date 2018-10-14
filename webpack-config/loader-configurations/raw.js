/**
 * Webpack raw loader that allows us to import html files.
 * e.g. require(./main.html);
 * see: https://github.com/webpack/raw-loader for details.
 */

module.exports = {
  test: /\.html$/,
  exclude: /node_modules|bower_components/,
  loader: 'raw-loader',
};
