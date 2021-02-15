import React from 'react';
import CaixaMenu from '../organisms/CaixaMenu';
import BoxPageTitle from '../organisms/BoxPageTitle';
import CaixaPaginador from '../organisms/CaixaPaginador';
import styled from 'styled-components';
import CardsContainer from '../organisms/CardsContainer';
import Spinner from '../atoms/Spinner';
import BoxMensagemBoasVindas from '../organisms/BoxMensagemBoasVindas';

const LoaderCSS = styled.div`
  top: 0;
`;

const DespesasCovidDiv = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  overflow-y: hidden;
  background-color: rgba(0,0,0,0.03);
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
        <LoaderCSS>
          <Spinner />
        </LoaderCSS>
        <CaixaPaginador />
        <CardsContainer />
      </BoxInfosTitleCards>
    </DespesasCovidDiv>
  );
};
export default DespesasCovid;
