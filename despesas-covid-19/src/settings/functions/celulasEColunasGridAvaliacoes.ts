import { AvaliacaoInteface } from '../../settings/AvaliacaoInterface';

export const AtomGridAvaliacaoColumnColaborador = () => {
  return {
    field: 'colaborador',
    headerName: 'Nome colaborador',
    width: 200
  }
}

export const AtomGridAvaliacaoColumnData = () => {
  return {
    field: 'data',
    headerName: 'Data',
    width: 200
  }
}

export const AtomGridAvaliacaoColumnResultado = () => {
  return {
    field: 'resultado',
    headerName: 'Resultado',
    width: 200
  }
}

export const AtomGridAvaliacaoColumnStatus = () => {
  return {
    field: 'status',
    headerName: 'Status',
    width: 200
  }
}

export const AtomGridAvaliacaoColumnTipoAvaliacao = () => {
  return {
    field: 'tipoAvaliacao',
    headerName: 'Avaliação',
    width: 200
  }
}

export const AtomGridAvaliacaoRowCellColaborador = (obj: any = {}, element: AvaliacaoInteface) => {
  obj.colaborador = element.colaborador.nome; 
}

export const AtomGridAvaliacaoRowCellData = (obj: any = {}, element: AvaliacaoInteface) => {
  obj.data = element.data; 
}

export const AtomGridAvaliacaoRowCellId = (obj: any = {}, element: AvaliacaoInteface) => {
  obj.id = element.id; 
}

export const AtomGridAvaliacaoRowCellResultado = (obj: any = {}, element: AvaliacaoInteface) => {
  obj.resultado = element.resultado; 
}

export const AtomGridAvaliacaoRowCellStatus = (obj: any = {}, element: AvaliacaoInteface) => {
  obj.status = element.status; 
}

export const AtomGridAvaliacaoRowCellTipoAvaliacao = (obj: any = {}, element: AvaliacaoInteface) => {
  obj.tipoAvaliacao = element.tipoAvaliacao; 
}