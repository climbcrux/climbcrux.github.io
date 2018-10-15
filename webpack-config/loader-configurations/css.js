/**
 * Webpack loader configuration for css files.
 * @dependencies css-loader
 */
module.exports = {
  test: /\.css$/,
  loaders: [
    'style-loader',
    'css-loader'
  ]
};

