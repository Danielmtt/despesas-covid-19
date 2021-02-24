import React from 'react';
import OrganismeTabPanel from '../organisms/organisms-desempenho/Organisme-Tab-Panel';
import AtomFormularioColaborador from '../organisms/organisms-desempenho/Atom-Fomulario-Colaborador';
import AtomAutocompleteColaborador from '../atoms/atoms-desempenho/Atom-Autocomplete-colaborador';

export const Desempenho = () => {
  return (
    <>
      <OrganismeTabPanel arrayOpcoes={[
        {
          nomeTab: 'Colaborador',
          componente: [AtomFormularioColaborador()]
        },
        {
          nomeTab: 'Avaliação',
          componente: [AtomAutocompleteColaborador()]
        }
      ]}/>
    </>
  )
}

export default Desempenho;
