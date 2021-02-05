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
  padding: 10px 15px;
  width: auto;
  font-size: 10px;
  color: #002776;
  border-radius: 5px;
  background-color: #ffdf00;
`;

const MarginVertical = styled.div`
  margin: 0 5px;
`;

export const Paginador = () => {
  const { paginaAtual, despesas } = React.useContext(DespesasContext);

  if (despesas?.length !== 0) {
    return (
      <CaixaPaginador>
        {paginaAtual >= 2 && (
          <MarginVertical>
            <BotaoVoltar></BotaoVoltar>
          </MarginVertical>
        )}

        {despesas.length === 15 && (
          <MarginVertical>
            <BotaoAvancar></BotaoAvancar>
          </MarginVertical>
        )}
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
