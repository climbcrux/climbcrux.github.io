const webpack = require('webpack');

module.exports =  {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    // new webpack.optimize.AggressiveMergingPlugin(),
  ]
};
