import React from 'react';

const textoPaginador = (props) => {
  if (props) {
    return (
      <h2>
        pagina {props.paginaAtual} com um total de {props.totalItens} itens
      </h2>
    );
  } else {
    <></>;
  }
};

export default textoPaginador;
