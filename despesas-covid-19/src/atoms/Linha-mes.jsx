import React from 'react';
import TreeItem from '@material-ui/lab/TreeItem';
import {
  getCovidSpendingByMonthYear,
  notify,
  sortItemsByPago,
} from '../services/ServiceApi.js';
import { DespesasContext } from '../providers/despesas-context.js';

const meses = [
  '01',
  '02',
  '03',
  '04',
  '05',
  '06',
  '07',
  '08',
  '09',
  '10',
  '11',
  '12',
];

export default function gerarLinhaMesAno(valorAno) {
  const { setDespesas, setPaginaAtual } = React.useContext(DespesasContext);

  const getApiService = (valorAno, valor) => {
    setPaginaAtual(1);
    getCovidSpendingByMonthYear(valorAno + valor, 1).then((dados) => {
      if (dados.length === 0) {
        notify();
      }
      setDespesas(sortItemsByPago(dados));
    });
  };

  if (valorAno < new Date().getFullYear()) {
    return meses.map((valor) => (
      <TreeItem
        onClick={() => getApiService(valorAno, valor)}
        nodeId={`${valorAno}${valor}`}
        key={`${valorAno}${valor}`}
        label={`${valorAno}/${valor}`}
      />
    ));
  } else {
    return meses
      .filter((valor) => parseInt(valor, 10) <= new Date().getMonth())
      .map((valor) => (
        <TreeItem
          onClick={() => getApiService(valorAno, valor)}
          nodeId={`${valorAno}${valor}`}
          key={`${valorAno}${valor}`}
          label={`${valorAno}/${valor}`}
        />
      ));
  }
}
