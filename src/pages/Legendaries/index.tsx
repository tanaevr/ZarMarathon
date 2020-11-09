import React, { FC } from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Legendaries: FC = (props) => {
  return (
    <>
      <Header {...props} />
      <section className="page-content">
        <div>Legendaries</div>
      </section>
      <Footer />
    </>
  );
};

export default Legendaries;
