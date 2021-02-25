import React from 'react';
import Teste from '../atoms/atoms-desempenho/Atom-teste';
import OrganismeTabPanel from '../organisms/organisms-desempenho/Organisme-Tab-Panel';
import AtomFormularioColaborador from '../organisms/organisms-desempenho/Atom-Fomulario-Colaborador';
import MultipleSelect from '../atoms/atoms-desempenho/Atom-multi-selecao-colaborador';

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
          nomeTab: 'Gráfico De Desempenho',
          componente: MultipleSelect(),
        }

      ]}/>
    </>
  )
}

export default Desempenho;
