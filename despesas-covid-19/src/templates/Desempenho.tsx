import React from 'react';
import OrganismeTabPanel from '../organisms/organisms-desempenho/Organisme-Tab-Panel';
import OrganismeFormularioColaborador from '../organisms/organisms-desempenho/Organisme-Fomulario-Colaborador';
import OrganismeFormularioAvaliacao from '../organisms/organisms-desempenho/Organisme-Formulario-Avaliacao';
import BoxPageTitleDesempenho from '../organisms/organisms-desempenho/BoxPageTitleDesempenho';
import { OrganismeGridAvaliacoes } from '../organisms/organisms-desempenho/organisms-avaliacoes';

export const Desempenho = () => {
  return (
    <>
      <BoxPageTitleDesempenho></BoxPageTitleDesempenho>
      <OrganismeTabPanel arrayOpcoes={[
        {
          nomeTab: 'Colaborador',
          componente: [OrganismeFormularioColaborador()]
        },
        {
          nomeTab: 'Avaliação',
          componente: [OrganismeFormularioAvaliacao(), OrganismeGridAvaliacoes()]
        },
        // {
        //   nomeTab: 'Avaliações',
        //   componente: OrganismeGridAvaliacoes(),
        // }
      ]}/>
    </>
  )
}

export default Desempenho;
