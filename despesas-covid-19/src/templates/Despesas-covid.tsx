import React from 'react';
import CaixaMenu from '../organisms/orgamismes-despesas-publicas/CaixaMenu';
import BoxPageTitle from '../organisms/orgamismes-despesas-publicas/BoxPageTitle';
import CaixaPaginador from '../organisms/orgamismes-despesas-publicas/CaixaPaginador';
import styled from 'styled-components';
import CardsContainer from '../organisms/orgamismes-despesas-publicas/CardsContainer';
import BoxMensagemBoasVindas from '../organisms/orgamismes-despesas-publicas/BoxMensagemBoasVindas';

const DespesasCovidDiv = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  overflow-y: hidden;
  background-color: rgba(0, 0, 0, 0.03);
`;

const BoxInfosTitleCards = styled.div`
  padding: 0 15px;
  width: 100%;
`;

export const DespesasCovid = () => {
  return (
    <DespesasCovidDiv>
      <CaixaMenu />
      <BoxInfosTitleCards>
        <BoxPageTitle />
        <BoxMensagemBoasVindas />

        <CaixaPaginador />
        <CardsContainer />
      </BoxInfosTitleCards>
    </DespesasCovidDiv>
  );
};
export default DespesasCovid;
