import React from 'react';
import ReactDOM from 'react-dom';

import ReduxProvider from './ReduxProvider';

const render = (Component) => {
  ReactDOM.render(
    <ReduxProvider/>,
    document.getElementById('root'),
  );
};

render(ReduxProvider);

