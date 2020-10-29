import React, { FC } from 'react';
import cn from 'classnames';
import './static/custom.css';

const s = require('./static/App.modules.scss');

const App: FC = () => {
    return (
        <div className={cn(s.default.header, 'custom')}>App</div>
    )
}

export default App;