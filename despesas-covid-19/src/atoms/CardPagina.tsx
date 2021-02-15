import React from 'react';
import styled from 'styled-components';

const Texto = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #002776;
  font-weight: bold;
  font-size: 18px;
`;

const CardPagina = (props: { titulo: string }) => {
  return <Texto>{props.titulo}</Texto>;
};

export default CardPagina;
