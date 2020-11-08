import React, { FC } from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Heading from '../../components/UI/Heading';

const Homepage: FC = (props) => {
  return (
    <>
      <Header {...props} />
      <section className="page-content">
        <Heading component="h1">Заголовок</Heading>
        <Heading component="h2">Заголовок</Heading>
        <Heading component="h3">Заголовок</Heading>
        <Heading component="h4">Заголовок</Heading>
        <Heading component="h5">Заголовок</Heading>
        <Heading component="h6">Заголовок</Heading>
        <div>homepage</div>
      </section>
      <Footer />
    </>
  );
};

export default Homepage;
