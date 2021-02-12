import React, { useContext } from 'react';
import styled from 'styled-components';
import { DespesasContext } from '../providers/despesas-context';

const Titulo = styled.h1`
  border-bottom: 1px solid #009c3b;
  color: #002776;
  font-size: 20px;
  padding: 10px;
  margin: 0 auto;
  width: fit-content;
`;

export type PageTitleInterface = {
  title: string;
}

const PageTitle = (props: PageTitleInterface) => {
  const { mesAnoSelecionado } = useContext<any>(DespesasContext);
  const title = props.title ?? 'Titulo padrão';
  if (props) {
    return (
      <>
        <Titulo>
          {title} {mesAnoSelecionado &&
          ' - '  + mesAnoSelecionado}
        </Titulo>
      </>
    );
  } else {
    <></>;
  }
};

export default PageTitle;
