import React from 'react';
import BotaoBusca from '../atoms/Botao-busca';
import CampoMunicipio from '../atoms/CampoMunicipio';
import SeletorData from '../molecules/FiltroData';

const DespesasBolsaFamiliaPage = () => {
  return (
    <>
      <h1>Pagina de despesas com bolsa familia</h1>
      <SeletorData />
      <CampoMunicipio />
      <BotaoBusca></BotaoBusca>
    </>
  );
};

export default DespesasBolsaFamiliaPage;
