import * as React from 'react';
import styled from 'styled-components';

export const AtomErroCampo = (props: {validacao: boolean, mensagem: string, width: string|number}) =>{
  const MensagemErro = styled.span`
    color: #F44336;
    font-size: 14px;
    width: ${props.width};
  `;
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