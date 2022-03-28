/**
 * Webpack loader used to load image files.
 * see: https://github.com/webpack/url-loader for details.
 *
 * "If the file is greater than the limit the file-loader is used and all query
 * parameters are passed to it." - docs
 * @dependencies url-loader, file-loader
 */

module.exports = {
  test: /\.(png|jpg|gif|woff|woff2)$/,
  type: 'asset/resource'
};
