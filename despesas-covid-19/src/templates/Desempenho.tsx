import React from 'react';
import OrganismeTabPanel from '../organisms/organisms-desempenho/Organisme-Tab-Panel';
import AtomFormularioColaborador from '../organisms/organisms-desempenho/Atom-Fomulario-Colaborador';
import BoxPageTitleDesempenho from '../organisms/organisms-desempenho/BoxPageTitleDesempenho';
import { OrganismeGridAvaliacoes } from '../organisms/organisms-desempenho/organisms-avaliacoes';
import MoleculeGrafico from '../molecules/molecules-desempenho/Molecule-Grafico';

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
          nomeTab: 'Avaliações',
          componente: OrganismeGridAvaliacoes(),
        },
        {
          nomeTab: 'Desempenho de Avaliações',
          componente: MoleculeGrafico(),
        }
      ]}/>
    </>
  )
}

export default Desempenho;
