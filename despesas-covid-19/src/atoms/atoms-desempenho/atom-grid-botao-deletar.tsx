import { CellParams, ColDef } from '@material-ui/data-grid';
import * as React from 'react';
import { Button } from '@material-ui/core';
import DeleteIcon  from '@material-ui/icons/Delete';

const AtomGridBotaoDeletarComponente = (callback: Function, parametros: CellParams) => {
  return (
    <Button onClick={()=>callback(parametros)}>
      <DeleteIcon />
    </Button>
  )
}
AtomGridBotaoDeletarComponente.displayName = 'action';


export const AtomGridBotaoDeletar = (callback: Function) => {
  const column: ColDef[] = [
    {
      field: '',
      headerName: 'Ação',
      sortable: false,
      width: 100,
      disableClickEventBubbling: true,
      renderCell: (parametros: CellParams) => AtomGridBotaoDeletarComponente(callback, parametros)
    }
  ];
  return column[0];
}


