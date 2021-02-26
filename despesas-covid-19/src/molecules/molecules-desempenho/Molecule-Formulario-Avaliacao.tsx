import * as React from 'react';
import { StyledComponent } from 'styled-components';
import AtomAutocompleteColaborador from '../../atoms/atoms-desempenho/Atom-Autocomplete-colaborador';
import AtomBotao from '../../atoms/atoms-desempenho/atom-botao';
import AtomCampoNota from '../../atoms/atoms-desempenho/Atom-Campo-Nota';
import AtomSelectEnum from '../../atoms/atoms-desempenho/Atom-Select-Enum';
import AtomSeletorData from '../../atoms/atoms-desempenho/Atom-Seletor-Data';
import { ArrayResultado } from '../../settings/consts/ArrayResultado';

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
      <AtomCampoNota 
        name="nota"
        register={props.register}
        mask={'9.99'}
      />
      <AtomSeletorData 
        name="data"
        register={props.register}
      />
      <AtomSelectEnum
        name="resultado"
        register={props.register}
        valoresEnum={ArrayResultado}
        placeholder={'Resultado'}
      />
      <AtomBotao textoBotao={'Salvar'}/>
    </props.style>
  )
}

export default MoleculeFormularioAvaliacao;