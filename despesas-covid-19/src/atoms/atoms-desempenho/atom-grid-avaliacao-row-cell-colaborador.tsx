import { AvaliacaoInteface } from '../../settings/AvaliacaoInterface';

export const AtomGridAvaliacaoRowCellColaborador = (obj: any = {}, element: AvaliacaoInteface) => {
  obj.colaborador = element.colaborador.nome; 
}