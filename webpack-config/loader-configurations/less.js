/**
 * Webpack loader configuration for using Less files.
 * @dependencies style-loader, css-loader, less-loader
 */

module.exports = {
  test: /\.less$/,
  loaders: [
    'style-loader',
    'css-loader',
    'less-loader'
  ]
}
