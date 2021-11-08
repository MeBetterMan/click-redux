import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/store'
import App from './App';

import './index.css';


ReactDOM.render(
  <App />,
  document.getElementById('root')
);

store.subscribe(() => {
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
})