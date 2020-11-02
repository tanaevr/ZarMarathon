import React, { FC } from 'react';
import cn from 'classnames';

const s = require('./static/App.module.scss');

const App: FC = () => {
  return <div className={cn(s.default.header, 'custom')}>App</div>;
};

export default App;
