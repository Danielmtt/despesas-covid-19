import React from 'react';
import DespesasCovid from '../templates/Despesas-covid';
import { ToastContainer } from 'react-toastify';

const DespesasCovidPage = () => {
  return (
    <>
      <ToastContainer />
      <DespesasCovid></DespesasCovid>
    </>
  );
};

export default DespesasCovidPage;
