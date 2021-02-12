import React from 'react';
import styled from 'styled-components';
import { Mensagem } from '../settings/Mensagem';

const Titulo = styled.h2`
  color: #002776;
  font-size: 20px;
  padding: 40px;
  margin: 0 auto;
  width: fit-content;
`;

const MensagemBoasVindas = (props: Mensagem) => {
  const mensagem = props.mensagem ?? 'Titulo padrão';

  if (props) {
    return (
      <>
        <Titulo>{mensagem}</Titulo>
      </>
    );
  } else {
    return (
      <></>
    )
  }
};

export default MensagemBoasVindas;
