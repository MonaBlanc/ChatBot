import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './container/store'
import './assets/font/quicksand/ttf/quicksand-latin-700-normal.ttf';

ReactDOM.render(
  < Provider store={store} >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider >,
  document.getElementById("root")
);
