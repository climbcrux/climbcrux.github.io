/**
 * Webpack loader configuration for ignoring file types when running tests.
 * This loader returns an empty module.
 * @dependencies null-loader
 */

 module.exports = {
  test: /\.(png|jpg|gif|woff|woff2|css|less|styl)$/,
  loaders: [
    'null-loader'
  ]
}
