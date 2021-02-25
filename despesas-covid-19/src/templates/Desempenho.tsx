import React from 'react';
import Teste from '../atoms/atoms-desempenho/Atom-teste';
import OrganismeTabPanel from '../organisms/organisms-desempenho/Organisme-Tab-Panel';
import AtomFormularioColaborador from '../organisms/organisms-desempenho/Atom-Fomulario-Colaborador';
import { OrganismeGridAvaliacoes } from '../organisms/organisms-desempenho/organisms-avaliacoes';

export const Desempenho = () => {
  return (
    <>
      <OrganismeTabPanel arrayOpcoes={[
        {
          nomeTab: 'Colaborador',
          componente: AtomFormularioColaborador()
        },
        {
          nomeTab: 'Avaliação',
          componente: Teste(),
        },
        {
          nomeTab: 'Avaliações',
          componente: OrganismeGridAvaliacoes(),
        }
      ]}/>
    </>
  )
}

export default Desempenho;
