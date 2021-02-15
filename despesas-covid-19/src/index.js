import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home.tsx';
import { ToastContainer } from 'react-toastify';

ReactDOM.render(
  <>
    <ToastContainer />
    <Home />
  </>,
  document.getElementById('root')
);
