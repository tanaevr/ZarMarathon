import React, { FC } from 'react';
import cn from 'classnames';

import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import Footer from './components/Footer';

const App: FC = () => {
  return (
    <div className={cn('wrapper', { 'wrapper--index': true })}>
      {/* TODO: прописать класс "wrapper--index" только для главной страницы при роуте */}
      <Header />
      <section className="page-content" />
      <Footer />
    </div>
  );
};

export default App;
