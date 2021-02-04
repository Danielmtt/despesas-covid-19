import React from 'react';
import styled from 'styled-components';
import Card from '../atoms/Card';

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
  height: 80vh;
  font- family: "Roboto";
  overflow-y: scroll;
  padding-top: 20px;
`;

const CardsContainer = () => {
  return (
    <Container>
      <Card
        programa={'EDUCACAO SUPERIOR - GRADUACAO, POS-GRADUACAO, ENSINO, PESQUI'}
        acao={'ENFRENTAMENTO DA EMERGENCIA DE SAUDE PUBLICA DE IMPORTANCIA INTERNACIONAL DECORRENTE DO CORONAVIRUS'}
        empenhado={'347.677,43'}
        pago={'297.771,51'}
        liquidado={'297.771,51'}
      />
      <Card
        programa={'EDUCACAO SUPERIOR - GRADUACAO, POS-GRADUACAO, ENSINO, PESQUI'}
        acao={'ENFRENTAMENTO DA EMERGENCIA DE SAUDE PUBLICA DE IMPORTANCIA INTERNACIONAL DECORRENTE DO CORONAVIRUS'}
        empenhado={'347.677,43'}
        pago={'297.771,51'}
        liquidado={'297.771,51'}
      />
      <Card
        programa={'EDUCACAO SUPERIOR - GRADUACAO, POS-GRADUACAO, ENSINO, PESQUI'}
        acao={'ENFRENTAMENTO DA EMERGENCIA DE SAUDE PUBLICA DE IMPORTANCIA INTERNACIONAL DECORRENTE DO CORONAVIRUS'}
        empenhado={'347.677,43'}
        pago={'297.771,51'}
        liquidado={'297.771,51'}
      />
      <Card
        programa={'EDUCACAO SUPERIOR - GRADUACAO, POS-GRADUACAO, ENSINO, PESQUI'}
        acao={'ENFRENTAMENTO DA EMERGENCIA DE SAUDE PUBLICA DE IMPORTANCIA INTERNACIONAL DECORRENTE DO CORONAVIRUS'}
        empenhado={'347.677,43'}
        pago={'297.771,51'}
        liquidado={'297.771,51'}
      />
    </Container>
  );
};
export default CardsContainer;
