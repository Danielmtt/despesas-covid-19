import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  margin-left: 10px;
  color: #002776;
`;
const Pagina = styled.h2`
  margin: 0;
`;
const Quantidade = styled.p`
  margin: 0;
`;

const textoPaginador = (props: { paginaAtual: number; totalItens: number }) => {
  if (props) {
    return (
      <Container>
        <Pagina> PAGINA {props.paginaAtual} </Pagina>
        <Quantidade>com um total de {props.totalItens} itens</Quantidade>
      </Container>
    );
  } else {
    return <></>;
  }
};

export default textoPaginador;
