/**
 * Webpack loader that enables requiring for any kind of file.
 * It can be used with ng-include and ng-cache when working with Angular.
 */

module.exports = {
  test: /\.js$/,
  exclude: /node_modules|lib/,
  loader: 'required?import[]=angular'
};
