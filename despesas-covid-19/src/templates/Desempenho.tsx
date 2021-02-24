import React from 'react';
import OrganismeTabPanel from '../organisms/organisms-desempenho/Organisme-Tab-Panel';
import OrganismeFormularioColaborador from '../organisms/organisms-desempenho/Organisme-Fomulario-Colaborador';
import OrganismeFormularioAvaliacao from '../organisms/organisms-desempenho/Organisme-Formulario-Avaliacao';

export const Desempenho = () => {
  return (
    <>
      <OrganismeTabPanel arrayOpcoes={[
        {
          nomeTab: 'Colaborador',
          componente: [OrganismeFormularioColaborador()]
        },
        {
          nomeTab: 'Avaliação',
          componente: [OrganismeFormularioAvaliacao()]
        }
      ]}/>
    </>
  )
}

export default Desempenho;
