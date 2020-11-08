import React, { FC } from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Pokedex: FC = (props: any) => {
  return (
    <>
      <Header {...props} />
      <section className="page-content">
        <div>Pokedex</div>
      </section>
      <Footer />
    </>
  );
};

export default Pokedex;
