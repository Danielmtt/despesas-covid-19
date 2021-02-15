import React from 'react';
import styled from 'styled-components';
import CardPagina from '../atoms/CardPagina';

const CardStyle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 260px;
  border: solid #e4cc37 5px;
  background: #fffafa;
  height: auto;
  cursor: pointer;
  padding: 24px;
  margin: 10px;
  box-shadow: 3px 4px 10px 1px rgba(0,0,0,0.75);
  font- family: "Roboto";
`;

function CardsPaginas(props: { titulo: string; icon: string }) {
  return (
    <CardStyle>
      <img src={props.icon} width="40"></img>
      <CardPagina titulo={props.titulo}></CardPagina>
    </CardStyle>
  );
}
export default CardsPaginas;
