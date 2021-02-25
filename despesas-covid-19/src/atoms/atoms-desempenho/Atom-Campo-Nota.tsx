import { TextField } from '@material-ui/core';
import InputMask from 'react-input-mask';
import * as React from 'react';
import { useState } from 'react';
import AtomErroCampo from './Atom-Erro-Campo';
import styled from 'styled-components';

const Campo = styled.div`
  display: flex;
  flex-direction: column;
  width: 150px;
`;

export const AtomCampoNota = (props: {
  register: any;
  name: string;
  mask: any;
}) => {
  const [erros, setErros] = useState({ nota: { valido: false } });

  function validarMunicipioOnChange(event: any) {
    let valor = Number(event.target.value);

    if(valor >= 0.00 && valor <= 3.00) {
      setErros({ nota: { valido: false } });
    } else {
      setErros({ nota: { valido: true } });
    }
  }

  return(
    <Campo>
      <InputMask onChange={(event) => {validarMunicipioOnChange(event)}} mask={props.mask} disabled={false}>
        {() => (
          <TextField
            name={props.name}
            inputRef={props.register({required: true, min:0.00, max:3.00})}
            error={erros.nota.valido}
            required
            style={{width: 115}}
            label={'Nota'}
            variant="outlined"
          />
        )}
      </InputMask>
      <AtomErroCampo validacao={erros.nota.valido} mensagem={'Insira uma nota entre 0.00 e 3.00'}></AtomErroCampo>
    </Campo>
  );
}

export default AtomCampoNota;