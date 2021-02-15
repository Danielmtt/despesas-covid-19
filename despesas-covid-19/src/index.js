import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App';
import { DespesasProvider } from './providers/despesas-context';

ReactDOM.render(
  <DespesasProvider>
    <App />
  </DespesasProvider>,
  document.getElementById('root')
);
