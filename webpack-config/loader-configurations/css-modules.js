/**
 * Webpack loader configuration for using css-modules.
 * @dependencies style-loader, css-loader
 */
module.exports = {
  test: /\.cssm$/,
  loaders: [
    'style-loader',
    'css-loader?modules&importLoaders=1&localIdentName=[name]--[local]--[hash:base64:5]',
    'postcss-loader'
  ]
};
