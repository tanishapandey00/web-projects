import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { ProductProvider } from './Context.js';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <ProductProvider>
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>
  </ProductProvider>,
  document.getElementById('root')
);
reportWebVitals();
