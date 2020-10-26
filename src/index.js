import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { HashRouter as Router } from 'react-router-dom';

import './styles/global.scss';


ReactDOM.render(
  <React.StrictMode>
      <Router>
        <App />
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

