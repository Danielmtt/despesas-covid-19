import React from 'react';
import { DataGrid, RowsProp, ColDef } from '@material-ui/data-grid';

const rows: RowsProp = [
  { id: 1, nome: 'Nome do Colaborador', sigla: 'NDC' },

];

const columns: ColDef[] = [
  { field: 'nome', headerName: 'Nome', width: 500 },
  { field: 'sigla', headerName: 'Sigla', width: 150 },
];

export default function App() {
  return (
    <div style={{ height: 300, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
}