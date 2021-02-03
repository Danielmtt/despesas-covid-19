import React from 'react';
import TreeItem from '@material-ui/lab/TreeItem';

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
  return meses.map((valor) => (
    <TreeItem
      onClick={() => alert('Leaf clicked: ' + `${valorAno}${valor}`)}
      nodeId={`${valorAno}${valor}`}
      key={`${valorAno}${valor}`}
      label={`${valorAno}/${valor}`}
    />
  ));
}