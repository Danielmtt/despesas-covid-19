import * as React from 'react';
import { ToastContainer } from 'react-toastify';
import BoxPageTitleBolsaFamilia from '../organisms/orgamismes-despesas-publicas/BoxPageTitleBolsaFamilia';
import CardFormulario from '../organisms/orgamismes-despesas-publicas/CardFormulario';

const DespesasBolsaFamilia = () => {
  return (
    <>
      <BoxPageTitleBolsaFamilia />
      <CardFormulario />
      <ToastContainer />
    </>
  );
};

export default DespesasBolsaFamilia;
