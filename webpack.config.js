var config  = require('config');
var path    = require('path');
var webpack = require('webpack');

var env = config.get('server.environment');

var isDev = (env !== 'production');

module.exports = {
  devtool: isDev ? 'cheap-module-eval-source-map' : 'source-map',
  entry: isDev ? [
    'eventsource-polyfill', // necessary for hot reloading with IE
    'webpack-hot-middleware/client',
    './src/index'
  ] : ['./src/index'],
  output: {
    path:       path.join(__dirname, '_build'),
    filename:   'app.js',
    publicPath: '/static/scripts/'
  },
  plugins: isDev ? [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ] : [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ compressor: { warnings: false} })
  ],
  module: {
    loaders: [{
      test: /\.js?/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src')
    }]
  }
};
