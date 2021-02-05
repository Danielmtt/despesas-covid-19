import React from 'react';
import styled from 'styled-components';
import BotaoVoltar from '../atoms/Botao-voltar.jsx';
import BotaoAvancar from '../atoms/Botao-avancar.jsx';
import TextoPaginador from '../atoms/TextoPaginador.jsx';
import { DespesasContext } from '../providers/despesas-context.js';

const CaixaPaginador = styled.div`
  position: absolute;
  bottom: 20px;
  display: flex;
  width: 450px;
  justify-content: space-between;
  font-size: 10px;
  color: #002776;
`;

export const Paginador = () => {
  const { paginaAtual, despesas } = React.useContext(DespesasContext);

  if (despesas?.length !== 0) {
    return (
      <CaixaPaginador>
        {paginaAtual >= 2 && <BotaoVoltar></BotaoVoltar>}
        {despesas.length === 15 && <BotaoAvancar></BotaoAvancar>}
        <TextoPaginador
          paginaAtual={paginaAtual}
          totalItens={despesas?.length}
        ></TextoPaginador>
      </CaixaPaginador>
    );
  } else {
    return <></>;
  }
};
export default Paginador;
