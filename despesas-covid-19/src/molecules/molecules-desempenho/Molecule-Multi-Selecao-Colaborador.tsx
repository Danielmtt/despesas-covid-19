import * as React from 'react';
import AtomMultiSelecaoColaborador from '../../atoms/atoms-desempenho/Atom-multi-selecao-colaborador';
import { getColaboradores } from '../../services/Service-desempenho';
import { Colaborador } from '../../settings/Colaborador';

export const MoleculeMultiSelecaoColaborador = () => {

  const [listaColaboradores, setListaColaboradores] = React.useState<Colaborador[]>([]);
  
  React.useEffect(() => {
    getColaboradores().then((colaboradores) => {
      setListaColaboradores(colaboradores);
    })
  }, [])

  return(
    <AtomMultiSelecaoColaborador lista={listaColaboradores}/>
  )
}

export default MoleculeMultiSelecaoColaborador;