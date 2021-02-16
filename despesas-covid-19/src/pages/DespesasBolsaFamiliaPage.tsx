import React from 'react';
import BotaoBusca from '../atoms/Botao-busca';
import SeletorData from '../molecules/FiltroData';
import TransitionsModal from '../atoms/Modal';

const DespesasBolsaFamiliaPage = () => {
  return (
    <>
      <h1>Pagina de despesas com bolsa familia</h1>
      <BotaoBusca></BotaoBusca>
      <SeletorData />
      <TransitionsModal corpoModal={<div>asdasdasdasdasd</div>} />
    </>
  );
};

export default DespesasBolsaFamiliaPage;
