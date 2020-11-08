import React, { FC } from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Homepage: FC = (props) => {
  return (
    <>
      <Header {...props} />
      <section className="page-content">
        <div>homepage</div>
      </section>
      <Footer />
    </>
  );
};

export default Homepage;
