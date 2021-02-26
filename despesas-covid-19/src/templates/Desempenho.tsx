import React from 'react';
import Teste from '../atoms/atoms-desempenho/Atom-teste';
import OrganismeTabPanel from '../organisms/organisms-desempenho/Organisme-Tab-Panel';
import AtomFormularioColaborador from '../organisms/organisms-desempenho/Atom-Fomulario-Colaborador';
<<<<<<< HEAD
import MultipleSelect from '../atoms/atoms-desempenho/Atom-multi-selecao-colaborador';
=======
import BoxPageTitleDesempenho from '../organisms/organisms-desempenho/BoxPageTitleDesempenho';
import { OrganismeGridAvaliacoes } from '../organisms/organisms-desempenho/organisms-avaliacoes';
>>>>>>> master

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
        },
        {
<<<<<<< HEAD
          nomeTab: 'Gráfico De Desempenho',
          componente: MultipleSelect(),
=======
          nomeTab: 'Avaliações',
          componente: OrganismeGridAvaliacoes(),
>>>>>>> master
        }

      ]}/>
    </>
  )
}

export default Desempenho;
