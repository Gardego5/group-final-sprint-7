import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore } from "redux";
import ReactDOM from 'react-dom/client';

import App from './App';
import rootReducer from './reducers/rootReducer';

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
