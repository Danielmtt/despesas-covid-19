import { CellParams, ColDef, RowsProp } from '@material-ui/data-grid';
import React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { AvaliacaoInteface } from '../../settings/AvaliacaoInterface';
import { AtomGridAvaliacaoColumnColaborador, AtomGridAvaliacaoColumnData, AtomGridAvaliacaoColumnResultado, AtomGridAvaliacaoColumnStatus, AtomGridAvaliacaoColumnTipoAvaliacao, AtomGridAvaliacaoRowCellColaborador, AtomGridAvaliacaoRowCellData, AtomGridAvaliacaoRowCellId, AtomGridAvaliacaoRowCellResultado, AtomGridAvaliacaoRowCellStatus, AtomGridAvaliacaoRowCellTipoAvaliacao } from '../../settings/functions/celulasEColunasGridAvaliacoes';
import { AtomGridBotaoDeletar } from '../../atoms/atoms-desempenho/atom-grid-botao-deletar';
import { AtomSweetAlert } from '../../atoms/atoms-desempenho/atom-sweet-alert';
import { deleteAvaliacao } from '../../services/Service-desempenho';
import { desejaDeletarAvaliacao } from '../../settings/consts/MessagesSweetAlert';
import { toast } from 'react-toastify';

export function MoleculeGridAvaliacao(props: {
  data: AvaliacaoInteface[],
  updateStateAtualizacao: Function,
}) {
  function handleDeleteAvalicao(avaliacao: any) {
    deleteAvaliacao(avaliacao.id)
      .then((response) => {
        if (response.status === 204) {
          props.updateStateAtualizacao(props.data.filter((av: AvaliacaoInteface)=> av.id != avaliacao.id));
          toast.success(`A avaliação ${avaliacao.tipoAvaliacao} do colaborador ${avaliacao.colaborador} foi deletada com sucesso`, {
            position: 'top-right',
            autoClose: 5000,
            closeOnClick: true,
            pauseOnHover: true,
          });
        } else if (response.status === 400) {
          response.json().then((json: any) => {
            toast.error(json.mensagem, {
              position: 'top-right',
              autoClose: 5000,
              closeOnClick: true,
              pauseOnHover: true,
            });
          });
        }
      })
  }
  
  function handleActionDeleteAvaliacao(parametros: CellParams) {
    const avalicaoRow:any = parametros.row;
    AtomSweetAlert(desejaDeletarAvaliacao(avalicaoRow.tipoAvaliacao, avalicaoRow.colaborador), ()=> handleDeleteAvalicao(avalicaoRow)); 
  }
  
  
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
    columns.push(AtomGridBotaoDeletar(handleActionDeleteAvaliacao));
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

  const { rows, columns} = criarGrid(props.data);

  return (
    <div style={{ height: 400, width: '1000px' }}>
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
}