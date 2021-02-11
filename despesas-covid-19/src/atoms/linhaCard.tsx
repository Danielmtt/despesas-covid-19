import React from 'react';
import { StyledComponent } from 'styled-components';

export default function LinhaCard(props: {
  titulo: string;
  conteudo: string;
  estiloTitulo: StyledComponent<'h2', any, {}, any>;
  estiloConteudo: StyledComponent<'p', any, {}, any>;
}) {
  if (props) {
    return (
      <>
        <props.estiloTitulo>{props.titulo}</props.estiloTitulo>
        <props.estiloConteudo>{props.conteudo}</props.estiloConteudo>
      </>
    );
  } else {
    return <></>;
  }
}
