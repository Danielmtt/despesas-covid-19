import React from 'react';
import styled from 'styled-components';

const Titulo = styled.h2`
  color: #002776;
  font-size: 20px;
  padding: 40px;
  margin: 0 auto;
  width: fit-content;
`;

const MensagemBoasVindas = (props) => {
  const mensagem = props.mensagem ?? 'Titulo padrão';

  if (props) {
    return (
      <>
        <Titulo>{mensagem}</Titulo>
      </>
    );
  } else {
    <></>;
  }
};

export default MensagemBoasVindas;
