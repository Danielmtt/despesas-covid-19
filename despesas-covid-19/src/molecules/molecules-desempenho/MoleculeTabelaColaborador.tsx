import React, { useContext, useEffect, useState } from 'react';
import { DataGrid, RowsProp, ColDef } from '@material-ui/data-grid';
import { getColaboradores } from '../../services/Service-desempenho';
import { DesempenhoAvaliacoesContext } from '../../providers/desempenho-avaliacoes-context';

// let rows: RowsProp = [
//   { id: 1, nome: 'Nome do Colaborador', sigla: 'NDC' },
// ];

const columns: ColDef[] = [
  { field: 'nome', headerName: 'Nome', width: 500 },
  { field: 'sigla', headerName: 'Sigla', width: 150 },
];

export default function App() {
  const { listaColaboradores } = useContext<any | undefined>(DesempenhoAvaliacoesContext);
  const [rows, setRows] = useState<RowsProp>();

  const listarColaboradores = () => {
    getColaboradores().then((response) => {
      setRows(response);
    })
  }

  useEffect(() => {
    listarColaboradores()
  }, [])

  useEffect(() => {
    listarColaboradores()
  }, [listaColaboradores])

  if (rows) {
    return (
      <div style={{ height: 300, width: '100%' }}>
        <DataGrid rows={rows} columns={columns} />
      </div>
    );
  } else {
    return (<></>);
  }

}