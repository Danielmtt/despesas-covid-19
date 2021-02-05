import React from 'react';
import styled from 'styled-components';
import Card from '../atoms/Card';
import { DespesasContext } from '../providers/despesas-context';

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
  height: 75vh;
  font- family: "Roboto";
  overflow-y: scroll;
  padding-top: 20px;
`;

const CardsContainer = () => {
  
  const { despesas } = React.useContext(DespesasContext);
  
  return (
    <Container>
      {despesas.map((data, index) => {
        if (data) {
          return (
            <Card
              programa={data.programa}
              acao={data.acao}
              empenhado={data.empenhado}
              pago={data.pago}
              liquidado={data.liquidado}
              key={index}
            />
          );
        }
      })}
    </Container>
  );
};
export default CardsContainer;
