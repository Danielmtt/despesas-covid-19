import React from 'react';
import {
  getCovidSpendingByMonthYear,
  notify,
  sortItemsByPago,
} from '../services/ServiceApi.js';
import Button from '@material-ui/core/Button';
import { DespesasContext } from '../providers/despesas-context.js';

export const BotaoAvancar = () => {
  const {
    setDespesas,
    despesas,
    paginaAtual,
    setPaginaAtual,
  } = React.useContext(DespesasContext);

  const getApiService = (valorAno, valor) => {
    getCovidSpendingByMonthYear(valorAno, valor).then((dados) => {
      if (dados.length === 0) {
        notify();
      }
      setDespesas(sortItemsByPago(dados));
    });
  };

  if (despesas) {
    return (
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          setPaginaAtual(paginaAtual + 1);
          getApiService(despesas[0]?.mesAno, paginaAtual + 1);
        }}
      >
        avançar
      </Button>
    );
  }
};
export default BotaoAvancar;
