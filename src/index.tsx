import React from 'react';
import ReactDOM from 'react-dom';
import { Routes } from './routes/routes';
import { Toaster } from 'react-hot-toast';

import './assets/styles/global.scss'

ReactDOM.render(
  <React.StrictMode>
    <Toaster
      position="top-center"
      reverseOrder={false}
    />
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);
