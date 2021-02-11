import React from 'react';
import CaixaMenu from '../organisms/CaixaMenu.jsx';
import gerarLinhaMesAno from '../atoms/Linha-mes.jsx';
import BoxPageTitle from '../organisms/BoxPageTitle.jsx';
import CaixaPaginador from '../organisms/CaixaPaginador.jsx';
import styled from 'styled-components';
import CardsContainer from '../molecules/CardsContainer.jsx';
import { Spinner } from '../atoms/Spinner.jsx';
import BoxMensagemBoasVindas from '../organisms/BoxMensagemBoasVindas.jsx';

const LoaderCSS = styled.div`
  top: 0;
  posision: absolute;
`;

const DespesasCovidDiv = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  overflow-y: hidden;
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
