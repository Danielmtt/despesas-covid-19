import React from 'react';
import MensagemBoasVindasContainer from '../molecules/MensagemBoasVindasContainer';
import { DespesasContext } from '../providers/despesas-context';

const BoxMensagemBoasVindas = () => {
  const { despesas } = React.useContext(DespesasContext);

  if (despesas.length === 0) {
    return <MensagemBoasVindasContainer></MensagemBoasVindasContainer>;
  } else {
    return <></>;
  }
};

export default BoxMensagemBoasVindas;
