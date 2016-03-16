import config  from 'config';
import express from 'express';
import webpack from 'webpack';

import Package       from './package.json';
import WebpackConfig from './webpack.config.js';

// rather than hardcode the name and version, just pull it out of package.json :)
const { name, version } = Package;

// which env are we?
const env = config.get('client.environment');

// we need to allow a port override in deployments using env vars
const port = config.get('client.port');

// instantiate our Express instance
const app = express();

// set up dev to run webpack in realtime rather than compiled in advance
if (env !== 'production') {
  // instantiate our Webpack instance
  const compiler = webpack(WebpackConfig);

  // use middleware
  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo:     true,
    publicPath: WebpackConfig.output.publicPath
  }));

  // use hot reloading
  app.use(require('webpack-hot-middleware')(compiler));
} else {
  // serve app.js statically
  app.get('/static/scripts/app.js', function(request, response) {
    response.sendFile('app.js', { root: __dirname });
  });
}

// static files
app.use('/static', express.static('public'));

// send all requests, regardless of URL, to index.html
app.get('*', function(request, response) {
  response.sendFile('public/index.html', { root: __dirname });
});

// launch the app!
console.log('Starting Express server...');

const server = app.listen(port, () => {
  const host = server.address().address;

  console.log('    ...%s running Express server on port %s', host, port);
});
