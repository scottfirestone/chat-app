import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';
import actionCable from 'actioncable';
import App from './App';
import * as serviceWorker from './serviceWorker';
import constants from './constants';

const store = configureStore({ reducer: rootReducer });

const Cable = {
  cable: actionCable.createConsumer(constants.WEBSOCKETS_HOST),
};

ReactDOM.render(
  <Provider store={store}>
    <App cable={Cable} />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
