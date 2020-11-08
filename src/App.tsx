import React, { FC } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import cn from 'classnames';

import Homepage from './pages/Homepage';
import Pokedex from './pages/Pokedex';
import Legendaries from './pages/Legendaries';
import Documentation from './pages/Documentation';

import 'bootstrap/dist/css/bootstrap.min.css';

const App: FC = () => {
  return (
    <div className={cn('wrapper', { 'wrapper--index': true })}>
      {/* TODO: прописать класс "wrapper--index" только для главной страницы при роуте */}
      <BrowserRouter>
        <Switch>
          <Route path="/pokedex/" render={(props: any) => <Pokedex {...props} />} />
          <Route path="/legendaries/" render={(props: any) => <Legendaries {...props} />} />
          <Route path="/documentation/" render={(props: any) => <Documentation {...props} />} />
          <Route exact path="/" render={(props: any) => <Homepage {...props} />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
