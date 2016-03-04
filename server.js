import config  from 'config';
import express from 'express';

import Package from './package.json';

// rather than hardcode the name and version, just pull it out of package.json :)
const { name, version } = Package;

// we need to allow a port override in deployments using env vars
const port = config.get('server.port');

// instantiate our Express instance
const app = express();

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
