import React, { FC } from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Documentation: FC = (props) => {
  return (
    <>
      <Header {...props} />
      <section className="page-content">
        <div>Documentation</div>
      </section>
      <Footer />
    </>
  );
};

export default Documentation;
