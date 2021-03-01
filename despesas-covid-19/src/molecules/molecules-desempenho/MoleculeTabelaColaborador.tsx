import React, { useContext, useEffect, useState } from 'react';
import { DataGrid, RowsProp, ColDef, CellParams } from '@material-ui/data-grid';
import { deleteColaborador, getColaboradores } from '../../services/Service-desempenho';
import { AtomSweetAlert } from '../../atoms/atoms-desempenho/atom-sweet-alert';
import { AtomGridBotaoDeletar } from '../../atoms/atoms-desempenho/atom-grid-botao-deletar';
import { desejaDeletarColaborador } from '../../settings/consts/MessagesSweetAlert';
import { notifySuccess, notifyError } from '../../services/ServiceApi';
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
  columns.push(AtomGridBotaoDeletar(handleActionDeleteAvaliacao));

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

  function handleDeleteColaborador(colaborador: any) {
    deleteColaborador(colaborador.id)
      .then((response) => {
        if (response.status === 204) {
          notifySuccess(`O colaborador ${colaborador.nome} foi deletado com sucesso`);
          getColaboradores().then((response) => {
            setRows(response);
          });
        } else if (response.status === 400) {
          response.json().then((json: any) => {
            notifyError(json.mensagem);
          });
        }
      })
  }

  function handleActionDeleteAvaliacao(parametros: CellParams) {
    const colaboradorRow: any = parametros.row;
    
    AtomSweetAlert(desejaDeletarColaborador(colaboradorRow.nome), () => handleDeleteColaborador(colaboradorRow));
  }
}