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
  width: 450px;
  justify-content: space-between;
  font-size: 10px;
  color: #002776;
`;

export const Paginador = () => {
  const [paginaAtual, setPaginaAtual] = useState(1);

  // if (dataCOVID19.length >= 15) {
  return (
    <CaixaPaginador>
      <BotaoVoltar
        paginaRecebida={paginaAtual}
        onChangePagina={setPaginaAtual}
      ></BotaoVoltar>
      <BotaoAvancar
        paginaRecebida={paginaAtual}
        onChangePagina={setPaginaAtual}
      ></BotaoAvancar>
      <TextoPaginador
        paginaAtual={paginaAtual}
        totalItens={dataCOVID19?.length}
      ></TextoPaginador>
    </CaixaPaginador>
  );
  // } else {
  //   return <></>;
  // }
};
export default Paginador;
