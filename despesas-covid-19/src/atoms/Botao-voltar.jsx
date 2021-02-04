import React, { useEffect, useState } from 'react';
import {
  getCovidSpendingByMonthYear,
  dataCOVID19,
} from '../services/ServiceApi.js';
import Button from '@material-ui/core/Button';

export const BotaoVoltar = (props) => {
  const [paginaRecebida, setPaginaRecebida] = useState(props.paginaRecebida);

  useEffect(() => {
    props.onChangePagina(paginaRecebida);
  }, [paginaRecebida]);

  if (props) {
    return (
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          if (props.paginaRecebida !== 1) {
            setPaginaRecebida(props.paginaRecebida - 1);
          }
          getCovidSpendingByMonthYear(
            dataCOVID19[0].mesAno,
            props.paginaRecebida - 1
          );
        }}
      >
        voltar
      </Button>
    );
  }
};
export default BotaoVoltar;
