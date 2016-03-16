import React, { PropTypes } from 'react';

import Footer from './footer';

const LayoutPage = ({ children }) => (
  <div>
    <section className="todoapp">{children}</section>
    <Footer />
  </div>
);

LayoutPage.propTypes = {
  children: PropTypes.object.isRequired,
};

export default LayoutPage;
