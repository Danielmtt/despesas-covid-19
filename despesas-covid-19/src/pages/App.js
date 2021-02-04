import './App.css';
import DespesasCovid from '../templates/Despesas-covid.jsx';
import React from 'react';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <ToastContainer />
      <DespesasCovid></DespesasCovid>
    </>
  );
}

export default App;
