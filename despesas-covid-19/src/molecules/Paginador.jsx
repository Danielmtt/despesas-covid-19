import React, { useState } from 'react';
import { dataCOVID19 } from '../services/ServiceApi.js';
import styled from 'styled-components';
import BotaoVoltar from '../atoms/Botao-voltar.jsx';
import BotaoAvancar from '../atoms/Botao-avancar.jsx';
import TextoPaginador from '../atoms/TextoPaginador.jsx';

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

  const [paginaAtual, setPaginaAtual] = useState(1);

  return (
    <CaixaPaginador>
      <MarginVertical>
        <BotaoVoltar
          paginaRecebida={paginaAtual}
          onChangePagina={setPaginaAtual}
        ></BotaoVoltar>
      </MarginVertical>

      <MarginVertical>
        <BotaoAvancar
          paginaRecebida={paginaAtual}
          onChangePagina={setPaginaAtual}
        ></BotaoAvancar>
      </MarginVertical>
      <TextoPaginador
        paginaAtual={paginaAtual}
        totalItens={dataCOVID19?.length}
      ></TextoPaginador>
    </CaixaPaginador>
  );
};
export default Paginador;
