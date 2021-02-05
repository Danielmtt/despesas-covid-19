import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MensagemBoasVindas from '../atoms/MensagemBoasVindas';
import Card from '@material-ui/core/Card';

const useStyles = makeStyles({
  espacamentoCard: {
    marginTop: 120,
    width: 'fit-content',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});

const MensagemBoasVindasContainer = () => {
  const classes = useStyles();
  return (
    <Card className={classes.espacamentoCard}>
      <MensagemBoasVindas
        mensagem={
          'Selecione uma data no menu lateral para ver os gastos públicos'
        }
      ></MensagemBoasVindas>
    </Card>
  );
};

export default MensagemBoasVindasContainer;
