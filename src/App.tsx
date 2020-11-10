import React, { FC } from 'react';
import { useRoutes } from 'hookrouter';
import cn from 'classnames';

import routes from './routes';

import NotFoundPage from './pages/NotFoundPage';

import 'bootstrap/scss/bootstrap-grid.scss';

const App: FC = () => {
  const match = useRoutes(routes);

  return (
    <div className={cn('wrapper', { 'wrapper--index': !!match && !!match.props.index })}>
      {match || <NotFoundPage />}
    </div>
  );
};

export default App;
