import React from 'react';
import Teste from '../atoms/atoms-desempenho/Atom-teste';
import OrganismeTabPanel from '../organisms/organisms-desempenho/Organisme-Tab-Panel';
import AtomFormularioColaborador from '../organisms/organisms-desempenho/Atom-Fomulario-Colaborador';
import BoxPageTitleDesempenho from '../organisms/organisms-desempenho/BoxPageTitleDesempenho';

export const Desempenho = () => {
  return (
    <>
      <BoxPageTitleDesempenho></BoxPageTitleDesempenho>
      <OrganismeTabPanel arrayOpcoes={[
        {
          nomeTab: 'Colaborador',
          componente: AtomFormularioColaborador()
        },
        {
          nomeTab: 'Avaliação',
          componente: Teste(),
        }
      ]}/>
    </>
  )
}

export default Desempenho;
