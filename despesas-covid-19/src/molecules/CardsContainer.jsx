import React from 'react';
import styled from 'styled-components';
import Card from '../atoms/Card';
import { DespesasContext } from '../providers/despesas-context';

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
  height: 90%;
  font- family: "Roboto";
  overflow-y: scroll;
  padding-top: 20px;
`;

const CardsContainer = () => {
  const { despesas } = React.useContext(DespesasContext);

  if (despesas && despesas.length > 0) {
    return (
      <Container>
        {despesas.map((data, index) => {
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
        })}
      </Container>
    );
  } else {
    return <></>;
  }
};

export default CardsContainer;
