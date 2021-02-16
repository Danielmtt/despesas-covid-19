import React from 'react';
import BotaoBusca from '../atoms/Botao-busca';
import SeletorData from '../molecules/FiltroData';
import TransitionsModal from '../atoms/Modal';
import ModalContainer from '../molecules/ModalContainer';
import { BolsaFamiliaContext } from '../providers/bolsa-familia-context';

const DespesasBolsaFamiliaPage = () => {
  const { despesasBolsaFamilia } = React.useContext<any>(BolsaFamiliaContext);
  return (
    <>
      <h1>Pagina de despesas com bolsa familia</h1>
      <BotaoBusca></BotaoBusca>
      <SeletorData />
      <TransitionsModal
        corpoModal={
          !!despesasBolsaFamilia[0] && ModalContainer(despesasBolsaFamilia[0])
        }
      />
    </>
  );
};

export default DespesasBolsaFamiliaPage;
