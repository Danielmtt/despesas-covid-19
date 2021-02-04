import React from 'react';
import CaixaMenu from '../organisms/CaixaMenu.jsx';
import gerarLinhaMesAno from '../atoms/Linha-mes.jsx';
import BoxPageTitle from '../organisms/BoxPageTitle.jsx';
import CaixaPaginador from '../organisms/CaixaPaginador.jsx';
import styled from 'styled-components';
import CardsContainer from '../molecules/CardsContainer.jsx';

const DespesasCovidDiv = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
`;

const BoxInfosTitleCards = styled.div`
  padding: 0 15px;
  width: 100%;
`;

export const DespesasCovid = () => {
  return (
    <DespesasCovidDiv>
      <CaixaMenu
        linhaAno={[1, 2]}
        gerarLinhaMesAno={gerarLinhaMesAno}
      ></CaixaMenu>
      <BoxInfosTitleCards>
        <BoxPageTitle></BoxPageTitle>
        <CaixaPaginador></CaixaPaginador>
        <CardsContainer></CardsContainer>
      </BoxInfosTitleCards>
    </DespesasCovidDiv>
  );
};
export default DespesasCovid;
