import { TextField } from '@material-ui/core';
import React, {useState} from 'react';
import { format } from 'date-fns';
import AtomErroCampo from './Atom-Erro-Campo';
import styled from 'styled-components';

const Campo = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px;
`;

export const AtomSeletorData = (props: {register: any; name: string}) => {

  const [erros, setErros] = useState({ colaborador: { preenchido: false } });
  const [value, setValue] = useState<string | undefined>();

  function validarPreenchido() {
    console.log(value);
    value ? setErros({colaborador: {preenchido: false}}) : setErros({colaborador: {preenchido: true}});
  }

  function dataAtual(): string{
    return format(new Date(), 'yyyy-MM-dd')
  }

  return(
    <Campo>
      <TextField
        type="date"
        error={erros.colaborador.preenchido}
        onChange={(event) =>{setValue(event.target.value); setTimeout(() => validarPreenchido(), 500)}}
        defaultValue={dataAtual()}
        required
        inputRef={props.register}
        name={props.name}
        variant="outlined"
      />
      <AtomErroCampo validacao={erros.colaborador.preenchido} width={'auto'} mensagem={'Campo obrigatório'}></AtomErroCampo>
    </Campo>
  )
}

export default AtomSeletorData;