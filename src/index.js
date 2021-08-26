import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes'
import { Provider } from 'react-redux' 
import store from './store'

import { IconContext } from 'react-icons/lib';

ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
          <IconContext.Provider value={{ className: 'react-icons' }}>
              <Routes />
          </IconContext.Provider>
      </Provider>
    </React.StrictMode>,
  document.getElementById('root')
);
