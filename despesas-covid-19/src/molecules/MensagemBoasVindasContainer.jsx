import React from 'react';
import MensagemBoasVindas from '../atoms/MensagemBoasVindas';
import Card from '@material-ui/core/Card';

const MensagemBoasVindasContainer = () => {
  return (
    <Card>
      <MensagemBoasVindas
        mensagem={
          'Selecione uma data no menu lateral para ver os gastos públicos'
        }
      ></MensagemBoasVindas>
    </Card>
  );
};

export default MensagemBoasVindasContainer;
