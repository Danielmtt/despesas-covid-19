import React from 'react';
import MenuLateral from '../molecules/Menu-lateral.jsx';
import gerarLinhaMesAno from '../atoms/Linha-mes.jsx';

export const D = () => {
  return (
    <MenuLateral
      linhaAno={[1, 2]}
      gerarLinhaMesAno={gerarLinhaMesAno}
    ></MenuLateral>
  );
};
export default D;
