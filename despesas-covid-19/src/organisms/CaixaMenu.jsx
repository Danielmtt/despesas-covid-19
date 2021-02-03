import React from 'react';
import MenuLateral from '../molecules/Menu-lateral.jsx';
import gerarLinhaMesAno from '../atoms/Linha-mes.jsx';
import styled from 'styled-components';

const Caixa = styled.div`
  background-color: #009c3b;
  width: 200px;
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
