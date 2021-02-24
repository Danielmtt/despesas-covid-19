import * as React from 'react';
import { StyledComponent } from 'styled-components';
import AtomAutocompleteColaborador from '../../atoms/atoms-desempenho/Atom-Autocomplete-colaborador';
import AtomBotao from '../../atoms/atoms-desempenho/atom-botao';

export const MoleculeFormularioAvaliacao = (props: {
  style: StyledComponent<'div', any, {}>;
  register: any;
}) => {
  return (
    <props.style>
      <AtomAutocompleteColaborador
        name="idColaborador"
        register={props.register}
      />
      <AtomBotao textoBotao={'Salvar'}/>
    </props.style>
  )
}

export default MoleculeFormularioAvaliacao;