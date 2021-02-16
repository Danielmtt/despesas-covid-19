import React from 'react';
import { ToastContainer } from 'react-toastify';
import FormularioConsultaBolsaFamilia from '../molecules/FormularioConsultaBolsaFamilia';
import BoxPageTitleBolsaFamilia from '../organisms/BoxPageTitleBolsaFamilia';

const DespesasBolsaFamiliaPage = () => {
  return (
    <>
      <BoxPageTitleBolsaFamilia />
      <FormularioConsultaBolsaFamilia />
      <ToastContainer />
    </>
  );
};

export default DespesasBolsaFamiliaPage;
