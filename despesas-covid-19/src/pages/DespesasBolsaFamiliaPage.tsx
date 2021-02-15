import React from 'react';
import BotaoBusca from '../atoms/Botao-busca';
import SeletorData from '../molecules/FiltroData';

const DespesasBolsaFamiliaPage = () => {
  return (
    <>
      <h1>Pagina de despesas com bolsa familia</h1>
      <BotaoBusca></BotaoBusca>
      <SeletorData />
    </>
  );
};

export default DespesasBolsaFamiliaPage;
