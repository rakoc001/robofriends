import React, { StrictMode, Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './containers/App';
import 'tachyons';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
      <App />
    </>
  </StrictMode>
);
