import React from 'react';
import CaixaMenu from '../organisms/CaixaMenu.jsx';
import gerarLinhaMesAno from '../atoms/Linha-mes.jsx';
import styled from 'styled-components';

const DespesasCovidDiv = styled.div`
  width: 100%;
  min-height: 100vh;
`;

export const DespesasCovid = () => {
  return (
    <DespesasCovidDiv>
      <CaixaMenu
        linhaAno={[1, 2]}
        gerarLinhaMesAno={gerarLinhaMesAno}
      ></CaixaMenu>
    </DespesasCovidDiv>
  );
};
export default DespesasCovid;
