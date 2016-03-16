import React from 'react';

import Footer from './footer';

export default ({ children }) => (
  <div>
    <section className="todoapp">{children}</section>
    <Footer />
  </div>
);
