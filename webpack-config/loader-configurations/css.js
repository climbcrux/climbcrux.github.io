/**
 * Webpack loader configuration for css files.
 * @dependencies css-loader
 */
module.exports = {
  test: /\.css$/,
  use: [
    'style-loader',
    'css-loader'
  ]
};
