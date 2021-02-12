import React from 'react';
import styled from 'styled-components';
import BotaoVoltar from '../atoms/Botao-voltar';
import BotaoAvancar from '../atoms/Botao-avancar';
import TextoPaginador from '../atoms/TextoPaginador';
import { DespesasContext } from '../providers/despesas-context.js';

const CaixaPaginador = styled.div`
  position: absolute;
  right: 3%;
  bottom: 7px;
  display: flex;
  padding: 10px 15px;
  width: max-content;
  font-size: 10px;
  color: #002776;
  border: solid #e4cc37 2px;
  background-color: #fffafa;
`;

const MarginVertical = styled.div`
  margin: 0 5px;
`;

export const Paginador = () => {
  const { paginaAtual, despesas }: any = React.useContext(DespesasContext);

  if (despesas && despesas?.length !== 0) {
    return (
      <CaixaPaginador>
        {paginaAtual >= 2 && (
          <MarginVertical>
            <BotaoVoltar />
          </MarginVertical>
        )}

        {despesas.length === 15 && (
          <MarginVertical>
            <BotaoAvancar />
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
