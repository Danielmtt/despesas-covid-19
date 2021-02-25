import { ColDef, RowsProp } from '@material-ui/data-grid';
import React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { AvaliacaoInteface } from '../../settings/AvaliacaoInterface';
import { AtomGridAvaliacaoColumnColaborador } from '../../atoms/atoms-desempenho/atom-grid-avaliacao-column-colaborador';
import { AtomGridAvaliacaoColumnTipoAvaliacao } from '../../atoms/atoms-desempenho/atom-grid-avaliacao-column-tipo-avaliacao';
import { AtomGridAvaliacaoColumnResultado } from '../../atoms/atoms-desempenho/atom-grid-avaliacao-column-resultado';
import { AtomGridAvaliacaoColumnData } from '../../atoms/atoms-desempenho/atom-grid-avaliacao-column-datas';
import { AtomGridAvaliacaoColumnStatus } from '../../atoms/atoms-desempenho/atom-grid-avaliacao-column-status';
import { AtomGridAvaliacaoRowCellColaborador } from '../../atoms/atoms-desempenho/atom-grid-avaliacao-row-cell-colaborador';
import { AtomGridAvaliacaoRowCellId } from '../../atoms/atoms-desempenho/atom-grid-avaliacao-row-cell-id';
import { AtomGridAvaliacaoRowCellTipoAvaliacao } from '../../atoms/atoms-desempenho/atom-grid-avaliacao-row-cell-tipo-avaliacao';
import { AtomGridAvaliacaoRowCellData } from '../../atoms/atoms-desempenho/atom-grid-avaliacao-row-cell-data';
import { AtomGridAvaliacaoRowCellStatus } from '../../atoms/atoms-desempenho/atom-grid-avaliacao-row-cell-status';
import { AtomGridAvaliacaoRowCellResultado } from '../../atoms/atoms-desempenho/atom-grid-avaliacao-row-cell-resultado';


function montarRow(obj: AvaliacaoInteface) {
  const keys: any = Object.keys(obj);
  const objToRow: any = {};
  for (let index = 0; index < keys.length; index++) {
    const element = keys[index];
    if (element == 'colaborador') {
      AtomGridAvaliacaoRowCellColaborador(objToRow, obj);
    } else if (element == 'id') {
      AtomGridAvaliacaoRowCellId(objToRow, obj);
    } else if (element == 'tipoAvaliacao') {
      AtomGridAvaliacaoRowCellTipoAvaliacao(objToRow, obj);
    } else if (element == 'data') {
      AtomGridAvaliacaoRowCellData(objToRow, obj);
    } else if (element == 'status') {
      AtomGridAvaliacaoRowCellStatus(objToRow, obj);
    } else if (element == 'resultado') {
      AtomGridAvaliacaoRowCellResultado(objToRow, obj);
    }
  }
  var rowsProps: RowsProp = { ... objToRow };
  return rowsProps;
}

function montarColumn(data: AvaliacaoInteface) { 
  let columns: ColDef[] = [];  
  const keys: any = Object.keys(data);
  for (let index = 0; index < keys.length; index++) {
    const element = keys[index];
    if (element == 'colaborador') {
      columns.push(AtomGridAvaliacaoColumnColaborador());
    } else if (element == 'tipoAvaliacao') {
      columns.push(AtomGridAvaliacaoColumnTipoAvaliacao());
    } else if (element == 'resultado') {
      columns.push(AtomGridAvaliacaoColumnResultado());
    } else if (element == 'data') {
      columns.push(AtomGridAvaliacaoColumnData());
    } else if (element == 'status') {
      columns.push(AtomGridAvaliacaoColumnStatus());
    }
  }
  return columns;
}

function criarGrid(data: any) {
  let rowsAndColumns: any = {
    rows: [],
    columns: []
  };
  var keys: AvaliacaoInteface = data[0];
  rowsAndColumns.columns.push(...montarColumn(keys));
  for (const [, value] of Object.entries(data)) {
    const objValues: any = value;
    rowsAndColumns.rows.push(montarRow(objValues));
  }
  return rowsAndColumns;
}

export function MoleculeGridAvaliacao(props: {
  data: AvaliacaoInteface[]
}) {
  const { rows, columns} = criarGrid(props.data);
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
}