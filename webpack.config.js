var _ = require('lodash');
var config = require('config');
var fs = require('fs');
var path = require('path');
var webpack = require('webpack');

// a central config file is created by the build process, and required from within the app.
// we need to do this because the web browser can't read files using 'fs',
// resulting in the 'config' package not working,
// and so we need to precalculate the values as JSON and import the values in the app.
var precalculateConfig = function() {
  var configValues = _(config.get('publicConfigs'))
    .map(function(key) { return [key, config.get(key)]; })
    .fromPairs()
    .value();

  fs.writeFileSync('./_build/config.js', 'module.exports = ' + JSON.stringify(configValues));
};

var isBuilding = (path.basename(__dirname) !== '_build');

if (isBuilding) precalculateConfig();

var isDev = (process.env.NODE_ENV !== 'production');

module.exports = {
  devtool: isDev ? 'cheap-module-eval-source-map' : 'source-map',
  entry:   isDev ? [
    'eventsource-polyfill', // necessary for hot reloading with IE
    'webpack-hot-middleware/client',
    './src/index',
  ] : ['./src/index'],
  module: {
    rules: [{
      test:    /\.js?/,
      include: path.join(__dirname, 'src'),
      loader:  'babel-loader',
    }],
  },
  output: {
    path:       path.join(__dirname, '_build'),
    filename:   'app.js',
    publicPath: '/static/scripts/',
  },
  plugins: isDev ? [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.LoaderOptionsPlugin({ debug: true }),
    new webpack.NoEmitOnErrorsPlugin(),

    // fix backwards compatibility issue with jsondifftools, a dependency of redux-devtools-inspector
    new webpack.ContextReplacementPlugin(/.*/, path.resolve(__dirname, 'node_modules', 'jsondiffpatch'), {
      '../package.json': './package.json',
      './formatters': './src/formatters/index.js',
      './console': './src/formatters/console.js'
    }),
  ] : [
    new webpack.optimize.UglifyJsPlugin({ sourceMap: true }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
