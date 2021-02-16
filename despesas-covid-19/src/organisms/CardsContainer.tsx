import React from 'react';
import styled from 'styled-components';
import { DespesasContext } from '../providers/despesas-context';
import Card from '../molecules/Card';
import { Despesas } from '../settings/despesas';

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
  height: 85%;
  overflow-y: scroll;
  padding-top: 20px;
  box-sizing: border-box;
  padding-bottom: 75px;
`;

const CardsContainer = () => {
  const { despesas }: any = React.useContext(DespesasContext);

  if (despesas && despesas.length > 0) {
    return (
      <Container>
        {despesas.map((data: Despesas, index: number) => {
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
