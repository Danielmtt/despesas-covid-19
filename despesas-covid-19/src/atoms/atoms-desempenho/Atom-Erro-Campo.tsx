import * as React from 'react';
import styled from 'styled-components';

const MensagemErro = styled.span`
  color: #F44336;
  font-size: 14px;
  width: auto;
`;

export const AtomErroCampo = (props: {validacao: boolean, mensagem: string}) =>{
  if(props.validacao){
    return(
      <MensagemErro>
        {props.mensagem}
      </MensagemErro>
    )
  }
  else{
    return(<></>);
  }
}

export default AtomErroCampo;