import React from 'react';
import MenuLateral from '../../molecules/molecules-despesas-publicas/Menu-lateral';
import gerarLinhaMesAno from '../../atoms/atmos-despesas-publicas/Linha-mes';
import styled from 'styled-components';

const Caixa = styled.div`
  background-color: #e4cc37;
  min-width: 200px;
  min-height: 100vh;
`;

export const CaixaMenu = () => {
  return (
    <Caixa>
      <MenuLateral
        linhaAno={[0, 1]}
        gerarLinhaMesAno={gerarLinhaMesAno}
      ></MenuLateral>
    </Caixa>
  );
};
export default CaixaMenu;
