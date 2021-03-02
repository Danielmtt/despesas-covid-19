import React from 'react';
import OrganismeTabPanel from '../organisms/organisms-desempenho/Organisme-Tab-Panel';
import AtomFormularioColaborador from '../organisms/organisms-desempenho/Atom-Fomulario-Colaborador';
import BoxPageTitleDesempenho from '../organisms/organisms-desempenho/BoxPageTitleDesempenho';
import { OrganismeGridAvaliacoes } from '../organisms/organisms-desempenho/organisms-avaliacoes';
import OrganismeGraficoDesempenho from '../organisms/organisms-desempenho/Organisme-Grafico-Desempenho';

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
          nomeTab: 'Gráfico De Desempenho',
          componente: OrganismeGraficoDesempenho(),
        }
      ]}/>
    </>
  )
}

export default Desempenho;
