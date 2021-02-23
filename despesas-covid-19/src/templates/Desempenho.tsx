import React from 'react';
import CampoMunicipio from '../atoms/atmos-despesas-publicas/CampoMunicipio';
import Teste from '../atoms/atoms-desempenho/Atom-teste';
import OrganismeTabPanel from '../organisms/organisms-desempenho/Organisme-Tab-Panel';

export const Desempenho = () => {
  return (
    <>
      <div>diego esteve aqui</div>
      <OrganismeTabPanel arrayOpcoes={[
        {
          nomeTab: 'Colaborador',
          componente: CampoMunicipio(),
        },
        {
          nomeTab: 'Avaliação',
          componente: Teste(),
        }
      ]}/>
    </>
  )
};
export default Desempenho;
