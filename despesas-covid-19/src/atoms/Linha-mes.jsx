import React from 'react';
import TreeItem from '@material-ui/lab/TreeItem';
import { getCovidSpendingByMonthYear } from '../services/ServiceApi.js';

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
  if (valorAno < new Date().getFullYear()) {
    return meses.map((valor) => (
      <TreeItem
        onClick={() => getCovidSpendingByMonthYear(valorAno + valor, 1)}
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
          onClick={() => getCovidSpendingByMonthYear(valorAno + valor, 1)}
          nodeId={`${valorAno}${valor}`}
          key={`${valorAno}${valor}`}
          label={`${valorAno}/${valor}`}
        />
      ));
  }
}
