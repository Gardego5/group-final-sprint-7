import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import { createStore } from "redux";
import ReactDOM from 'react-dom/client';

import App from './App';
import rootReducer from './reducers/rootReducer';
import GlobalStyle from './GlobalStyle';
import 'bootstrap/dist/css/bootstrap.min.css';

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Fragment>
    <GlobalStyle />
    <Provider store={store}>
      <App />
    </Provider>
  </Fragment>
);
