import React, { useEffect, useState } from 'react';
import { DataGrid, RowsProp, ColDef } from '@material-ui/data-grid';
import { getColaboradores } from '../../services/Service-desempenho';

// let rows: RowsProp = [
//   { id: 1, nome: 'Nome do Colaborador', sigla: 'NDC' },
// ];

const columns: ColDef[] = [
  { field: 'nome', headerName: 'Nome', width: 500 },
  { field: 'sigla', headerName: 'Sigla', width: 150 },
];

export default function App() {

  const [rows, setRows] = useState<RowsProp>();

  const listarColaboradores = () =>{
    getColaboradores().then((response) => {
      setRows(response)
    })
  }

  useEffect(() => {
    listarColaboradores()
  }, [])

  if(rows){
    return (
      <div style={{ height: 300, width: '100%' }}>
        <DataGrid rows={rows} columns={columns} />
      </div>
    );
  } else{
    return (<></>);
  }
  
}