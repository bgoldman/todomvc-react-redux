import React, { PropTypes } from 'react';

import config from '../../lib/public-config';

import DevTools from '../dev-tools';
import Footer from './footer';

const isDev = (config.get('client.environment') === 'development');

const LayoutPage = ({ children }) => (
  <div>
    <section className="todoapp">{children}</section>
    <Footer />
    {isDev &&
      <DevTools />
    }
  </div>
);

LayoutPage.propTypes = {
  children: PropTypes.object.isRequired,
};

export default LayoutPage;
